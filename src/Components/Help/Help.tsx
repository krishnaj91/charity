import React, { useContext, useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import "./help.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate()
  const [help, setHelp] = useState(false);
  const [tour,setTour] = useState('user')
  
  return (
    <div>
      <MessageIcon
        className={help===true ? "help-icon help-icon-active" : "help-icon"}
        fontSize="large"
        onClick={() => setHelp(!help)}
      />{" "}
      {help == true && 
        <div className="help-card">
          <div className="help-cross">
            <CloseIcon onClick={()=>setHelp(false)}/>
          </div>
          <div>
            <h1>PROJECT TOUR.</h1>
          </div>
          <div>
            <p>Select the category to explore</p>
          </div>
          <div className="help-btn-div">
            <button className={tour==='user' ? "help-btn-ative" :''} onClick={()=>setTour('user')}>USER</button>
            <button className={tour==='volunteer' ? "help-btn-ative" :''} onClick={()=>setTour('volunteer')}>VOLUNTEER</button>
            <button className={tour==='admin' ? "help-btn-ative" :''} onClick={()=>setTour('admin')}>ADMIN</button>
          </div>
          {tour==='user' &&
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum hic provident saepe exercitationem, placeat aliquam necessitatibus sit vitae. Veritatis, ea?</p>
            <div className="help-btn-div">
              <button className="" onClick={()=>navigate('/payment')}>Payment</button>
            </div>
          </div>
          }

          {tour==='volunteer' &&
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum hic provident saepe exercitationem, placeat aliquam necessitatibus sit vitae. Veritatis, ea?</p>
            <div className="help-btn-div">
              <button className="" onClick={()=>navigate('/login')}>login</button>
              <button className="" onClick={()=>navigate('/register')}>register</button>
              <button className="" onClick={()=>navigate('/kyc')}>kyc</button>
            </div>
          </div>
          }

          {tour==='admin' &&
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum hic provident saepe exercitationem, placeat aliquam necessitatibus sit vitae. Veritatis, ea?</p>
            <div className="help-btn-div">
              <button className="" onClick={()=>navigate('/admin')}>dashboard</button>
              <button className="" onClick={()=>navigate('/admin')}>payments</button>
              <button className="" onClick={()=>navigate('/admin')}>feed</button>
            </div>
          </div>
          }

        </div>
        }
    </div>
  );
};

export default Help;
