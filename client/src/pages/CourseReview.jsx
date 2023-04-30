import React from "react";
import { useState, useEffect } from "react";
import {useRef} from 'react';
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CourseReviewForm from "../components/CourseReviewForm";
import CourseReviewCard from "../form_components/CourseReviewCard";
import CourseAverageRating from "../form_components/CourseAverageRating";

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'gold',
    '&:hover': {
        backgroundColor: 'gold', 
    }
}));

function formatCourse(str) {
    return str.replace(/(\D)(\d)/g, '$1 $2')
}

function CourseReview() {
    const {id} = useParams()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/course/' + id)
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(json => setReviews(json))
    })

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const courseID = formatCourse(id)

    return (
        <Container>
            <AppBar position="static" style={{ background: '#333232' }}>
                <Toolbar variant="dense" sx={{mx: "auto"}}>
                    <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%', margin:'0', fontFamily:'monospace'}}>
                        {courseID}
                    </Typography> 
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} marginBottom={5}>
                
                <CourseAverageRating overall="4" difficulty="4.5" standardized='4' interesting='4' usefulness='4.5'/>

                <Grid item xs={6} md={4}>
                    <Box sx={{pt:12,pl:30}}>
                        <ColorButton onClick={handleClick} style={{fontFamily:'monospace', color:'black'}}>Write Review</ColorButton>
                    </Box>
                </Grid>
            </Grid>

            <CourseReviewCard instructor='instructor' term='term' year='year' workload='workload' grade='grade' evaluation='evaluation' overall='overall' difficulty='difficulty' standardized='standardized' interesting='interesting' useful='useful' review='review' time='time' likes='likes'/>

            <div>
                {reviews.map(review => {
                    return <div> {JSON.stringify(review)} </div>
                })}
            </div>
            <div ref={ref}>
                <CourseReviewForm course={courseID}/>
            </div>
        </Container>
    )
}

export default CourseReview