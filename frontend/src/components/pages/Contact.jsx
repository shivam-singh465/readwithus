import React from "react";
import { Footer, Navbar } from "../index";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-white py-12 px-6 sm:px-10 lg:px-20 text-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 text-center">
                        Have questions, feedback, or just want to say hello? We'd love to hear from you!
                    </p>

                    <form className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Type your message..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-500">
                            Or email us directly at{" "}
                            <a href="mailto:support@readwithus.com" className="text-orange-500 font-medium">
                                support@readwithus.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
