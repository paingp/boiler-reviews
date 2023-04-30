import React from "react";
import { Box, Container, Grid } from "@mui/material";
import {useRef} from 'react';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InstructorReviewForm from "../components/InstructorReviewForm";
import InstructorReviewCard from "../form_components/InstructorReviewCard";
import InstructorAverageRating from "../form_components/InstructorAverageRating";

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FFD700',
    '&:hover': {
        backgroundColor: '#FFD700', 
    }
  }));

function InstructorReview() {

    const {instructorId} = useParams()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/course/' + instructorId)
        .then(response => response.json())
        .then(json => setReviews(json))
    })

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <Container>
        <AppBar position="static" style={{ background: '#333232' }}>
            <Toolbar variant="dense" sx={{mx: "auto"}}>
                <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%', margin:'0',  fontFamily:'monospace'}}>
                    {instructorId}
                </Typography> 
            </Toolbar>
        </AppBar>
        <Grid container spacing={2} marginBottom={5}>
            <Grid item xs={12} md={8}>

                <InstructorAverageRating overall="4" teaching="4.5" caring='4' interesting='4' grading='4.5'/>

            </Grid>
            <Grid item xs={6} md={4}>
                <Box sx={{pt:12,pl:30}}>
                    <ColorButton onClick={handleClick} style={{fontFamily:'monospace', color:'black'}}>Write Review</ColorButton>
                </Box>
            </Grid>
        </Grid>

        <InstructorReviewCard course='course' term='term' year='year' workload='workload' grade='grade' delivery='delivery' recommendation='recommendation' overall='overall' teaching='teaching' grading='grading' interesting='interesting' caring='caring' review='review' time='time' likes='likes'/>
        
        <div>
            {reviews.map(review => {
                return <div> {JSON.stringify(review)} </div>
            })}
        </div>
        <div ref={ref}>
            <br/>
            <InstructorReviewForm instructor={instructorId}/>
            <br/>
        </div>

    </Container>
    )
}

export default InstructorReview