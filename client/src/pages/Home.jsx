import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { instructors, courses, departments } from "../components/constants";
import CourseTable from "../components/CourseTable";

function Home() {
    const [course, setCourse] = useState(courses[0])
    const [inputCourse, setInputCourse] = useState('')

    const [instructor, setInstructor] = useState(instructors[0])
    const [inputInstructor, setInputInstructor] = useState('')

    const [department, setDepartment] = useState('')
    const [showDept, setShowDept] = useState(false)

    function updateDept(event) {
        setDepartment(event.target.value)
        setShowDept(true)
    }
    /*
    useEffect(() => {
        if (department !== "") {
            fetch('http://localhost:8000/department/' + department)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
        }
    }, [department])
    */
    const navigate = useNavigate()

    return (
        <Container>
            <AppBar position="static" style={{ background: '#333232' }}>
                <Toolbar variant="dense" sx={{mx: "auto"}}> </Toolbar>
            </AppBar>
            <Box sx={{pt:10}}>
                <h1 style={{textAlign:'center',fontFamily:'monospace', fontSize:'50px'}}>Boiler Reviews</h1>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="20vh">
                <Grid container spacing={2} align='center'>
                    <Grid item xs={4}>
                        <Autocomplete id="course" options={courses}
                            value={course}
                            onChange={(event, id) => {
                                setCourse(id);
                                if (id) {
                                    navigate('course/' + id)
                                }
                            }}
                            inputValue={inputCourse}
                            onInputChange={(event, newInputValue) => {
                                setInputCourse(newInputValue);
                            }}
                            sx={{ width: 300 }} 
                            renderInput={(params) => <TextField sx={{border: '1px solid gold', borderRadius: 1}} {...params} label="Course" />}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete id="instructor" options={instructors}
                            value={instructor}
                            onChange={(event, id) => {
                                setInstructor(id);
                                if (id) {
                                    navigate('instructor/' + id)
                                }
                            }}
                            inputValue={inputInstructor}
                            onInputChange={(event, newInputValue) => {
                                setInputInstructor(newInputValue);
                            }}
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            sx={{ width: 300 }} 
                            renderInput={(params) => <TextField sx={{border: '1px solid gold', borderRadius: 1}} {...params} label="Instructor" />}/>
                    </Grid>
                    <Grid item xs={4}>
                    <FormControl sx={{ width:300, border: '1px solid gold', borderRadius: 1 }}>
                        <InputLabel id="department">Department</InputLabel>
                        <Select label="department" value={department} onChange={updateDept} MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}>
                            {departments.map((dept) => (
                                <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    </Grid>
                    <Container sx={{mt:8, mb:10}}>
                        {showDept && <CourseTable department={department}/>}
                    </Container>
                </Grid>
            </Box>
        </Container>
    )
}

export default Home