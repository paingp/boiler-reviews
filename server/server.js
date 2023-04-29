import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import * as mysql from 'mysql'

const { createConnection } = mysql.default;
console.log('connecting');
const ServerMySQLConnection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Okekeni2003$$$',
  database: 'CourseReviewDB'
})

ServerMySQLConnection.connect(async (err, args) => {
    if (err) console.log(err);
    else console.log("created connection to mysql database");
})



const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post('/submit', function(req, res) {
    const review = req.body
    const started = getCurrentTime()
    const delimited = review.instr[0].split(',')
    ServerMySQLConnection.query(`INSERT INTO reviews (reviewer_id, instructor, term, years, workload, grade, review, overall, difficulty, standardized, interesting, useful, likes, created_at)
    VALUES (${Math.random()}, '${delimited[0]} ${delimited[1]}', '${review.term}', ${review.year}, ${review.workload}, '${review.grade}', '${review.review}', ${review.overall}, ${review.difficulty}, ${review.standardized}, ${review.interesting}, ${review.useful}, ${0}, '${started}')`, async (err, rows, fields) => {
        if (err) console.log(err);
        else {
            console.log('LOGGING DB TABLES;')
            console.log('ROWS', rows);
            console.log('FIELDS', fields);
        }
    });
});

app.get('/overalls', function(req, res) {
    
    const { name } = req.query;
    console.log("name = " + name);
    if (!name) {
        ServerMySQLConnection.query(`SELECT * FROM getoveralaverages;`, async (err, rows, fields) => {
            if (err) console.log(err);
            else {
                res.send(rows);
            }
        });
    } else {
        console.log("hello");
        ServerMySQLConnection.query(`SELECT getOverallAverage('${name}');`, async (err, rows, fields) => {
            if (err) console.log(err);
            else {
                console.log(rows)
                res.send(`${name} -> ${JSON.stringify(rows)}`);
            }
        });
    }
});

const getCurrentTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return currentTime;
}

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});