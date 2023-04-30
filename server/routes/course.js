import express from "express";
import * as course from "../controllers/course.js"

const router = express.Router();

router.get("/:id", course.getReviews)

router.post("/:id", course.addReview)

export default router;