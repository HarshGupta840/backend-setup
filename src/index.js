import express from "express"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config()
const app = express()

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log("MONGO connection error failed !!", error)
})