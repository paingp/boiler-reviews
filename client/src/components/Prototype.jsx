import Button from "@mui/material/Button"; 
import { useForm } from "react-hook-form";
import FTextField from "../form_components/FormTextField";

export default function Test() {
    const {handleSubmit, control} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FTextField name="instructor" control={control} label="Instructor" required={true}/>
                <Button
                type="submit"
                variant="contained"
                sx={{maxWidth: 0.25, mt: 3, mb: 2}}
                >
                    Submit
                </Button>
            </form>
        </div>    
    )
/*
    return (
        <Container maxWidth="md" sx={{border: '1px solid black'}}>
          <h3>Course Review Form</h3>
          <Box
            sx={{
              p: 2, border: '1px solid grey',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: 500
            }}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2} justifyContent="space-between">
                            <Grid item xs={12} md={6}>
                                <TextField id="instructor" label="Instructor" variant="filled" fullWidth/>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                                    <InputLabel id="term">Term</InputLabel>
                                    <Select
                                    labelId="term"
                                    id="term-select"
                                    label="Term"
                                    >
                                        <MenuItem value={10}>Fall</MenuItem>
                                        <MenuItem value={20}>Spring</MenuItem>
                                        <MenuItem value={30}>Summer</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                                    <InputLabel id="year">Year</InputLabel>
                                    <Select
                                    labelId="year"
                                    id="year-select"
                                    label="Year"
                                    >
                                        <MenuItem value={2023}>2023</MenuItem>
                                        <MenuItem value={2022}>2022</MenuItem>
                                        <MenuItem value={2021}>2021</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <TextField type="number"
                                    id="workload"
                                    name="workload"
                                    label="Avg. Workload"
                                    variant='filled'
                                    InputProps={{inputProps: {min: 0, max: 24, step: 'any'}}}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel id="eval">Evaluation</InputLabel>
                                    <Select
                                    labelId="eval"
                                    id="eval-select"
                                    label="Evaluation"
                                    >
                                        <MenuItem value="Exam">Exam Heavy</MenuItem>
                                        <MenuItem value="Project">Project Heavy</MenuItem>
                                        <MenuItem value="Quiz">Quiz Heavy</MenuItem>
                                        <MenuItem value="Assignment">Assignment Heavy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                                    <InputLabel id="grade">Grade</InputLabel>
                                    <Select
                                    labelId="grade"
                                    id="grade-select"
                                    label="Grade"
                                    >
                                        <MenuItem value='A'>A</MenuItem>
                                        <MenuItem value='B'>B</MenuItem>
                                        <MenuItem value='C'>C</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <div style={{marginTop: "25px"}}>   
                            <InputLabel>Comment on the Course</InputLabel>
                            <TextField
                                label="Comments on the course"
                                multiline
                                rows={8}
                                variant="filled"
                                fullWidth/>
                            </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx = {{border: '1px solid green', height: 390}}>
                            <Typography component="legend">Overall</Typography>
                            <Rating name="overall" size="large" precision={0.5}/>
                            <Typography component="legend">Grading</Typography>
                            <Rating name="grading" size="large" precision={0.5}/>
                            <Typography component="legend">Interesting</Typography>
                            <Rating name="interesting" size="large" precision={0.5}/>
                            <Typography component="legend">Useful</Typography>
                            <Rating name="useful" size="large" precision={0.5}/>
                            <Typography component="legend">Organization</Typography>
                            <Rating name="organization" size="large" precision={0.5}/>
                        </Box>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{maxWidth: 0.25, mt: 3, mb: 2}}
                    >
                        Submit
                </Button>    
            </Box>
          </Box>
        </Container>
    )*/
}