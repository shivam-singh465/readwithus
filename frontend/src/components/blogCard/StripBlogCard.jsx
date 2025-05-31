import React from 'react';
import { Navbar, Footer, BlogReader } from '../index';
import { useNavigate } from 'react-router';

// BlogCard Component
// This component displays a single blog post card in a horizontal "strip" layout.
const StripBlogCard = ({id, title, description, imageUrl, date, author, votes, views, tags }) => {
    // Placeholder image/icon if imageUrl is not provided or fails to load.
    // For a "strip" card, a smaller, more icon-like image or a simple placeholder is suitable.
    const placeholderImage = "https://placehold.co/80x80/E0E0E0/333333?text=Blog";
    const navigate = useNavigate()

    return (
        <div>
           

            <div onClick={()=>{navigate(`/blog/${id}`)}} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-start sm:items-center p-4 gap-4 transition duration-300 hover:shadow-lg">
                {/* Left section: Icon/Image and Votes/Views (if applicable) */}
                <div className="flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-1 text-center min-w-[80px] sm:min-w-[100px]">
                    {/* Placeholder for votes/upvotes, if needed */}
                    {votes && (
                        <div className="text-lg font-bold text-gray-700">
                            {votes} <span className="text-sm font-normal text-gray-500">votes</span>
                        </div>
                    )}
                    <img
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                        src={imageUrl || placeholderImage}
                        alt={title}
                        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} // Fallback on error
                    />
                    {views && (
                        <div className="text-sm text-gray-500 mt-1">
                            {views} views
                        </div>
                    )}
                </div>

                {/* Right section: Content */}
                <div className="flex-grow">
                    <h3 className="text-lg font-bold text-blue-700 hover:underline mb-1">
                        <a href="#">{title}</a>
                    </h3>
                    <p className="text-gray-700 text-sm mb-2 line-clamp-2">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {tags && tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-600 text-xs">
                        {date} by <span className="font-semibold text-indigo-600">{author}</span>
                    </p>
                </div>
            </div>


        </div>
    );
};


export default StripBlogCard;
