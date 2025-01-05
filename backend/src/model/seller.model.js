import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    profession:{
        type: String,
        required: true,
    },
    experience:{
        type: Number,
        required: true,
    },
    profilePic:{
        type: String,
        default: "https://github.com/snehagupta20/course-selling-app/blob/main/frontend/src/public/potraits/user%20icon.png",
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
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course',
    }]
});

export const Seller = mongoose.model("Seller", sellerSchema);