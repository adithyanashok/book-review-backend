import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import booksRouter from './routes/books.js'
import authRouter from './routes/authentication.js'
import userRouter from './routes/users.js'
import commentRouter from './routes/comments.js'
import feedbackRouter from './routes/feedback.js'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import path from 'path'
import cors from 'cors'

const app = express()
dotenv.config()
const __dirname = path.resolve();

app.use("/images", express.static(path.join(__dirname, "/images")))
// MongoDB Connection
const connect = () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("Database connected")
    }).catch((err) => {
        console.log(err)
    })
}
// File upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  app.put("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
// Middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors({
    origin : [
      'http://localhost:3000',
      'https://book-app-ten-orpin.vercel.app/',
    ],
    credentials: true,
    

}));
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



