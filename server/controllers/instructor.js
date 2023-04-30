import {pool} from "../models/db.js"

export async function getReviews (req, res) {
    //console.log(req.params.id)
    const [reviews] = await pool.query("SELECT * FROM InstrReviews WHERE instructor = ?", [req.params.id])
    //console.log(reviews)
    res.send(reviews)
}

export async function addReview (req, res) {
    const numericFields = ["workload", "teaching", "grading", "caring", "interesting"];
    for (const f of numericFields) {
        req.body[f] = Number(req.body[f])
    }
    req.body["time"] = new Date()
    req.body["likes"] = 0
    pool.query('INSERT INTO InstrReviews SET ?', req.body)
}