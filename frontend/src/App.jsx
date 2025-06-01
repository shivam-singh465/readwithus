import './App.css'
import React, { useEffect } from "react"
import { About, Blog, Home, Login, Signup, UserProfile, Contact, BlogReader } from './components/index'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { useDispatch } from 'react-redux'
import { logginUser } from '../redux/authUser'
import { USER_API_END_POINT } from '../utils/constent'
import axios from 'axios'


function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     dispatch(logginUser(JSON.parse(storedUser)));
  //   }
  // }, []);

    useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/me`, {
          withCredentials: true, // <-- important to send cookies
        });
        dispatch(logginUser(res.data)); // store user data in redux
      } catch (err) {
        console.log("Not authenticated", err);
        
      }
    };

    checkAuth();
  }, []);




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/profile",
      element: <UserProfile />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/blog/:id",
      element: <BlogReader />,
    },

  ])





  return (
    <>

      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>


    </>
  )
}

export default App
