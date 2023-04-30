import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';


function CourseReviewCard({instructor, term, year, workload, grade, evaluation, overall, difficulty, standardized, interesting, useful, review, time, likes}) {
    return (
        <Card sx={{mx: "auto", border: '1px solid gold'}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Typography component="flex" sx={{ mr: 10}} style={{fontFamily:'monospace'}}>
                        <strong>Instructor:</strong> {instructor}
                        </Typography>
                        <Typography component="flex" sx={{ mr: 10}}style={{fontFamily:'monospace'}}>
                        <strong>Grade:</strong> {grade}
                        </Typography>
                        <Typography component="flex" sx={{ mr: 10 }}style={{fontFamily:'monospace'}}>
                        <strong>Term:</strong> {term} 
                        <br />
                        </Typography>
                        <Typography component="flex" sx={{ mr: 10 }} style={{fontFamily:'monospace'}}>
                        <strong>Workload:</strong> {workload} hours per week
                        </Typography>
                        <Typography component="flex" style={{fontFamily:'monospace'}}>
                        <strong>Year:</strong> {year}
                        <br/>
                        </Typography>
                        <Typography component="flex" style={{fontFamily:'monospace'}}>
                        <strong>Evaluation:</strong> {evaluation}
                        </Typography>
                        <Typography style={{fontFamily:'monospace'}}>
                        <strong>Comments:</strong> {review}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography style={{fontFamily:'monospace'}}>
                            <strong>Overall:</strong> {overall}
                            <br/>
                            <strong>Difficulty:</strong> {difficulty}
                            <br/>
                            <strong>Standardized:</strong> {standardized}
                            <br/>
                            <strong>Interesting:</strong> {interesting}
                            <br/>
                            <strong>Useful:</strong> {useful}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Typography style={{fontFamily:'monospace'}}>
                            <strong>{time}</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default CourseReviewCard