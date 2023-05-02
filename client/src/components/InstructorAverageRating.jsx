import { Box, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

function InstructorAverageRating({overall, teaching, workload, grading, caring, interesting, reviews}) {
    return (
        <Grid item xs={12} md={8}>
                    <Box sx={{width: 875, height: 100, mt:2, backgroundColor: '#FDDC5C'}}>
                        <Box sx={{pt:1}}>
                            <p style={{textAlign:'center', fontFamily:'monospace', fontStyle:'italic', fontSize:'15.5px'}}> 
                                Overall &nbsp; &nbsp;
                                Teaching &nbsp; &nbsp;
                                Average Workload &nbsp; &nbsp;
                                Grading &nbsp; &nbsp;
                                Caring &nbsp; &nbsp;
                                Interesting &nbsp; &nbsp;
                                Reviews
                            </p>
                        </Box>
                        <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"60px"}}>
                            <strong>{overall}</strong>
                        </Typography>
                        <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"80px"}}>
                            <strong>{teaching}</strong>
                        </Typography>
                        <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"120px"}}>
                            <strong>{workload}</strong>
                        </Typography>
                        <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"115px"}}>
                            <strong>{grading}</strong>
                        </Typography>
                        <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"70px"}}>
                            <strong>{caring}</strong>
                        </Typography>
                        <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"85px"}}>
                            <strong>{interesting}</strong>
                        </Typography>
                        <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"100px"}}>
                            <strong>{reviews}</strong>
                        </Typography>
                    </Box>
                </Grid>
    )
};

export default InstructorAverageRating