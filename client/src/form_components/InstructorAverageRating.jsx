import { Box, Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

function InstructorAverageRating({overall, teaching, caring, interesting, grading}) {
    return (
        <Grid item xs={12} md={8}>
                    <Box sx={{width: 875, height: 100, mt:2, backgroundColor: '#FDDC5C'}}>
                        <Box sx={{pt:1}}>
                            <p style={{textAlign:'center', fontFamily:'monospace', fontStyle:'italic', fontSize:'15.5px'}}> 
                                Overall &nbsp; &nbsp;
                                Average Teaching &nbsp; &nbsp;
                                Average Care &nbsp; &nbsp;
                                Average Interest &nbsp; &nbsp;
                                Average Grading
                            </p>
                        </Box>
                        <Typography component="flex" style={{fontFamily:'monospace',marginLeft:"90px"}}>
                            <strong>{overall}</strong>
                        </Typography>
                        <Typography component="flex" style={{fontFamily:'monospace', marginLeft:"130px"}}>
                            <strong>{teaching}</strong>
                        </Typography>
                        <Typography component="flex" style={{fontFamily:'monospace', marginLeft:"140px"}}>
                            <strong>{caring}</strong>
                        </Typography>
                        <Typography component="flex" style={{fontFamily:'monospace',marginLeft:"160px"}}>
                            <strong>{interesting}</strong>
                        </Typography>
                        <Typography component="flex" style={{fontFamily:'monospace', marginLeft:"160px"}}>
                            <strong>{grading}</strong>
                        </Typography>
                    </Box>
                </Grid>
    )
};

export default InstructorAverageRating