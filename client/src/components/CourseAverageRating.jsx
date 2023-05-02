import { Box, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

function CourseAverageRating({overall, difficulty, workload, standardized, interesting, useful, reviews}) {
    return (
        <Grid item xs={12} md={8}>
            <Box sx={{width: 875, height: 100, mt:2, backgroundColor: '#FDDC5C'}}>
                <Box sx={{pt:1}}>
                    <p style={{textAlign:'center', fontFamily:'monospace', fontStyle:'italic', fontSize:'15.5px'}}> 
                        Overall &nbsp; 
                        Difficulty &nbsp;
                        Average Workload &nbsp;
                        Standardized &nbsp; 
                        Interesting &nbsp;
                        Useful &nbsp;
                        Reviews
                    </p>
                    <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"85px"}}>
                        <strong>{overall}</strong>
                    </Typography>
                    <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"70px"}}>
                        <strong>{difficulty}</strong>
                    </Typography>
                    <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"110px"}}>
                        <strong>{workload}</strong>
                    </Typography>
                    <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"120px"}}>
                        <strong>{standardized}</strong>
                    </Typography>
                    <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"95px"}}>
                        <strong>{interesting}</strong>
                    </Typography>
                    <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"70px"}}>
                        <strong>{useful}</strong>
                    </Typography>
                    <Typography display='inline' style={{fontFamily:'monospace', marginLeft:"60px"}}>
                        <strong>{reviews}</strong>
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
};

export default CourseAverageRating