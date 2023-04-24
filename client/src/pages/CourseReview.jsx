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
import CourseReviewForm from "../components/CourseReviewForm";

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'gold',
    '&:hover': {
        backgroundColor: 'gold', 
    }
  }));


function CourseReview() {
    const {courseId} = useParams()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/course/' + courseId)
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
                    <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%', margin:'0', fontFamily:'monospace'}}>
                        {courseId}
                    </Typography> 
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} marginBottom={5}>
                <Grid item xs={12} md={8}>
                    <Box sx={{width: 875, height: 100, mt:2, backgroundColor: '#FDDC5C'}}>
                        <Box sx={{pt:1}}>
                            <p style={{textAlign:'center', fontFamily:'monospace', fontStyle:'italic', fontSize:'15.5px'}}> 
                                Overall &nbsp; 
                                Average Difficulty &nbsp;
                                Average Standardization &nbsp; 
                                Average Interest &nbsp; 
                                Average Usefulness
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
            <div>
                {reviews.map(review => {
                    return <div> {JSON.stringify(review)} </div>
                })}
            </div>
            <div ref={ref}>
                <CourseReviewForm course={courseId}/>
            </div>
        </Container>
    )
}

export default CourseReview