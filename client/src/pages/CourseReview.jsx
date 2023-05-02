import React from "react";
import { useState, useEffect } from "react";
import {useRef} from 'react';
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

import CourseReviewForm from "../components/CourseReviewForm";
import CourseReviewCard from "../components/CourseReviewCard";
import CourseAverageRating from "../components/CourseAverageRating";

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'gold',
    '&:hover': {
        backgroundColor: 'gold', 
    }
}));

function formatCourse(str) {
    return str.replace(/(\D)(\d)/g, '$1 $2')
}

let avgRating = {
    overall: "0.0",
    difficulty: "0.0",
    workload: "0.0",
    standardized: "0.0",
    interesting: "0.0",
    useful: "0.0",
    count: 0
}

function createAvgRating(data) {
    let avg = {}
    avg.overall = data[0].overall
    avg.difficulty = data[0].difficulty
    avg.workload = data[0].workload
    avg.standardized = data[0].standardized
    avg.interesting = data[0].interesting
    avg.useful = data[0].useful
    if (data[0].reviews) {
        avg.count = data[0].reviews
    }
    else {
        avg.count = 1
    } 
    return avg
}

function CourseReview() {
    const {id} = useParams()

    const [reviews, setReviews] = useState([])
    const [showReviews, setShowReviews] = useState(false)
    const [avg, setAvg] = useState(avgRating)

    function parseData(data) {
        if (data.length === 1) {
            setAvg(createAvgRating(data.review))
            setReviews(data.review)
        }
        else {
            setAvg(createAvgRating(data.stats))
            setReviews(data.reviews)
        }
        setShowReviews(true)
    }

    useEffect(() => {
        fetch('http://localhost:8000/course/' + id)
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(response)
            }
            return response.json()
        })
        .then(json => parseData(json))
        .catch(error => console.log(error))
        //.then(response => response.json())
        //.catch(error => setShowReviews(false))
        //.then(json => parseData(json))
    })

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const courseID = formatCourse(id)

    return (
        <Container>
            <AppBar position="static" style={{ background: '#333232' }}>
                <Toolbar variant="dense">
                    <Link href="/" color="inherit" underline="none">BoilerReviews</Link> 
                    <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%', margin:'0', fontFamily:'monospace'}}>
                        {courseID}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} marginBottom={5}>
                <CourseAverageRating overall={avg.overall} difficulty={avg.difficulty} workload={avg.workload} 
                standardized={avg.standardized} interesting={avg.interesting} useful={avg.useful} reviews={avg.count}/>
                <Grid item xs={6} md={4}>
                    <Box sx={{pt:12,pl:30}}>
                        <ColorButton onClick={handleClick} style={{fontFamily:'monospace', color:'black'}}>Write Review</ColorButton>
                    </Box>
                </Grid>
            </Grid>
            <div>
                {showReviews && reviews.map(r => {
                    return <div key={r.id}> 
                    <CourseReviewCard instructor={r.instructor} term={r.term} year={r.year} workload={r.workload} 
                    grade={r.grade} evaluation={r.evaluation} overall={r.overall} difficulty={r.difficulty}
                    standardized={r.standardized} interesting={r.interesting} useful={r.useful} review={r.review}
                    time={r.time}/> 
                        <br></br>
                    </div>
                })}
            </div>
            <div ref={ref}>
                <CourseReviewForm course={courseID} id={id}/>
            </div>
        </Container>
    )
}

export default CourseReview