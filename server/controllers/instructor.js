import {pool} from "../models/db.js"

export async function getReviews (req, res) {
    const [reviews] = await pool.query("SELECT * FROM InstrReviews WHERE instructor = ?", [req.params.id])
    const count = Object.keys(reviews).length
    if (count === 0) {
        res.status(204).send()
    }
    else {
        if (count === 1) {
            res.json({"length": 1, "review": reviews})
        }
        else {
            const [stats] = await pool.query("SELECT * FROM InstrRatings WHERE instructore = ?", [req.params.id])
            res.json({"stats": stats, "reviews": reviews})
        }
    }
}

export async function addReview (req, res) {
    const numericFields = ["workload", "teaching", "grading", "caring", "interesting"];
    for (const f of numericFields) {
        req.body[f] = Number(req.body[f])
    }
    req.body["time"] = new Date()
    req.body["likes"] = 0
    pool.query('INSERT INTO InstrReviews SET ?', req.body)
    res.status(201).send({message: "Successfully created a review for " + req.params.id})
}