import { Button } from '@mui/material'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {

    const navigate = useNavigate()
    const path= sessionStorage.getItem('path')
    const login =sessionStorage.getItem('login')
 
  return (
    <>
    <div className='container-nav'>
      <div className='nav'>
        <div className='left'>
          <img src={Logo}/>
        </div>
        <div className='middle'>
          <Link className={path==='home' || !path ? 'items-active' : 'items'} to='/' onClick={()=>sessionStorage.setItem('path','home')}>HOME</Link>
          <Link className={path==='about' ? 'items-active' : 'items'}  to='/about' onClick={()=>sessionStorage.setItem('path','about')}>ABOUT</Link>
          <Link className={path==='contact' ? 'items-active' : 'items'}  to='/contact' onClick={()=>sessionStorage.setItem('path','contact')}>CONTACT</Link>
          <Link className={path==='donate' ? 'items-active' : 'items'}  to='/donate'  onClick={()=>sessionStorage.setItem('path','donate')}>DONATE</Link>
        </div>
        <div className='right'>
          {login ? <Button variant='contained'  onClick={()=>{sessionStorage.removeItem('login'),navigate('/'),sessionStorage.setItem('path','home')}}>LOGOUT</Button>         
          : <Button variant='contained' color={path==='login' ? "secondary" : 'primary'} onClick={()=>{navigate('/login'), sessionStorage.setItem('path','login')}}>LOGIN</Button>}
        </div>
      </div>
      <div className='admin'>
        {login && <Link className={path==='admin' ? 'items-active' : 'items'} to='/admin' onClick={()=>{sessionStorage.setItem('path','admin')}}>ADMIN</Link>}
      </div>
    </div>
     
    </>
  )
}

export default Navbar