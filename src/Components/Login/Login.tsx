import React, { useEffect, useState } from "react";
import "./login.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Login = () => {
  const navigate = useNavigate();
  const username=localStorage.getItem('username')
  const password=localStorage.getItem('password')
  
  const [vol,setVol]=useState({
    username:'',
    password:''
  }) 
  const [volError,setVolError]=useState({
    username:'',
    password:''
  })

  const handleVolunteer=(name:any,value:any)=>{
    setVol((preValue)=>({...preValue,[name]:value}))
    setVolError((preValue)=>({...preValue,[name]:''}))
  }

  const validate=(name:any)=>{
    if(name==='volunteer'){
      const tempObj={...volError}
      if(vol.username===''){
        tempObj.username='Please enter you Username'
      }else if(vol.username!==username){
        tempObj.username='Username doesnot exist'
        tempObj.password=''
      }else{
        tempObj.username=''
      }
      if(vol.password===''){
        tempObj.password='Please enter you password'
      }else if(vol.username===username && vol.password!==password){
        tempObj.password='Wrong Password'
      }else{
        tempObj.password=''
      }
      setVolError(tempObj)
    }
  }

  const handleVolunteerSubmit=()=>{
    validate('volunteer')
    if(vol.username.length==10&&vol.password){
      // alert('ss')
    }
  }
  useEffect(()=>{
    AOS.init({
      delay: 100,
      once: true,
      duration: 2000
    })
  })
  return (
    <>
      <div className="body-login">
        <div className="left-login" data-aos="fade-left">
          <div className="user-login">
            <span className="icon" data-aos="zoom-out" data-aos-delay="1000">
              <SupervisorAccountIcon fontSize="large" />
            </span>
            <h1>Volunteer Login</h1>
            <input className="inpt" type='text' placeholder="username" value={vol.username} onChange={(e)=>handleVolunteer('username',e.target.value.toString().slice(0,10))}/>
            <p>{volError.username}</p>
            <input className="inpt" type='password' placeholder="password" value={vol.password} onChange={(e)=>handleVolunteer('password',e.target.value.toString().slice(0,10))}/>
            <p>{volError.password}</p>
            <Button variant="contained" onClick={handleVolunteerSubmit}>login</Button><br/>
            <span>
              New user click here to <Link to={"/register"}>Register</Link>
            </span>
            <p className="auto" onClick={()=>{setVol({username:"sample12",password:"sample@12"}),setVolError({username:"",password:""})}}>Auto Fill</p>
          </div>
        </div>
        <div className="line"  data-aos="zoom-in"></div>
        <div className="right-login" data-aos="fade-right">
          <div className="admin-login">
            <span className="icon" data-aos="zoom-out" data-aos-delay="1000">
              <AdminPanelSettingsIcon fontSize="large" />
            </span>
            <h1>Admin Login</h1>
            <input
              className="inpt"
              type="text"
              placeholder="username"
              // value="Admin@123"
            />
            <input
              className="inpt"
              type="password"
              placeholder="password"
              // value="admin123"
            />
            <Button
              variant="contained"
              onClick={() => {
                navigate("/admin"),
                  sessionStorage.setItem("login", "admin"),
                  sessionStorage.setItem("path", "admin");
              }}
            >
              login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
