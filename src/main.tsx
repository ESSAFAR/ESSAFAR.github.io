import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage.tsx'
import AllArticles from './Pages/AllArticles.tsx'
import Article from './Pages/Article.tsx'
import AboutUsMore from './Pages/AboutUsMore.tsx'
import RepresentationEMI from './Pages/PresentationEMI.tsx'
import PresentationEMI from './Pages/PresentationEMI.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element : <HomePage />
  },
  {
    path: "/AllArticles",
    element : <AllArticles />
  },
  {
    path: "/Article/:id", 
    element: <Article />
  },
  {
    path: "/AboutUsMore", 
    element: <AboutUsMore />
  },
  {
    path: "/PresentationEMI", 
    element: <PresentationEMI />
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
