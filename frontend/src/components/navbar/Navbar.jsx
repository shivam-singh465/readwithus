import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router"; // ✅ correct import
import { logoutUser } from "../../../redux/authUser";
import { Cookie } from "lucide-react";
import { USER_API_END_POINT } from "../../../utils/constent";
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector((state) => state.userReducer)


    const logoutButton = async () => {
        try {
            const res = await axios.post(`${USER_API_END_POINT}/logout`, {}, {
                withCredentials: true, 
            })
            if(res.data.success){
                console.log("if is wrkoing", res)
                dispatch(logoutUser())
                navigate("/")
                localStorage.clear()
            }
                console.log(res.message)
        } catch (error) {
            console.log(error)
        }
    }


    // const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-orange-500 tracking-tight">
                            ReadWithUs
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {isLoggedIn ? (
                            <>
                                <Link to="/" className="text-gray-700 hover:text-orange-500">
                                    Home
                                </Link>
                                <Link to="/blog" className="text-gray-700 hover:text-orange-500">
                                    Blogs
                                </Link>
                                <Link to="/about" className="text-gray-700 hover:text-orange-500">
                                    About
                                </Link>
                                <Link to="/contact" className="text-gray-700 hover:text-orange-500">
                                    Contact
                                </Link>
                                <Link to="/profile" className="text-gray-700 hover:text-orange-500">
                                    Profile
                                </Link>
                                <Link
                                    onClick={logoutButton}

                                    className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold"
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-orange-500 border border-orange-500 hover:bg-orange-50 px-4 py-2 rounded-md text-sm font-semibold"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pt-4 pb-6 space-y-2">
                    {isLoggedIn ? (
                        <>
                            <Link to="/" className="block text-gray-700 hover:text-orange-500">
                                Home
                            </Link>
                            <Link to="/blog" className="block text-gray-700 hover:text-orange-500">
                                Blogs
                            </Link>
                            <Link to="/about" className="block text-gray-700 hover:text-orange-500">
                                About
                            </Link>
                            <Link to="/contact" className="block text-gray-700 hover:text-orange-500">
                                Contact
                            </Link>
                            <Link to="/profile" className="block text-gray-700 hover:text-orange-500">
                                Profile
                            </Link>
                            <Link
                                to="/logout"
                                className="block text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold"
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="block text-orange-500 border border-orange-500 hover:bg-orange-50 px-4 py-2 rounded-md text-sm font-semibold"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="block text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
