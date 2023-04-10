import React from "react";
import { Box, Container, Grid } from "@mui/material";

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

import { instructors, courses, departments } from "../constants";
////////NO FUNCTIONALITY YET///////////////////
function Home() {

    return (
        <Container>
            <AppBar position="static" style={{ background: '#333232' }}>
                <Toolbar variant="dense" sx={{mx: "auto"}}>
                    <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%', margin:'0'}}></Typography> 
                </Toolbar>
            </AppBar>
            <h1 style={{textAlign:'center'}}>Boiler Reviews</h1>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <Grid container spacing={2} align='center'>
                    <Grid item xs={4}>
                        <Autocomplete sx={{ width: 300 }} id="instr" options={instructors} renderInput={(params) => <TextField {...params} label="Instructor" />}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete disablePortal sx={{ width: 300 }} id="course" options={courses} renderInput={(params) => <TextField {...params} label="Course" />}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete disablePortal sx={{ width: 300 }} id="department" options={departments} renderInput={(params) => <TextField {...params} label="Department" />}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Home