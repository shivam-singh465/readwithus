import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'
import userRouter from './router/userRouter.js'
import blogRouter from './router/blogRouter.js'
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
}));



dotenv.config()
const port = process.env.PORT || 8080


app.use("/api/v1/user", userRouter)
app.use("/api/v1/blog", blogRouter)

// localhost:8080/api/user/register



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connectDB()
  console.log(`readwithus app listening on port ${port}`)
})
