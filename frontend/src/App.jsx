import './App.css'
import React from "react"
import { About, Blog, Home, Login, Signup, UserProfile ,Contact, BlogReader} from './components/index'
import { createBrowserRouter, RouterProvider } from 'react-router'


function App() {

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
