import mongoose from 'mongoose';
import { string } from 'zod';

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        default: ' ',
    },
    thumbnail:{
        type: String,
        validate: {
            validator : (v) => /^https?:\/\//.test(v),
            message : props => `${props.value} is not a valid URL!`
        },
        default: 'https://letsenhance.io/',
    },
    cost:{
        type:Number,
        required: true,
    },
    hours:{
        type: Number,
        required: true,
    },
    tags:{
        type : [String],
        required : true,
        unique: false,
    },
    courseId:{
        type: String,
        unique: true,
        required: false,
        default: '',
    }
});

export const Course = mongoose.model("Course", courseSchema);