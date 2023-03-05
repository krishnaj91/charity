import React from 'react'
import { Routes,Route } from 'react-router-dom';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Donate from '../Components/Donate/Donate';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';

const Router = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/donate' element={<Donate/>}/>
        </Routes>
        {/* <Footer/> */}
    </>
  )
}

export default Router