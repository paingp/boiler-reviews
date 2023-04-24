import React from "react";
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';

import Dropdown from "../form_components/Dropdown";
import FormAutocomplete from "../form_components/FormAutocomplete";
import MultiSelect from "../form_components/MultiSelect";
import FormRating from "../form_components/FormRating"
import ReviewInput from "../form_components/ReviewInput";
import { courses } from "../constants";

const terms = ["Fall", "Spring", "Summer"];

const year = (new Date()).getFullYear();
const years = Array.from(new Array(6), (val, idx) => year - idx);

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FFD700',
    '&:hover': {
        backgroundColor: '#FFD700', 
    }
  }));

  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 250,
    },
  });
const test = <Typography sx = {{fontFamily: 'Arial', fontSize: 10}}>
<div>What do these ratings mean?</div>
<div><strong>Overall:</strong> How would you rate this professor taking everything into account?</div>
<div><strong>Teaching:</strong> Is this professor's teaching style very confusing (1) or very understandable (5)?</div>
<div><strong>Caring:</strong> Does this professor never change deadlines no matter what (1) or do they care about your circumstances (5)?</div>
<div><strong>Interesting:</strong> Does this professor make the content interesting (5)?</div>
<div><strong>Grading:</strong> Is this professor's grading very strict and tedious (1) or lenient and forgiving (5)?</div>
</Typography>

const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C"];

const rec = ["I recommend this professor for all their courses", "I recommend this instructor for this course", "I recommend this instructor for other courses", "I do not recommend this professor for any classes"]

const style = ["Online", "In Person", "Hybrid"]

export default function InstructorReviewForm({instructor}) {
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
        data.instructor = instructor
        console.log(data)
        postData("http://localhost:8000/submit-instructor-review", data)
        reset()
      };
  
      const onInvalid = (errors) => console.error(errors);
      
      return(
        <Container maxWidth="md" sx={{border: '1px solid black'}}>
            <h3 style={{fontFamily:'monospace', fontStyle:'italic'}}>Write a Review for {instructor}</h3>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6}>
                                    <FormAutocomplete name="course" control={control} label="Course" options={courses}/>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <MultiSelect name="rec" control={control} label="Recommendation" required={true} options={rec}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Dropdown name="term" control={control} label="Term" options={terms} required={true}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Dropdown name="grade" control={control} label="Grade" options={grades}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Dropdown name="style" control={control} label="Style" options={style}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Dropdown name="year" control={control} label="Year" options={years} required={true}/>
                                </Grid>
                            </Grid>
                            <div style={{marginTop: "25px"}}>   
                                <ReviewInput name="review" control={control} label="Comments on the instructor" rows={8}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box>
                                <FormRating name="overall" control={control} label="Overall"/>
                                <FormRating name="teaching" control={control} label="Teaching"/>
                                <FormRating name="caring" control={control} label="Caring"/>
                                <FormRating name="interesting" control={control} label="Interesting"/>
                                <FormRating name="grading" control={control} label="Grading"/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box>
                              <Grid> 
                                <CustomWidthTooltip title={test} placement="right-end">
                                  <IconButton sx={{m: 1}}><QuestionMarkIcon fontSize="small"/></IconButton>
                                </CustomWidthTooltip>
                              </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <ColorButton type="submit" variant="contained" sx={{maxWidth: 0.25, mt: 3, mb: 2}} >
                        Submit
                    </ColorButton>   
                </form>
            </Box>
        </Container>
          
    )
}
