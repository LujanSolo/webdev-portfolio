import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './assets/components/aboutMe/About.jsx';
import Navbar from './assets/components/navbar/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about-me',
    element: <AboutMe />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
