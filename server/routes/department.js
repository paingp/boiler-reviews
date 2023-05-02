import express from "express";
import * as dept from "../controllers/department.js"

const router = express.Router();

router.get("/:id", dept.getReviews)

export default router;