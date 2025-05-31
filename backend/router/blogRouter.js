import express from 'express';
import auth from "../middleware/auth.js"
const blogRouter = express.Router();

import { createBlog, getAllBlogs } from '../controller/blogController.js';


blogRouter.post('/create', createBlog);
blogRouter.get('/getallblogs',  getAllBlogs);

export default blogRouter;