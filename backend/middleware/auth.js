import express from "express"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookies from "cookie-parser"
dotenv.config();

const auth = (req, res, next) => {

    try {
        const token = req.cookies.token
        if (!token) {
            return (res.status(500).json({
                success: false,
                message: "user note autharaized gogo"
            }))
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if (!decode) {
            return (res.status(400).json({
                success: false,
                message: "user not autharaized"
            }))
        }

        req.id = decode.userId;
        req.user = decode;

        next()
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export default auth