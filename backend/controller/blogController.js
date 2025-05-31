import { Blog } from "../model/blogModel.js";

const createBlog = async (req, res) => {
    try {
        const { title, content, mainHeading, writer } = req.body;

        if (!title || !content || !mainHeading || !writer) {
            return res.status(400).json({
                message: "Please fill all the fields",
            });
        }

        const newBlog = new Blog({
            title,
            content,
            mainHeading,
            writer,
        });
        if (!newBlog) {
            return res.status(400).json({
                message: "Blog not uploaded",
            });
        }
        await newBlog.save();
        return res.status(201).json({
            message: "Blog created successfully",
            blog: {
                id: newBlog._id,
                title: newBlog.title,
                content: newBlog.content,
                mainHeading: newBlog.mainHeading,
                writer: newBlog.writer,
                createdAt: newBlog.createdAt,
            },
        });
        console.log("user logdeing")


    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });

    }
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        if (!blogs || blogs.length === 0) {
            return res.status(404).json({
                message: "No blogs found",
            });
        }
        return res.status(200).json({
            message: "Blogs fetched successfully",
            blogs,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}


export {createBlog, getAllBlogs};
