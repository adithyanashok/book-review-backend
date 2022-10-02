import express from 'express'
import { createAccount, signIn } from '../controllers/authentication.js'

const router = express.Router()

// Create Account
router.post('/signup', createAccount)
// Signin
router.post('/signin', signIn)

export default router