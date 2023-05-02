import {pool} from "../models/db.js"

export async function getReviews (req, res) {
    const [reviews] = await pool.query("SELECT * FROM CourseReviews WHERE course = ?", [req.params.id])
    const count = Object.keys(reviews).length
    if (count === 0) {
        res.status(204).send()
    }
    else {
        if (count === 1) {
            res.json({"length": 1, "review": reviews})
        }
        else {
            const [stats] = await pool.query("SELECT * FROM CourseRatings WHERE course = ?", [req.params.id])
            res.json({"stats": stats, "reviews": reviews})
        }
    }
}

export async function addReview (req, res) {
    const numericFields = ["workload", "overall", "difficulty", "standardized", "interesting", "useful"];
    for (const f of numericFields) {
        req.body[f] = Number(req.body[f])
    }

    if (req.body["evaluation"] != undefined) {
        req.body["evaluation"] = req.body["evaluation"].toString()
    }
    req.body["time"] = new Date()
    req.body["likes"] = 0
    await pool.query('INSERT INTO CourseReviews SET ?', req.body)
    res.status(201).send({message: "Successfully created a review for " + req.params.id})
}