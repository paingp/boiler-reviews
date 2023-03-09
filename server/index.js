import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post('/reviews', function(req, res) {
    const review = req.body
    //save to database here
    
    res.status(201).send('Review received!')
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});