import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql2";

const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
});

pool.getConnection(function(err) {
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
    }
    console.log("Connected to database")
});

const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    console.log("Boiler Reviews Server")
});

app.get('/course/:courseId', function(req, res) {
    //console.log(req.params.courseId)
    //console.log(req.params)
    pool.query('SELECT * FROM coursereviews WHERE course = ?', [req.params.courseId], function(error, result, fields) {
        if (error == null) {
            res.json(result)
            return
        }
    })
    //res.json('Be the first to leave a review')
    //res.json(result)
})

app.post('/submit-course-review', function(req, res) {
    //console.log(req.body);
    //req.body["instructor"] = req.body["instructor"].split(',')
    //req.body["instructor"] = req.body["instructor"][1].trimStart() + ' ' + req.body["instructor"][0]

    const numericFields = ["workload", "overall", "difficulty", "standardized", "interesting", "useful"];
    for (const f of numericFields) {
        req.body[f] = Number(req.body[f])
    }

    req.body["evaluation"] = req.body["evaluation"].toString()
    req.body["time"] = new Date()
    req.body["likes"] = 0
    //console.log(req.body)
    let schema = '(course, instructor, term, year, workload, grade, evaluation, overall, difficulty, standardized, interesting, useful, review, time, likes)'
    //connection.query('INSERT INTO coursereviews SET ?', review)
    pool.query('INSERT INTO coursereviews SET ?', req.body)
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});