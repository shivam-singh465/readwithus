import React from 'react';
import { Blogs } from '../index';

// Main App component
const MainSection = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        {/* Section after Hero Carousel */}
        <section className="py-16 md:py-24shadow-lg rounded-lg mx-4 md:mx-auto max-w-7xl px-6 lg:px-8">
          <div className="container mx-auto text-center">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Discover Our Core Values
            </h2>
            {/* Section Subtitle/Description */}
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We are committed to delivering excellence through innovation, customer-centricity, and sustainable practices.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto mb-6">
                  {/* Icon Placeholder (replace with actual icon or SVG) */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v14m-5-7l5 5 5-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We constantly push the boundaries of what's possible, embracing new technologies and creative solutions to solve complex challenges.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mx-auto mb-6">
                  {/* Icon Placeholder (replace with actual icon or SVG) */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2h5m0-9a4 4 0 110-8 4 4 0 010 8zm0 0c-1.393 0-2.67-.659-3.5-1.712a3.997 3.997 0 010-5.576c.83-.053 2.107-.712 3.5-1.712"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our customers are at the heart of everything we do. We listen, adapt, and strive to exceed expectations with every interaction.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full mx-auto mb-6">
                  {/* Icon Placeholder (replace with actual icon or SVG) */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12H8m4 0h2m4 0h2m-6 4h.01M12 7v.01"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are dedicated to building a better future by integrating environmentally friendly and socially responsible practices into our operations.
                </p>
              </div>
            </div>

            {/* Call to Action (Optional) */}
            <div className="mt-16">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                Learn More About Us
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Blogs/>
    </>
  );
}

export default MainSection;
