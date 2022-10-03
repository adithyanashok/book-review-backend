import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import booksRouter from './routes/books.js'
import authRouter from './routes/authentication.js'
import userRouter from './routes/users.js'
import commentRouter from './routes/comments.js'
import feedbackRouter from './routes/feedback.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
dotenv.config()

// MongoDB Connection
const connect = () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("Database connected")
    }).catch((err) => {
        console.log(err)
    })
}
// Middlewares
app.use(cors({
    Access-Control-Allow-Origin: "https://snazzy-twilight-089a42.netlify.app",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/api/books', booksRouter) 
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/comment', commentRouter)
app.use('/api/feedback', feedbackRouter)

// Server
app.listen(process.env.PORT || 5000, () => {
    connect()
    console.log('Server Connected')
})



