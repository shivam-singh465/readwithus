import React, { useEffect, useState } from 'react'
import { Aside, BlogCard, Footer, Navbar, SidebarBlogCard  , StripBlogCard} from '../index'
import { BLOG_API_END_POINT } from '../../../utils/constent'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure, } from '../../redux/blogSlice'


function Blog() {
  // const dispatch = useDispatch()
  // const blogs = useSelector((state) => state.reducer.blogs);

  const blogs = [
    {
      _id: 1,
      title: "How can I send an email with MimeKit in C#",
      description: "Hi everyone I'm trying to send an email using the MimeKit but I'm trying to attach a .pdf file I have some problems: This is how I'm trying to send it: private bool EnviarMail(string file , string...",
      imageUrl: "https://placehold.co/80x80/A78BFA/FFFFFF?text=C%23", // Placeholder for C# icon
      date: "13.2k modified 44 secs ago", // Adjusted to match the image's "modified" text
      author: "phuzi",
      votes: "2",
      views: "8k",
      tags: ["c#", "email", "email-attachments", "mailkit", "mimekit"]
    },
    {
      _id: 2,
      title: "Mastering Responsive Design in React",
      description: "Learn essential techniques and best practices for creating React applications that look great and function flawlessly on any device size, using Tailwind CSS.",
      imageUrl: "https://placehold.co/80x80/60A5FA/FFFFFF?text=React",
      date: "May 20, 2025",
      author: "John Smith",
      votes: "15",
      views: "1.2k",
      tags: ["react", "tailwind", "responsive-design"]
    },
    {
      _id: 3,
      title: "Optimizing Performance for Large-Scale Web Apps",
      description: "Dive into advanced strategies for boosting the performance of your web applications, ensuring a smooth user experience even with complex data structures.",
      imageUrl: "https://placehold.co/80x80/34D399/FFFFFF?text=Perf",
      date: "May 15, 2025",
      author: "Alice Johnson",
      votes: "8",
      views: "750",
      tags: ["performance", "optimization", "web-dev"]
    },
  ];
  const categories = ["C#", "C", "E-Sports", "space", "Maths", "Humanties"]

  const lastReadBlogs = [
    { id: 2, title: "Advanced Tailwind CSS Techniques", author: "John Smith", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Tailwind", readTime: "10 min" }, // Changed to orange
    { id: 3, title: "Building Interactive UI with Framer Motion", author: "Alice Johnson", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Framer", readTime: "8 min" }, // Changed to orange
    { id: 4, title: "My First Blog Post: Getting Started with React", author: "Jane Doe", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=React", readTime: "7 min" }, // Changed to orange
  ];

  const sameAuthorBlogs = [
    { id: 5, title: "Optimizing React Performance with Memoization", author: "Jane Doe", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Perf", readTime: "12 min" }, // Changed to orange
    { id: 6, title: "Demystifying React Hooks: A Comprehensive Guide", author: "Jane Doe", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Hooks", readTime: "9 min" }, // Changed to orange
  ];




  // useEffect(() => {
  //   const fetchBlogData = async () => {
  //     // Fetch blog data from the API

  //     try {

  //       dispatch(fetchBlogsStart());
  //       const res = await axios.get(`${BLOG_API_END_POINT}/getAllBlogs`)
  //       if (!res || res.status !== 200) {
  //         throw new Error("Failed to fetch blog data");
  //       }
  //       const resData = res.data.blogs
  //       dispatch(fetchBlogsSuccess(resData))



  //       // console.log("blogs are", blog)




  //     } catch (error) {
  //       console.error("Error fetching blog data:", error);

  //     }
  //   }
  //   fetchBlogData();
  // }, [])

  


  return (

    // <div className=''>
    //   <Navbar />
    //   <div className=' md:w-4/5 mx-auto my-4 '>

    //     <div className="flex flex-wrap gap-2 mb-2 mx-3">
    //       <span className=' text-md items-center font-semibold  '>Categories : </span>
    //       {categories && categories.map((tag, index) => (
    //         <span key={index} className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
    //           {tag}
    //         </span>
    //       ))}
    //     </div>


    //     <div >
    //       {
    //         blogs.map((blogs) => {
    //           return (
    //             <StripBlogCard
    //               key={blogs._id}
    //               title={blogs.title}
    //               description={blogs.description}
    //               imageUrl={blogs.imageUrl}
    //               date={blogs.date}
    //               author={blogs.author}
    //               votes={blogs.votes}
    //               views={blogs.views}
    //               tags={blogs.tags}
    //               id={blogs._id}
    //             />
    //           )
    //         }
    //         )
    //       }


    //     </div>




    //   </div>
    //   <Footer />
    // </div>


    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        {/* Main container adjusted for ~80% width on larger screens */}
        <div className="container mx-auto md:w-11/12 max-w-screen-xl">


          {/* Grid layout adjusted for 20% (left), 60% (middle), 20% (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            {/* Left Sidebar - 20% width (1 of 5 columns) */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Last Read Blogs</h3>
                <div className="space-y-4">
                  {lastReadBlogs.map(blog => (
                    <SidebarBlogCard key={blog.id} {...blog} />
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">More by </h3>
                <div className="space-y-4">
                  {sameAuthorBlogs.map(blog => (
                    <SidebarBlogCard key={blog.id} {...blog} />
                  ))}
                </div>
              </div>


            </aside>

            {/* Middle Section: Current Reading Blog - 60% width (3 of 5 columns) */}
            <main className="lg:col-span-3 md:bg-white md:p-3 md:rounded-xl md:shadow-lg">

              {
                blogs.map((blogs) => {
                  return (
                    <StripBlogCard
                      key={blogs._id}
                      title={blogs.title}
                      description={blogs.description}
                      imageUrl={blogs.imageUrl}
                      date={blogs.date}
                      author={blogs.author}
                      votes={blogs.votes}
                      views={blogs.views}
                      tags={blogs.tags}
                      id={blogs._id}
                      
                    />
                  )
                }
                )
              }

            </main>

            {/* Right Sidebar - 20% width (1 of 5 columns) */}
              <Aside/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog