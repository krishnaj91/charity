import React from 'react'
import { Routes,Route } from 'react-router-dom';
import About from '../Components/About/About';
import Admin from '../Components/Admin/Admin';
import Contact from '../Components/Contact/Contact';
import Donate from '../Components/Donate/Donate';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import Payment from '../Components/Payments/Payment';

const Router = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/donate' element={<Donate/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/payment' element={<Payment/>}/>
        </Routes>
    </>
  )
}

export default Router