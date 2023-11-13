import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDB = async () => {
    try {
        const connectionINstance = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log("mongoconnected", connectionINstance.connect)
    } catch (error) {
        console.log("MONGO connection error", error)
        process.exit(1)
    }
}

export default connectDB