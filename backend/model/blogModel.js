import { Schema } from "mongoose";
import mongoose from "mongoose";
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    mainContent: {
        type: String,
        required: true,
    },

    tags: {
        type: Array,
        required: true,
    },
    subheading: {
        type: Array
    },
    author: {
        type: String,
        required: true,
    },
    like: {
        type: Number,

    },
    comment: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Blog = mongoose.model('Blog', blogSchema);