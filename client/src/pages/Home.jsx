import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { instructors, courses, departments } from "../constants";

function Home() {
    const [course, setCourse] = useState('')
    const [inputCourse, setInputCourse] = useState(courses[0])

    const [department, setDepartment] = useState('')

    const navigate = useNavigate()

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
                        <Autocomplete id="course" options={courses}
                            value={course}
                            onChange={(event, newValue) => {
                            setCourse(newValue);
                            navigate('course/' + newValue)
                            }}
                            inputValue={inputCourse}
                            onInputChange={(event, newInputValue) => {
                            setInputCourse(newInputValue);
                            }}
                            sx={{ width: 300 }} 
                            renderInput={(params) => <TextField {...params} label="Course" />}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete sx={{ width: 300 }} id="instr" options={instructors} renderInput={(params) => <TextField {...params} label="Instructor" />}/>
                    </Grid>
                    <Grid item xs={4}>
                    <FormControl sx={{ width:300 }}>
                        <InputLabel id="department">Department</InputLabel>
                        <Select label="department" onChange={() => setDepartment({department})} value={department} MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}>
                            {departments.map((dept) => (
                                <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Home