import React, { useState } from "react";
import { Navbar } from "../index";
import loginIll from "../../assets/images/loginIll.jpg"
import axios from "axios";
import { USER_API_END_POINT } from "../../../utils/constent";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logginUser, isLoading } from "../../../redux/authUser";
import { Loader2 } from "lucide-react";

const Login = () => {
  const dispatch = useDispatch()

  const { loading } = useSelector((state) => state.userReducer)

  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(isLoading(true))

    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
       dispatch(isLoading(false))
      return;
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, form, {
        headers: {
          'Content-Type': 'application/json',
        }, withCredentials: "true",
      })
      if (res.data.success === true) {
        setSuccess("Login successful! Welcome back to readwithus.");
        navigate("/")
        dispatch(logginUser(res.data.user))
        localStorage.setItem("user", JSON.stringify(res.data.user))
      }
      // Handle login logic here
      setForm({
        email: "",
        password: "",
      });
      dispatch(isLoading(false))
    } catch (error) {
      setError(error.response.data.message)
    }
  };

  return (
    <>
      <Navbar />
      <div className=" flex">
        {/* Left Side - Free Space for Image */}
        <div className="flex-1 hidden md:flex items-center justify-center bg-white sm:hidden">
          {/* You can insert your image here */}
          <img src={loginIll} alt="Login Visual" className="max-w-[90%] " />
        </div>
        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white ">
          <div className="w-full max-w-md px-8 py-12 relative">
            {/* Left border from heading to "Don't have an account..." */}
            <div className="absolute left-0 top-12 bottom-10 border-l-4 border-orange-500"></div>
            <h2 className="mb-8 text-3xl font-extrabold text-orange-500 text-left relative z-10">
              Log in to your account
            </h2>
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
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
                  className="mt-1 block w-full px-0 py-2  text-gray-900 placeholder-gray-400 bg-white border-0 border-b-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-0"
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
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-0 py-2  text-gray-900 placeholder-gray-400 bg-white border-0 border-b-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-0"
                  placeholder="Password"
                />
              </div>
              {error && (
                <div className="text-orange-600 text-sm mt-2">{error}</div>
              )}
              {success && (
                <div className="text-green-600 text-sm mt-2">{success}</div>
              )}
              <div>
                {
                  loading ? (
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 py-2 px-4 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                    ><Loader2 />
                      Log In
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-2 px-4 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                    >
                      Log In
                    </button>

                  )


                }

              </div>
            </form>
            <p className="mt-8 text-left text-gray-600 text-sm relative z-10">
              Don't have an account?{" "}
              <a href="/signup" className="text-orange-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;