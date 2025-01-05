import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    emailId:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    courses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }],
    // courses : [{
    //     type: string,
    // }]
    // review : [{
        
    // }]
});

export const User = mongoose.model("User", userSchema);