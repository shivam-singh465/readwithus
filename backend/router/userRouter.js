import express from 'express';
import { registerUser, loginUser, getCurrentUser } from '../controller/usercontroller.js';
import auth from "../middleware/auth.js"
const userRouter = express.Router();


userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get("/me", auth, getCurrentUser);
export default userRouter;