import React, { useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import "./help.css";
import CloseIcon from '@mui/icons-material/Close';

const Help = () => {
  const [help, setHelp] = useState(false);
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
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed eum at, consequatur itaque magni cupiditate distinctio perspiciatis. Nulla maiores esse voluptas ipsum nam doloribus voluptatum est reiciendis consequatur ullam.</p>
          </div>
          <div className="help-btn-div">
            <button className="">demo</button>
            <button className="">demo</button>
            <button className="">demo</button>
          </div>
          <div className="help-btn-div">
            <button className="">demo</button>
            <button className="">demo</button>
            <button className="">demo</button>
          </div>
        </div>
        }
    </div>
  );
};

export default Help;
