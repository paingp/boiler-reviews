import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

function CourseAverageRating({overall, difficulty, standardized, interesting, usefulness}) {
    return (
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
                            <Typography component="flex" style={{fontFamily:'monospace',marginLeft:"60px"}}>
                                <strong>{overall}</strong>
                            </Typography>
                            <Typography component="flex" style={{fontFamily:'monospace', marginLeft:"120px"}}>
                                <strong>{difficulty}</strong>
                            </Typography>
                            <Typography component="flex" style={{fontFamily:'monospace', marginLeft:"180px"}}>
                                <strong>{standardized}</strong>
                            </Typography>
                            <Typography component="flex" style={{fontFamily:'monospace',marginLeft:"180px"}}>
                                <strong>{interesting}</strong>
                            </Typography>
                            <Typography component="flex" style={{fontFamily:'monospace', marginLeft:"160px"}}>
                                <strong>{usefulness}</strong>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
    )
};

export default CourseAverageRating