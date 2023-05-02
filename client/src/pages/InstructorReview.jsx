import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

import InstructorReviewForm from "../components/InstructorReviewForm";
import InstructorReviewCard from "../components/InstructorReviewCard";
import InstructorAverageRating from "../components/InstructorAverageRating";

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FFD700',
    '&:hover': {
        backgroundColor: '#FFD700', 
    }
}));

let avgRating = {
    overall: "0.0",
    teaching: "0.0",
    workload: "0.0",
    grading: "0.0",
    caring: "0.0",
    interesting: "0.0",
    count: 0
}

function createAvgRating(data) {
    let avg = {}
    avg.overall = (Math.round(data[0].overall * 100) / 100).toFixed(1)
    avg.teaching = (Math.round(data[0].teaching * 100) / 100).toFixed(1)
    avg.workload = (Math.round(data[0].workload * 100) / 100).toFixed(1)
    avg.grading = (Math.round(data[0].grading * 100) / 100).toFixed(1)
    avg.caring = (Math.round(data[0].caring * 100) / 100).toFixed(1)
    avg.interesting = (Math.round(data[0].interesting * 100) / 100).toFixed(1)
    if (data[0].reviews) {
        avg.count = data[0].reviews
    }
    else {
        avg.count = 1
    } 
    return avg
}

function InstructorReview() {

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
        fetch('http://localhost:8000/instructor/' + id)
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(response)
            }
            return response.json()
        })
        .then(json => parseData(json))
        .catch(error => console.log(error))
    })

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <Container>
        <AppBar position="static" style={{ background: '#333232' }}>
            <Toolbar variant="dense">
                <Link href="/" color="inherit" underline="none">BoilerReviews</Link> 
                <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%', margin:'0',  fontFamily:'monospace'}}>
                    {id}
                </Typography> 
            </Toolbar>
        </AppBar>
        <Grid container spacing={2} marginBottom={5}>
            <Grid item xs={12} md={8}>
                <InstructorAverageRating overall={avg.overall} teaching={avg.teaching} workload={avg.workload}
                caring={avg.caring} interesting={avg.interesting} grading={avg.grading} reviews={avg.count}/>
            </Grid>
            <Grid item xs={6} md={4}>
                <Box sx={{pt:12,pl:30}}>
                    <ColorButton onClick={handleClick} style={{fontFamily:'monospace', color:'black'}}>Write Review</ColorButton>
                </Box>
            </Grid>
        </Grid>
        <div>
            {showReviews && reviews.map(r => {
                return <div key={r.id}>         
                    <InstructorReviewCard course={r.course} term={r.term} year={r.year} workload={r.workload}
                    grade={r.grade} delivery={r.delivery} recommendation={r.recommendation} overall={r.overall}
                    teaching={r.teaching} grading={r.grading} interesting={r.interesting} caring={r.caring} 
                    review={r.review} time={r.time}/>
                    <br></br>
                </div>
            })}
        </div>
        <div ref={ref}>
            <InstructorReviewForm instructor={id}/>
        </div>

    </Container>
    )
}

export default InstructorReview