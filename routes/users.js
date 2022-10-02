import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()
// Get All users
router.get('/', verifyToken, getAllUsers)
// Get A user
router.get('/find/:id', getUser)
// Update a User
router.put('/:id', verifyToken, updateUser)
// Delete a User
router.delete('/:id', verifyToken, deleteUser)
export default router 