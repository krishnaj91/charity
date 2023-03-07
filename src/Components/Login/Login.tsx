import React, { useState } from 'react'
import './login.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Login = () => {
    const [loginOpen,setLoginOpen] = useState(false)

    const navigate = useNavigate()

    const handleLoginOpen=()=>{
        setLoginOpen(true)
    }

    const handleLoginClose=()=>{
        setLoginOpen(false)
    }

  return (
    <>
    <div className='body-login'>
        <div className='left-login'>
            <div className='user-login'>
                <span className='icon'><SupervisorAccountIcon fontSize='large'/></span>
                <h1>Member Login</h1>
                <input className='inpt' placeholder='username'/>
                <input className='inpt' placeholder='password'/>
                <Button variant='contained' disabled onClick={handleLoginOpen}>login</Button>
            </div>
        </div>
        <div className='line'></div>
        <div className='right-login'>
            <div className='admin-login'>
                <span className='icon'><AdminPanelSettingsIcon fontSize='large'/></span>
                <h1>Admin Login</h1>
                <input className='inpt' placeholder='username'/>
                <input className='inpt' placeholder='password'/>
                <Button variant='contained' onClick={()=>{navigate('/admin'),sessionStorage.setItem('login','admin'),sessionStorage.setItem('path','admin')}}>login</Button>
            </div>
        </div>
    </div>

    
    <Modal
        open={loginOpen}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          currently user login not required
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            for contribution login is not necessary,you can browse and donate amount as per your intrest
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            if you are an admin , please login as admin
          </Typography>
          <button onClick={handleLoginClose}>ok</button>
        </Box>
      </Modal>
    </>
  )
}

export default Login