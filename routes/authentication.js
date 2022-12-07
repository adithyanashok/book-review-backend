import express from 'express'
import { createAccount, signIn, logout } from '../controllers/authentication.js'

const router = express.Router()

// Create Account
router.post('/signup', createAccount)
// Signin
router.post('/signin', signIn)
// Logout
router.post('/logout', logout)

export default router