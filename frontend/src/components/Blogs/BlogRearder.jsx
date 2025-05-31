import React from 'react';
import { Aside, Footer, Navbar } from '../index';

// SidebarBlogCard Component
// A compact card for displaying blogs in the sidebars.
const SidebarBlogCard = ({ title, author, imageUrl, readTime }) => {
    const placeholderImage = "https://placehold.co/60x60/E0E0E0/333333?text=Blog";
    return (
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-200 cursor-pointer">
            <img
                className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                src={imageUrl || placeholderImage}
                alt={title}
                onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
            />
            <div className="flex-grow">
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {title}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                    {author} • {readTime} read
                </p>
            </div>
        </div>
    );
};

// Main App component for the Blog Reader Page
function BlogReader() {
    // --- Dummy Data ---
    const currentBlog = {
        id: 1,
        title: "Understanding State Management in Modern React Apps: A Deep Dive",
        author: "Jane Doe",
        date: "May 29, 2025",
        readTime: "15 min",
        imageUrl: "https://placehold.co/800x400/FFD700/333333?text=React+State", // Changed to orange-ish placeholder
        content: `
      <p class="mb-4">State management is a crucial aspect of building complex React applications. As your application grows, managing data that changes over time across various components can become challenging. This article explores different approaches to state management in modern React, from built-in hooks to popular external libraries.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-3">1. Local Component State (useState)</h3>
      <p class="mb-4">For simple, isolated state within a single component, the <code>useState</code> hook is your go-to solution. It's lightweight and easy to use, perfect for managing UI-specific state like form inputs or toggle switches.</p>
      <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4"><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3 class="text-2xl font-bold text-gray-800 mb-3">2. Context API (useContext)</h3>
      <p class="mb-4">When you need to share state between multiple components without prop-drilling (passing props down through many levels), React's Context API is an excellent built-in solution. It's ideal for global state like themes, user authentication status, or language preferences.</p>
      <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4"><code>// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
};

export const useTheme = () => useContext(ThemeContext);

// App.js
import { ThemeProvider, useTheme } from './ThemeContext';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  return (
    &lt;div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}&gt;
      &lt;h1&gt;Current Theme: {theme}&lt;/h1&gt;
      &lt;button onClick={toggleTheme}&gt;Toggle Theme&lt;/button&gt;
    &lt;/div&gt;
  );
}

function App() {
  return (
    &lt;ThemeProvider&gt;
      &lt;AppContent /&gt;
    &lt;/ThemeProvider&gt;
  );
}</code></pre>

      <h3 class="text-2xl font-bold text-gray-800 mb-3">3. Redux</h3>
      <p class="mb-4">For large-scale applications with complex state interactions, Redux provides a predictable state container. While it has a steeper learning curve, it offers powerful debugging tools and a clear architectural pattern for managing global application state.</p>

      <h3 class="text-2xl font-bold text-gray-800 mb-3">4. Zustand</h3>
      <p class="mb-4">Zustand is a lightweight, fast, and scalable state-management solution that offers a more minimalistic API compared to Redux. It's a great choice for projects that need robust global state without the boilerplate of Redux.</p>
      <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4"><code>import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function CounterZustand() {
  const { count, increment, decrement } = useStore();
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;Increment&lt;/button&gt;
      &lt;button onClick={decrement}&gt;Decrement&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <p class="mt-6">Choosing the right state management solution depends on your project's size, complexity, and team preferences. Start simple, and scale up as needed!</p>
    `,
    };

    const lastReadBlogs = [
        { id: 2, title: "Advanced Tailwind CSS Techniques", author: "John Smith", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Tailwind", readTime: "10 min" }, // Changed to orange
        { id: 3, title: "Building Interactive UI with Framer Motion", author: "Alice Johnson", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Framer", readTime: "8 min" }, // Changed to orange
        { id: 4, title: "My First Blog Post: Getting Started with React", author: "Jane Doe", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=React", readTime: "7 min" }, // Changed to orange
    ];

    const sameAuthorBlogs = [
        { id: 5, title: "Optimizing React Performance with Memoization", author: "Jane Doe", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Perf", readTime: "12 min" }, // Changed to orange
        { id: 6, title: "Demystifying React Hooks: A Comprehensive Guide", author: "Jane Doe", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Hooks", readTime: "9 min" }, // Changed to orange
    ];

    const suggestedBlogs = [
        { id: 7, title: "Comparing Vue.js and React for SPAs", author: "Bob Williams", imageUrl: "https://placehold.co/60x60/F97316/333333?text=Vue", readTime: "11 min" }, // Changed to orange
        { id: 8, title: "Introduction to Server-Side Rendering with Next.js", author: "Charlie Brown", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Next", readTime: "14 min" }, // Changed to orange
        { id: 9, title: "Frontend Testing Strategies: Jest & React Testing Library", author: "David Lee", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=Test", readTime: "10 min" }, // Changed to orange
        { id: 10, title: "Building a GraphQL API with Node.js", author: "Eve Davis", imageUrl: "https://placehold.co/60x60/F97316/FFFFFF?text=GraphQL", readTime: "18 min" }, // Changed to orange
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
                {/* Main container adjusted for ~80% width on larger screens */}
                <div className="container mx-auto w-11/12 max-w-screen-xl">
                  

                    {/* Grid layout adjusted for 20% (left), 60% (middle), 20% (right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
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
                                <h3 className="text-xl font-bold text-gray-900 mb-4">More by {currentBlog.author}</h3>
                                <div className="space-y-4">
                                    {sameAuthorBlogs.map(blog => (
                                        <SidebarBlogCard key={blog.id} {...blog} />
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Middle Section: Current Reading Blog - 60% width (3 of 5 columns) */}
                        <main className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                                {currentBlog.title}
                            </h2>
                            <div className="flex items-center text-gray-600 text-sm mb-6">
                                <span>By <span className="font-semibold text-orange-600">{currentBlog.author}</span></span> {/* Changed to orange-600 */}
                                <span className="mx-2">&bull;</span>
                                <span>{currentBlog.date}</span>
                                <span className="mx-2">&bull;</span>
                                <span>{currentBlog.readTime} read</span>
                            </div>
                            <img
                                className="w-full h-64 object-cover rounded-lg mb-8 shadow-md"
                                src={currentBlog.imageUrl}
                                alt={currentBlog.title}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/E0E0E0/333333?text=Blog+Image"; }}
                            />
                            <div
                                className="prose prose-orange max-w-none text-gray-800 leading-relaxed" // Changed to prose-orange
                                dangerouslySetInnerHTML={{ __html: currentBlog.content }}
                            ></div>
                        </main>

                        {/* Right Sidebar - 20% width (1 of 5 columns) */}
                        <Aside/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogReader;
