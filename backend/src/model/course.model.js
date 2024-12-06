import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    cost:{
        type:Number,
        required: true,
    },
    hours:{
        type: Number,
        required: true,
    },
    tags:[{
        name: {
            type: String,
            required: true,
        },
    }],
});

export const Course = mongoose.model("Course", courseSchema);