import express from 'express'
import { getComments, postComment } from '../controllers/comments.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()
// Post a comment
router.post('/', verifyToken, postComment)
// get comments
router.get('/find/:bookId', getComments)

export default router