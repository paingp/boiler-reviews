import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button"; 
import { useForm } from "react-hook-form";
import Dropdown from "../form_components/Dropdown";
import FormAutocomplete from "../form_components/FormAutocomplete";
import NumberInput from "../form_components/NumberInput";
import MultiSelect from "../form_components/MultiSelect";
import FormRating from "../form_components/FormRating"
import ReviewInput from "../form_components/ReviewInput";
import { instructors } from "../constants";

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const test = <Typography sx = {{fontFamily: 'Arial', fontSize: 10}}>
<div>What do these ratings mean?</div>
<div><strong>Overall:</strong> How would you rate this class taking everything into account?</div>
<div><strong>Difficulty:</strong> Is this course easy to understand (1) or confusing (5)?</div>
<div><strong>Standardized:</strong> Does the course difficulty depend on the professor (1) or is the experience the same, no matter the professor (5)?</div>
<div><strong>Interesting:</strong> Is this course interesting and enjoyable to learn (5)?</div>
<div><strong>Useful:</strong> Does this course have topics you will never use again for your Purdue career (1) or will these topics be important in the future (5)?</div>
</Typography>

const terms = ["Fall", "Spring", "Summer"];

const year = (new Date()).getFullYear();
const years = Array.from(new Array(6), (val, idx) => year - idx);

const evalMethods = ["Exam heavy", "Project heavy", "Quiz heavy", "Assignments heavy"];

const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C"];

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 250,
    },
  });

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FFD700',
    '&:hover': {
        backgroundColor: '#FFD700', 
    }
}));

export default function CourseReviewForm({course}) {
    const {handleSubmit, reset, control} = useForm();

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
        data.course = course
        //data.course = {course}
        console.log(data)
        postData("http://localhost:8000/submit-course-review", data)
        reset()
    };

    const onInvalid = (errors) => console.error(errors);

    return (
        <Container maxWidth="md" sx={{border: '1px solid black'}}>
            <h3 style={{fontFamily:'monospace', fontStyle:'italic'}}>Write a Review for {course}</h3>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <FormAutocomplete name="instructor" control={control} label="Instructor" options={instructors}/>
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
                                    <MultiSelect name="evaluation" control={control} label="Evaluation" options={evalMethods}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Dropdown name="grade" control={control} label="Grade" options={grades}/>
                                </Grid>
                            </Grid>
                            <div style={{marginTop: "25px"}}>
                                <ReviewInput name="review" control={control} formlabel="Comments on the course" label="Share your thoughts on the course" rows={8}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box>
                                <FormRating name="overall" control={control} label="Overall"/>
                                <FormRating name="difficulty" control={control} label="Difficulty"/>
                                <FormRating name="standardized" control={control} label="Standardized"/>
                                <FormRating name="interesting" control={control} label="Interesting"/>
                                <FormRating name="useful" control={control} label="Useful"/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box>
                              <Grid> 
                                <CustomWidthTooltip title={test} placement="right-end">
                                  <IconButton sx={{pl: 2}}><QuestionMarkIcon fontSize="small"/></IconButton>
                                </CustomWidthTooltip>
                              </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <ColorButton type="submit" variant="contained" sx={{maxWidth: 0.25, mt: 3, mb: 2}}>
                        Submit
                    </ColorButton>   
                </form>
            </Box>
        </Container>
    )
}