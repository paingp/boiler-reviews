import React from "react";
import { Box, Container, Grid } from "@mui/material";
import {useRef} from 'react';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
                <Box sx={{width: 875, height: 100, mt:2, backgroundColor: '#FDDC5C'}}>
                    <Box sx={{pt:1}}>
                        <p style={{textAlign:'center', fontFamily:'monospace', fontStyle:'italic', fontSize:'15.5px'}}> 
                            Overall &nbsp; &nbsp;
                            Average Teaching &nbsp; &nbsp;
                            Average Care &nbsp; &nbsp;
                            Average Interest &nbsp; &nbsp;
                            Average Grading
                        </p>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} md={4}>
                <Box sx={{pt:12,pl:30}}>
                    <ColorButton onClick={handleClick} style={{fontFamily:'monospace', color:'black'}}>Write Review</ColorButton>
                </Box>
            </Grid>
        </Grid>

        <Card sx={{mx: "auto", border: '1px solid gold'}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Typography component="flex" sx={{ mr: 10}} style={{fontFamily:'monospace'}}>
                        <strong>Course:</strong> CS304
                        </Typography>
                        <Typography component="flex" sx={{ mr: 10}}style={{fontFamily:'monospace'}}>
                        <strong>Grade:</strong> A
                        </Typography>
                        <Typography component="flex" sx={{ mr: 10 }}style={{fontFamily:'monospace'}}>
                        <strong>Term:</strong> Spring 
                        <br />
                        </Typography>
                        <Typography component="flex" sx={{ mr: 10 }} style={{fontFamily:'monospace'}}>
                        <strong>Style:</strong> Hybrid
                        </Typography>
                        <Typography component="flex" style={{fontFamily:'monospace'}}>
                        <strong>Year:</strong> 2022
                        <br/>
                        </Typography>
                        <Typography component="flex" style={{fontFamily:'monospace'}}>
                        <strong>Recommendation:</strong> I recommend this professor for all their courses
                        </Typography>
                        <Typography style={{fontFamily:'monospace'}}>
                        <strong>Comments:</strong> Great class, no homework. Lots of quizzes. Great class, no homework. Lots of quizzes.  Great class, no homework. Lots of quizzes. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography style={{fontFamily:'monospace'}}>
                            <strong>Overall:</strong> 4
                            <br/>
                            <strong>Teaching:</strong> 4
                            <br/>
                            <strong>Caring:</strong> 4
                            <br/>
                            <strong>Interesting:</strong> 4
                            <br/>
                            <strong>Grading:</strong> 4
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Typography style={{fontFamily:'monospace'}}>
                            <strong>Date</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        
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