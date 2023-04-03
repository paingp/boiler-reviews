import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8000;

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post('/submit', function(req, res) {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});