import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path : '.env'});
const URL = process.env.MONGODB_URI;

export default async function connectDB(){
    try {
        await mongoose.connect(URL);
        console.log("DB successfully connected");
    } catch (error) {
        console.log("DB not connected, error : ", error);
    }
};

