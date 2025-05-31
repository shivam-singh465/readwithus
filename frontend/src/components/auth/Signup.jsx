import React, { useState } from "react";
import { Navbar } from "../index";
import  SignupIll  from "../../assets/images/signup.png";

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !form.name ||
            !form.email ||
            !form.password ||
            !form.confirmPassword
        ) {
            setError("Please fill in all fields.");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // Handle signup logic here
        setSuccess("Sign up successful! Welcome to readwithus.");
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <>
            <Navbar />
            <div className=" flex">
                {/* Left Side - Free Space for Image */}
                <div className="flex-1 hidden md:flex items-center justify-center bg-white">
                    {/* You can insert your image here */}
                    <img src={SignupIll} alt="Signup Visual" className="max-w-full max-h-full" />
                </div>
                {/* Right Side - Signup Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                    <div className="w-full max-w-md px-8 py-12 relative">
                        {/* Left border from heading to "Already have an account..." */}
                        <div className="absolute left-0 top-12 bottom-16 border-l-4 border-orange-500"></div>
                        <h2 className="mb-8 text-3xl font-extrabold text-orange-500 text-left relative z-10">
                            Create your account
                        </h2>
                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-0 py-2 border-0 border-b-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-400 bg-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-0 py-2 border-0 border-b-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-400 bg-white"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-700 font-medium">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-0 py-2 border-0 border-b-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-400 bg-white"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-gray-700 font-medium"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-0 py-2 border-0 border-b-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-400 bg-white"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            {error && (
                                <div className="text-orange-600 text-sm mt-2">{error}</div>
                            )}
                            {success && (
                                <div className="text-green-600 text-sm mt-2">{success}</div>
                            )}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className="mt-8 text-left text-gray-600 text-sm relative z-10">
                            Already have an account?{" "}
                            <a href="/login" className="text-orange-500 hover:underline">
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;