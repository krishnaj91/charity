import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='container-nav'>
      <div className='nav'>
        <div className='left'>
          <img src={Logo}/>
        </div>
        <div className='right'>
          <Link className='items' to='/'>HOME</Link>
          <Link className='items' to='/about'>ABOUT</Link>
          <Link className='items' to='/contact'>CONTACT</Link>
          <Link className='items' to='/donate'>DONATE</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar