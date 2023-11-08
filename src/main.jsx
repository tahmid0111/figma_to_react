import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Project from './pages/Project.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/project",
    element: <Project />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/contact",
    element: <Contact />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
