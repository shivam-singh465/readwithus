import React from "react"
import { BlogCard  } from "../index";
import { Link } from "react-router";

const Blogs = () => {
    // Sample blog data for demonstration
    const blogPosts = [
        {
            id: 1,
            title: "The Future of Web Development",
            description: "Explore the exciting trends and technologies shaping the future of web development, from AI-powered tools to serverless architectures.",
            imageUrl: "https://placehold.co/400x250/A78BFA/FFFFFF?text=Web+Dev",
            date: "May 28, 2025",
            author: "Jane Doe",
        },
        {
            id: 2,
            title: "Mastering Responsive Design",
            description: "Learn essential techniques and best practices for creating websites that look great and function flawlessly on any device size.",
            imageUrl: "https://placehold.co/400x250/60A5FA/FFFFFF?text=Responsive",
            date: "May 20, 2025",
            author: "John Smith",
        },
        {
            id: 3,
            title: "Optimizing Performance for React Apps",
            description: "Dive into advanced strategies for boosting the performance of your React applications, ensuring a smooth user experience.",
            imageUrl: "https://placehold.co/400x250/34D399/FFFFFF?text=React+Perf",
            date: "May 15, 2025",
            author: "Alice Johnson",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 my-2">

            {/* Latest Blog Posts Section */}
            <section className="py-16 md:py-0  rounded-lg mx-4 md:mx-auto max-w-7xl px-6 lg:px-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Our Latest Blog Posts
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        Stay updated with our insights, news, and expert articles on various topics.
                    </p>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                title={post.title}
                                description={post.description}
                                imageUrl={post.imageUrl}
                                date={post.date}
                                author={post.author}
                            />
                        ))}
                    </div>

                    {/* View All Blogs Call to Action (Optional) */}
                    <div className="mt-16">
                        <Link href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out">
                            View All Blogs
                            <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blogs;