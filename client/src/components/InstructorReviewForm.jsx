import React from "react";
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Container, Grid } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';

import Dropdown from "../form_components/Dropdown";
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

    export default function InstructorReviewForm() {
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
      
      return(
        <Container maxWidth="md" sx={{border: '1px solid black'}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                          <AppBar position="static" style={{ background: '#333232' }}>
                            <Toolbar variant="dense">
                              <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                Writing Review
                              </Typography> 
                            </Toolbar>
                          </AppBar>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6}>
                                    <MultiSelect name="course" control={control} label="Course" required={true} options={courses}/>
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
                                <ReviewInput name="review" control={control} label="Comments on the course" rows={8}/>
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
        
    //     <AppBar position="static" style={{ background: '#333232' }}>
    //         <Toolbar variant="dense">
    //             {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    //                 <MenuIcon />
    //             </IconButton>*/
    //             <Typography variant="subtitle1" color="inherit" component="div" sx = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
    //                 Writing Review
    //             </Typography> }
    //         </Toolbar>
    //     </AppBar>

    // <Grid container spacing={3}>
    //     <Grid xs={8}>
    //         <Box component="form" sx={{ '& > :not(style)': { m: 4.5, width: '25ch' },}} noValidate autoComplete="off">
    //           <TextField id="course" label="Course Number" variant="filled" />
    //           <Dropdown name="grade" control={control} label="Grade" options={grades}/>
    
    //           <TextField id="recommend" select label="Recommendation" defaultValue="Recommend?" helperText="Do you recommend this professor?" variant="filled">
    //             {rec.map((option) => (
    //               <MenuItem key={option.value} value={option.value}>
    //                 {option.label}
    //               </MenuItem>
    //             ))}
    //           </TextField> 
            
    //         </Box>
        

    //         <Box sx={{ '& > :not(style)': { m: 4.5}, width: 790, maxWidth: '100%', }}>
    //           <TextField fullWidth label="Review" id="fullWidth" multiline rows={8} variant="filled"/>
    //         </Box>
    //     </Grid>

    //     <Box component="form" sx={{ '& > :not(style)': { m: 4.5, width: '1ch' }, }} noValidate autoComplete="off">
    //       <Grid container rowSpacing={1}>
    //         <Typography component="legend">Overall</Typography>
    //           <Rating name="overall" sx={{padding: 1}} onChange={(event, newValue) => {
    //             //setValue(newValue);
    //         }}/>
    //         <Typography component="legend">Teaching</Typography>
    //           <Rating name="teaching" sx={{padding: 1}} onChange={(event, newValue) => {
    //             //setValue(newValue);
    //         }}/>
    //         <Typography component="legend">Caring</Typography>
    //           <Rating name="caring" sx={{padding: 1}} onChange={(event, newValue) => {
    //             //setValue(newValue);
    //         }}/>
    //         <Typography component="legend">Interesting</Typography>
    //           <Rating name="inspirational" sx={{padding: 1}} onChange={(event, newValue) => {
    //             //setValue(newValue);
    //         }}/>
    //         <Typography component="legend">Grading</Typography>
    //           <Rating name="Grading" sx={{padding: 1}} onChange={(event, newValue) => {
    //             //setValue(newValue);
    //         }}/>
    //       </Grid>
    //     </Box>

    //     <Box>
    //       <Grid> 
    //         <CustomWidthTooltip title={test} placement="right-end">
    //           <IconButton sx={{m: 3}}><QuestionMarkIcon fontSize="small"/></IconButton>
    //         </CustomWidthTooltip>
    //       </Grid>
    //     </Box>
    // </Grid>

    // <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '10ch' },}} noValidate autoComplete="off">   
    //   <ColorButton variant="contained">Submit</ColorButton>
    // </Box>
    
    // </form>
        
    )
}
