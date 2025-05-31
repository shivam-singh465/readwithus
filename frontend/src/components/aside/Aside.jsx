import React from 'react'
import { SidebarBlogCard } from '../index';


  const suggestedBlogs = [
    { id: 7, title: "Comparing Vue.js and React for SPAs", author: "Bob Williams", imageUrl: "https://placehold.co/60x60/F97316/333333?text=Vue", readTime: "11 min" }, // Changed to orange
    { id: 8, title: "Introduction to Server-Side Rendering with Next.js", author: "Charlie Brown", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Next", readTime: "14 min" }, // Changed to orange
    { id: 9, title: "Frontend Testing Strategies: Jest & React Testing Library", author: "David Lee", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Test", readTime: "10 min" }, // Changed to orange
    { id: 10, title: "Building a GraphQL API with Node.js", author: "Eve Davis", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=GraphQL", readTime: "18 min" }, // Changed to orange
  ];

function Aside() {
    return (
        <div>
            <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Suggested Blogs</h3>
                <div className="space-y-4">
                    {suggestedBlogs.map(blog => (
                        <SidebarBlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default Aside