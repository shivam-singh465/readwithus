import { Schema } from "mongoose";
import mongoose from "mongoose";
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }, 
    mainHeading:{
        type: String,
        required: true,
    },
    writer:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Blog = mongoose.model('Blog', blogSchema);