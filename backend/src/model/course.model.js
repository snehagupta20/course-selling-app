import mongoose from 'mongoose';
import { Schema } from 'zod';

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
    level:{
        type: String,
        default : 'easy',
    }
    cost:{
        type:Number,
        required: true,
    },
    hours:{
        type: Number,
        required: true,
    },
    tags:[{
        type: String,
    }]

});

export const Course = mongoose.model("Course", courseSchema);