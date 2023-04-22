import { Button } from '@mui/material'
import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const login =sessionStorage.getItem('login')
 
  return (
    <>
    <div className='container-nav'>
      <div className='nav'>
        <div className='left'>
          <img src={Logo}/>
        </div>
        <div className='middle'>
          <Link className={location.pathname==='/' ? 'items-active' : 'items'} to='/' >HOME</Link>
          <Link className={location.pathname==='/about' ? 'items-active' : 'items'}  to='/about' >ABOUT</Link>
          <Link className={location.pathname==='/contact' ? 'items-active' : 'items'}  to='/contact'>CONTACT</Link>
          <Link className={location.pathname==='/donate' || location.pathname==='/payment' ? 'items-active' : 'items'}  to='/donate'>DONATE</Link>
        </div>
        <div className='right'>
          {login ? <Button variant='contained'  onClick={()=>{sessionStorage.removeItem('login'),navigate('/')}}>LOGOUT</Button>         
          : <Button variant='contained' color={location.pathname==='/login' ? "secondary" : 'primary'} onClick={()=>{navigate('/login'), sessionStorage.setItem('path','login')}}>LOGIN</Button>}
        </div>
      </div>
      <div className='admin'>
        {login && <Link className={location.pathname==='/admin' ? 'items-active' : 'items'} to='/admin'>ADMIN</Link>}
      </div>
    </div>
     
    </>
  )
}

export default Navbar