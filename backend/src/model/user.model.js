import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    // age:{
    //     type: Number,
    //     required: true,
    // },
    // interests:{
    //     type : [String],
    // },
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
});

export const User = mongoose.model("User", userSchema);