import React from "react";
import { Box, Container, Grid } from "@mui/material";

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InstructorReviewForm from "../components/InstructorReviewForm";

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


    return (
        <Container>
        <AppBar position="static" style={{ background: '#333232' }}>
            <Toolbar variant="dense" sx={{mx: "auto"}}>
                <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%', margin:'0'}}>
                    {instructorId}
                </Typography> 
            </Toolbar>
        </AppBar>
        <Grid container spacing={2} marginBottom={5}>
            <Grid item xs={12} md={8}>
                <Box sx={{width: 500, height: 83, mt:2, backgroundColor: '#FFD700'}}>
                <Box sx={{m:1}}>
                            <h3>
                                <div>Overall: </div>
                                <div>Average Grade:</div>
                            </h3>
                        </Box>
                </Box>
            </Grid>
            <Grid item xs={6} md={4}>
                <Box sx={{pt:8,pl:30}}>
                <a href="/instrreviewform">
                    <ColorButton>Write Review</ColorButton>
                </a>
                </Box>
            </Grid>
        </Grid>
        <div>
            {reviews.map(review => {
                return <div> {JSON.stringify(review)} </div>
            })}
        </div>
        <div>
            <InstructorReviewForm instructor={instructorId}/>
        </div>
    </Container>
    )
}

export default InstructorReview