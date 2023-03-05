import React from 'react'
import './footer.css'
import Mylogo from '../../assets/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className='container-footer'>
    <div className='footer-body'>
      <div className='social'>
            <img src={Mylogo} alt='krishna'/>
            <h3>Join Our Social Community</h3>
            <div className='icons'>
                <span><Tooltip title="Facebook"><FacebookIcon/></Tooltip></span>
                <span><Tooltip title="Twitter"><TwitterIcon/></Tooltip></span>
                <span><Tooltip title="Instagram"><InstagramIcon/></Tooltip></span>
                <span><Tooltip title="Gmail"><EmailIcon/></Tooltip></span>
            </div>
        </div>

        <div className='footer-about'>
        <h2>ABOUT</h2>
            <ul>
                <li onClick={()=>{navigate('/')}}>Home</li>
                <li onClick={()=>{navigate('/about')}}>About</li>
                <li onClick={()=>{navigate('/contact')}}>Contact</li>
                <li onClick={()=>{navigate('/donate')}}>Donate</li>
            </ul>
        </div>

        <div className='footer-info'>
        <h2>GOVERNING</h2>
        <ul>
            <li><span>President : </span>*********</li>
            <li><span>Secretary and VP : </span>*********</li>
            <li><span>Treasurer : </span>*********</li>
            <li><span>Joint Secretary : </span>*********</li>
        </ul>
        </div>

    </div>
    <div className='copyright'>
      <p>© 2023 Sample project : CHARITY</p>
    </div>
    </div>
  )
}

export default Footer