import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Project from './pages/Project.jsx'
import NotFound from './pages/NotFound.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'projects',
        element: <Projects />,
        children: [{ path: ':slug', element: <Project /> }], // nested
      },
      {path: 'contact',
        element: <Contact />
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
