import express from "express";
import * as instructor from "../controllers/instructor.js"

const router = express.Router();

router.get("/:id", instructor.getReviews)

router.post("/:id", instructor.addReview)

export default router;