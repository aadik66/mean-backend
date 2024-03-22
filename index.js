import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import roleRoute from './routes/role.js'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config()

// DB Connection

const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGO_URL)
  console.log('connected to database')
}

// Api Route
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}))
app.use('/api/role', roleRoute)
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

// response Handling Middleware
// Success Response
app.use((obj, req, res, next) => {
  const statusCode = obj.status || 500
  const message = obj.message || 'Something Went Wrong'
  return res.status(statusCode).json({
    success: !![200, 201, 204].some(a => a === obj.status),
    status: statusCode,
    message,
    data: obj.data
    // stack: err.stack
  })
})

// Error Respons
app.use((err, req, res, next) => {
  const statusCode = err.status || 500
  const errorMessage = err.message || 'Something Went Wrong'
  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: errorMessage
    // stack: err.stack
  })
})

// app.use('/', (req, res) => {
// return res.send("<h1>Welcme to MeanStack</h1>")
// })

app.listen(5000, () => {
  connectMongoDB()
  console.log('connected successfully')
})
