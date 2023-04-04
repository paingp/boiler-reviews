import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql2";

const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dev',
    password: 'rdb4de',
    database: 'boilerreviews'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    console.log("Boiler Reviews Server")
});

app.post('/submit', function(req, res) {
    //console.log(req.body);
    req.body["course"] = "ECE 40875"
    req.body["instructor"] = req.body["instructor"].split(',')
    req.body["instructor"] = req.body["instructor"][1].trimStart() + ' ' + req.body["instructor"][0]

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
    connection.query('INSERT INTO coursereviews SET ?', req.body)
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});