import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

function InstructorReviewCard({course, term, year, grade, delivery, recommendation, overall, grading, teaching, interesting, caring, review, time, likes}) {
    
    time = time.slice(5, 7) + "/" + time.slice(8, 10) + "/" + time.slice(0, 4)    
    
    return (
        <Card sx={{mx: "auto", border: '1px solid gold'}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Typography  sx={{ mr: 10}} style={{fontFamily:'monospace'}}>
                        <strong>Course:</strong> {course}
                        </Typography>
                        <Typography  sx={{ mr: 10}}style={{fontFamily:'monospace'}}>
                        <strong>Grade:</strong> {grade}
                        </Typography>
                        <Typography  sx={{ mr: 10 }}style={{fontFamily:'monospace'}}>
                        <strong>Term:</strong> {term}
                        <br />
                        </Typography>
                        <Typography  sx={{ mr: 10 }} style={{fontFamily:'monospace'}}>
                        <strong>Style:</strong> {delivery}
                        </Typography>
                        <Typography  style={{fontFamily:'monospace'}}>
                        <strong>Year:</strong> {year}
                        <br/>
                        </Typography>
                        <Typography  style={{fontFamily:'monospace'}}>
                        <strong>Recommendation:</strong> {recommendation}
                        </Typography>
                        <Typography style={{fontFamily:'monospace'}}>
                        <strong>Comments:</strong> {review} 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography style={{fontFamily:'monospace'}}>
                            <strong>Overall:</strong> {overall}
                            <br/>
                            <strong>Teaching:</strong> {teaching}
                            <br/>
                            <strong>Caring:</strong> {caring}
                            <br/>
                            <strong>Interesting:</strong> {interesting}
                            <br/>
                            <strong>Grading:</strong> {grading}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography style={{fontFamily:'monospace'}}>
                            <strong>{time}</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default InstructorReviewCard