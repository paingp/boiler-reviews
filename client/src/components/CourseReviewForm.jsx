import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button"; 
import { useForm } from "react-hook-form";
import Dropdown from "../form_components/Dropdown";
import NumberInput from "../form_components/NumberInput";
import MultiSelect from "../form_components/MultiSelect";
import FormRating from "../form_components/FormRating"
import ReviewInput from "../form_components/ReviewInput";
import { instructors } from "../constants";

const terms = ["Fall", "Spring", "Summer"];

const year = (new Date()).getFullYear();
const years = Array.from(new Array(6), (val, idx) => year - idx);

const evalMethods = ["Exam heavy", "Project heavy", "Quiz heavy", "Assignments heavy"];

const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C"];

export default function CourseReviewForm() {
    const {handleSubmit, control} = useForm();

    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    const onSubmit = (data) => {
        console.log(data)  
        postData("http://localhost:8000/submit", data)
    };

    const onInvalid = (errors) => console.error(errors);

    return (
        <Container maxWidth="md" sx={{border: '1px solid black'}}>
            <h3>Course Review Form</h3>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <MultiSelect name="instr" control={control} label="Instructor" options={instructors}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Dropdown name="term" control={control} label="Term" options={terms} required={true}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Dropdown name="year" control={control} label="Year" options={years} required={true}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <NumberInput name="workload" control={control} label="Workload" required={true}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <MultiSelect name="eval" control={control} label="Evaluation" options={evalMethods}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Dropdown name="grade" control={control} label="Grade" options={grades}/>
                                </Grid>
                            </Grid>
                            <div style={{marginTop: "25px"}}>   
                                <ReviewInput name="review" control={control} label="Comments on the course" rows={8}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <FormRating name="overall" control={control} label="Overall"/>
                                <FormRating name="difficulty" control={control} label="Difficulty"/>
                                <FormRating name="standardized" control={control} label="Standardized"/>
                                <FormRating name="interesting" control={control} label="Interesting"/>
                                <FormRating name="useful" control={control} label="Useful"/>
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
                </form>
            </Box>
        </Container>
    )
}