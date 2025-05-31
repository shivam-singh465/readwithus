import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, BookOpen } from 'lucide-react';
import Hero1 from "../../assets/images/hero1.jpg"
import Hero2 from "../../assets/images/hero2.jpg"
import Hero3 from "../../assets/images/hero3.jpg"
import Hero4 from "../../assets/images/hero4.jpg"

// Sample data for carousel slides with image URLs
const carouselSlidesData = [
  {
    id: 1,
    heading: "Discover the Latest Trends in Tech",
    subheading: "Stay updated with our in-depth articles and expert opinions on the ever-evolving world of technology.",
    button1Text: "Read Articles",
    button1Link: "#tech-articles",
    button2Text: "Explore Categories",
    button2Link: "#categories",
    imageUrl: Hero1, // Replace with your image URL
    textColor: "text-white"
  },
  {
    id: 2,
    heading: "Master Your Productivity",
    subheading: "Unlock your full potential with tips, tricks, and strategies for better time management and efficiency.",
    button1Text: "Get Productive",
    button1Link: "#productivity-tips",
    button2Text: "Join Community",
    button2Link: "#community",
    imageUrl: Hero2, // Replace with your image URL
    textColor: "text-white"
  },
  {
    id: 3,
    heading: "Creative Writing Prompts & Inspiration",
    subheading: "Fuel your imagination and overcome writer's block with our curated collection of prompts and ideas.",
    button1Text: "Start Writing",
    button1Link: "#writing-prompts",
    button2Text: "View Showcases",
    button2Link: "#showcases",
    imageUrl: Hero3, // Replace with your image URL
    textColor: "text-white"
  },
  {
    id: 4,
    heading: "Healthy Living & Wellness Guides",
    subheading: "Explore our comprehensive guides on nutrition, fitness, and mental well-being for a balanced life.",
    button1Text: "Live Healthy",
    button1Link: "#wellness-guides",
    button2Text: "Recipes",
    button2Link: "#healthy-recipes",
    imageUrl: Hero4, // Replace with your image URL
    textColor: "text-white"
  }
];

// Main Hero Section Component
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlidesData.length);
    // Set timeout for transition duration to prevent rapid clicks during animation
    setTimeout(() => setIsTransitioning(false), 500); // Corresponds to CSS transition duration
  }, [isTransitioning]);

  // Function to go to the previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselSlidesData.length) % carouselSlidesData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Function to go to a specific slide (for dot navigation)
  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-sliding functionality
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] md:h-[550px] lg:h-[650px] overflow-hidden font-inter">
      {/* Carousel Wrapper */}
      <div
        className="relative w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Render all slides for smooth transition */}
        {carouselSlidesData.map((slide) => (
          <div
            key={slide.id}
            className={`w-full h-full flex-shrink-0 ${slide.textColor} flex items-center justify-center p-6 md:p-12 relative`} // Added relative for overlay positioning
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            // Add onerror for placeholder if image fails to load
            onError={(e) => {
              e.target.style.backgroundImage = `url(https://placehold.co/1920x1080/cccccc/969696?text=Image+Not+Found)`;
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            
            {/* Slide Content */}
            <div className="text-center max-w-3xl mx-auto relative z-10"> {/* Ensure content is above overlay */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                {slide.heading}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90">
                {slide.subheading}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href={slide.button1Link}
                  className="flex items-center justify-center bg-white text-slate-800 hover:bg-slate-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-lg shadow-md text-sm md:text-base min-w-[180px]"
                >
                  <BookOpen size={20} className="mr-2" />
                  {slide.button1Text}
                </a>
                <a
                  href={slide.button2Link}
                  className="flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 transition-all duration-300 font-semibold py-3 px-8 rounded-lg shadow-md text-sm md:text-base min-w-[180px]"
                >
                  <Play size={20} className="mr-2" />
                  {slide.button2Text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-opacity duration-300 z-20" // Ensure arrows are above overlay
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-opacity duration-300 z-20" // Ensure arrows are above overlay
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"> {/* Ensure dots are above overlay */}
        {carouselSlidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main App component to render the HeroSection
// In a real application, you would import HeroSection and use it within your page structure.


export default HeroSection;
