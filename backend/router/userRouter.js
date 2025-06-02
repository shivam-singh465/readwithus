import express from 'express';
import { registerUser, loginUser, getCurrentUser ,logoutUser} from '../controller/usercontroller.js';
import auth from "../middleware/auth.js"
const userRouter = express.Router();


userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get("/me", auth, getCurrentUser);
userRouter.post("/logout", auth, logoutUser);
export default userRouter;