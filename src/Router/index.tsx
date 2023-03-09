import React from 'react'
import { Routes,Route } from 'react-router-dom';
import About from '../Components/About/About';
import Education from '../Components/About/Education';
import Health from '../Components/About/Health';
import Shelter from '../Components/About/Shelter';
import Welfare from '../Components/About/Welfare';
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
            <Route path='/about-education' element={<Education/>}/>
            <Route path='/about-health' element={<Health/>}/>
            <Route path='/about-shelter' element={<Shelter/>}/>
            <Route path='/about-welfare' element={<Welfare/>}/>
        </Routes>
    </>
  )
}

export default Router