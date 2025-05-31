import { Schema } from "mongoose";
import mongoose from "mongoose";
// Importing mongoose and Schema from mongoose to define the user schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const User = mongoose.model('User', userSchema);