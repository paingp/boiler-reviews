import {pool} from "../models/db.js"

export async function getReviews (req, res) {
    const [reviews] = await pool.query("SELECT * FROM CourseRatings WHERE course REGEXP ?", [req.params.id])
    if (Object.keys(reviews).length === 0) {
        res.status(204).send()
    }
    else {
        res.send(reviews)
    }
}