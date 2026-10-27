import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Course from './pages/Course.jsx';
import ContactUs from './pages/ContactUs.jsx';


function App() {
  return (
  
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/course' element={<Course />} />
        <Route path='/contact' element={<ContactUs />} />


      </Routes>
      </BrowserRouter>
  
  )
}

export default App
