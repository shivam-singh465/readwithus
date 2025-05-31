import React from "react";
import { Footer, Navbar } from "../index";
import Aboutimg from "../../assets/images/aboutimg.jpg"

const About = () => {
    return (
        <>

        <Navbar/>
            <div className="bg-white text-gray-800 py-12 px-6 sm:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">
                        About ReadWithUs
                    </h1>

                    <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                        Welcome to <span className="font-semibold text-orange-500">ReadWithUs</span> — your go-to destination for insightful, inspiring, and informative blog posts. Whether you're a curious reader, an aspiring writer, or someone who just loves great content, you're in the right place.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                At <strong>ReadWithUs</strong>, our mission is to create a vibrant community where ideas thrive and knowledge is shared. We aim to give everyone a platform to read, write, and connect over meaningful content.
                            </p>
                        </div>
                        <div>
                            <img
                                src={Aboutimg} // Replace with your image path
                                alt="About ReadWithUs"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-4">What You’ll Find Here</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Daily blog posts on tech, self-growth, lifestyle, and more.</li>
                            <li>Community-driven content from passionate writers.</li>
                            <li>Clean, readable, and mobile-friendly design.</li>
                            <li>Opportunities to contribute and grow your writing voice.</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Join the Journey</h2>
                        <p className="text-gray-700 mb-4 max-w-xl mx-auto">
                            Whether you're here to read, write, or simply explore, we're glad to have you. Let’s grow together — one word at a time.
                        </p>
                        <a
                            href="/signup"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;
