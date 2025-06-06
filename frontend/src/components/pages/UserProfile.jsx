import React from 'react';
import { Navbar, StripBlogCard, Footer } from '../index';
import { Link } from 'react-router';

// UserBlogCard Component
// This component displays a single blog post card for the user's profile,
// showing likes and comments as small buttons.
// const UserBlogCard = ({ title, description, likes, comments, date }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-start sm:items-center p-4 gap-4 transition duration-300 hover:shadow-lg">
//       {/* Left section: Stats Buttons */}
//       <div className="flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-1 text-center min-w-[80px] sm:min-w-[100px]">
//         {/* Likes Button */}
//         <button className="flex items-center justify-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium shadow-sm hover:bg-red-200 transition">
//           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
//           {likes}
//         </button>
//         {/* Comments Button */}
//         <button className="flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition mt-2 sm:mt-0">
//           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.336-4.651A8.06 8.06 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd"></path></svg>
//           {comments}
//         </button>
//       </div>

//       {/* Right section: Content */}
//       <div className="flex-grow">
//         <h3 className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition duration-150 mb-1">
//           <a href="#">{title}</a>
//         </h3>
//         <p className="text-gray-700 text-sm mb-2 line-clamp-2">
//           {description}
//         </p>
//         <p className="text-gray-500 text-xs">
//           Posted on: {date}
//         </p>
//       </div>
//     </div>
//   );
// };

// Main App component
function UserProfile() {
    // Dummy data for user information and blog statistics
    const user = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        bio: "Passionate writer and tech enthusiast. I love sharing insights on web development and productivity.",
        profilePicture: "https://placehold.co/150x150/A78BFA/FFFFFF?text=JD", // Placeholder image
        joinDate: "Joined: January 15, 2023",
        location: "San Francisco, CA",
    };

    // Dummy data for user's uploaded blogs
    const userBlogs = [
        {
            id: 1,
            title: "My First Blog Post: Getting Started with React",
            description: "A beginner-friendly guide to setting up your first React project and understanding the core concepts of components and props.",
            likes: 125,
            comments: 32,
            date: "February 10, 2023",
        },
        {
            id: 2,
            title: "Advanced Tailwind CSS Techniques for Responsive Design",
            description: "Dive deep into responsive design with Tailwind CSS, exploring custom breakpoints, utility-first principles, and advanced layout strategies.",
            likes: 240,
            comments: 65,
            date: "March 5, 2023",
        },
        {
            id: 3,
            title: "Understanding State Management in Modern React Apps",
            description: "An in-depth look at various state management patterns in React, including Context API, Redux, and Zustand, and when to use each.",
            likes: 198,
            comments: 48,
            date: "April 18, 2023",
        },
        {
            id: 4,
            title: "Building Interactive UI with Framer Motion",
            description: "Learn how to add beautiful and smooth animations to your React applications using the powerful Framer Motion library.",
            likes: 310,
            comments: 72,
            date: "May 22, 2023",
        },
    ];

    return (
        <div >
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl p-8 md:p-10 w-full max-w-4xl">
                    {/* Profile Header Section */}
                    {/* Adjusted to include the button */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 pb-8 relative"> {/* Added 'relative' for absolute positioning if needed, though flex handles it well */}
                        {/* Profile Picture */}
                        <div className="flex-shrink-0">
                            <img
                                className="h-32 w-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                                src={user.profilePicture}
                                alt={`${user.name}'s profile`}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/E0E0E0/333333?text=User"; }} // Fallback
                            />
                        </div>

                        {/* User Info and Edit Button */}
                        <div className="text-center sm:text-left flex-grow flex flex-col sm:flex-row sm:justify-between sm:items-start w-full">
                            <div className="mb-4 sm:mb-0"> {/* Margin for spacing if button is on the same line */}
                                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                                    {user.name}
                                </h1>
                                <p className="text-lg text-gray-700 mb-3">
                                    {user.bio}
                                </p>
                                <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:gap-4 justify-center sm:justify-start">
                                    <span>{user.joinDate}</span>
                                    <span>&bull;</span>
                                    <span>{user.location}</span>
                                </div>
                            </div>

                            {/* Edit Profile Button - MOVED HERE */}
                            <div className="mt-4 sm:mt-0 sm:self-start"> {/* Adjust alignment on smaller screens */}
                                <button className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                                    Edit Profile
                                    <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* button to update uploade delete */}
                    <div className="mt-10 pt-2 border-t flex justify-center gap-4">
                        <button className="flex items-center justify-center px-3 py-3 w-12 h-12 sm:px-6 sm:py-3 sm:w-auto sm:h-auto border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                            <svg className="w-5 h-5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            <span className="hidden sm:block">Upload Blog</span>
                        </button>
                        <Link to="/writeBlog">
                            <button className="flex items-center justify-center px-3 py-3 w-12 h-12 sm:px-6 sm:py-3 sm:w-auto sm:h-auto border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out">
                                <svg className="w-5 h-5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                <span className="hidden sm:block">Write Blog</span>
                            </button>
                        </Link>
                        <button className="flex items-center justify-center px-3 py-3 w-12 h-12 sm:px-6 sm:py-3 sm:w-auto sm:h-auto border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out">
                            <svg className="w-5 h-5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span className="hidden sm:block">Manage Blogs</span>
                        </button>
                    </div>
                    {/* User's Uploaded Blogs Section */}
                    <div className="mt-2 border-t pt-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Your Uploaded Blogs
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {userBlogs.map((blog) => (
                                <StripBlogCard
                                    key={blog.id}
                                    title={blog.title}
                                    description={blog.description}
                                    likes={blog.likes}
                                    comments={blog.comments}
                                    date={blog.date}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default UserProfile;
