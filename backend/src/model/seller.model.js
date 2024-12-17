import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    // profession:{
    //     type: String,
    //     required: true,
    // },
    // experience:{
    //     type: Number,
    //     required: true,
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
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course',
    }]
});

export const Seller = mongoose.model("Seller", sellerSchema);