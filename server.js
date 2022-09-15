import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'

const app = express()

const port = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api/user", userRoutes)
app.use("/api/resume", resumeRoutes)

// app.use("/", (req, res)=>{
//   res.send("hello hari")
// })


app.listen(port, () => {
  console.log(`running on port http://localhost${port}`)
})