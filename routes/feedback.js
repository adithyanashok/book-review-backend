import express from "express";
import { getFeedback, postFeedback } from "../controllers/feedback.js";
import { verifyAdmin, verifyToken } from "../verifyToken.js";

const router = express.Router()

// Post a feedback
router.post('/', verifyToken, postFeedback)
// Get All feedbacks
router.get('/', verifyAdmin, getFeedback)
export default router;