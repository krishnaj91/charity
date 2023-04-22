import React, { useState } from "react";
import "./register.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate()
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    // check: "",
  });
  const [check, setCheck] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const exceptThisSymbols = ["e", "E", "+", "-", "."];
  const handleChange = (name: any, value: any) => {
    setForm((preValue) => ({ ...preValue, [name]: value }));
    setFormError((preValue) => ({ ...preValue, [name]: "" }));
  };

  const Validate = () => {
    const tempObj = { ...formError };
    if (form.name === "") {
      tempObj.name = "Please enter your Name";
    } else {
      tempObj.name = "";
    }
    if (form.mobile === "") {
      tempObj.mobile = "Please enter your Mobile number";
    } else {
      tempObj.mobile = "";
    }
    if (form.email === "") {
      tempObj.email = "Please enter your Email";
    } else {
      tempObj.email = "";
    }
    if (form.city === "") {
      tempObj.city = "Please enter your City";
    } else {
      tempObj.city = "";
    }
    setFormError(tempObj);
    if (check === false) {
      setCheckError(true);
    } else {
      setCheckError(false);
    }
  };

  const handleSubmit = () => {
    Validate();
    if(form.name.length>=3 && form.mobile.length===10 && form.email && form.city.length>=3 && check===true){
      navigate('/kyc')
    localStorage.setItem('v-name',form.name)
    }
  };
  return (
    <div className="register-main">
      <div className="register-body">
        <span className="icon">
          <LogoutIcon fontSize="large" />
        </span>
        <input
          className="register-inpt"
          placeholder="Name"
          value={form.name}
          type='text'
          onChange={(e) => handleChange("name", e.target.value.toString().slice(0, 15).replace(/[^a-z]/gi,''))}
        />
        <p className="err">{formError.name}</p>
        <input
          className="register-inpt"
          placeholder="Mobile"
          onKeyDown={(e) =>
            exceptThisSymbols.includes(e.key) && e.preventDefault()
          }
          value={form.mobile}
          onWheel={(e:any) => e.target.blur()}
          type='number'
          onChange={(e) => handleChange("mobile", e.target.value.toString().slice(0, 10))}
        />
        <p className="err">{formError.mobile}</p>
        <input
          className="register-inpt"
          placeholder="Email"
          value={form.email}
          type='email'
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <p className="err">{formError.email}</p>
        <input
          className="register-inpt"
          placeholder="City"
          value={form.city}
          type='text'
          onChange={(e) => handleChange("city", e.target.value.toString().slice(0, 15).replace(/[^a-z]/gi,''))}
        />
        <p className="err">{formError.city}</p>
        <div className={checkError === true ? "accept err" : "accept"}>
          <input
            type="checkbox"
            checked={check}
            onClick={() => {
              setCheck(!check), setCheckError(false);
            }}
          />
          <span>
            Please Accept <a>tnc</a>
          </span>
        </div>
        <Button variant="contained" onClick={handleSubmit}>
          REGISTER
        </Button>
      </div>
      {/* auto */}
      <p className="auto" onClick={()=>{setForm({name:'krishna',mobile:'9098786547',email:'krishna@gmail.com',city:'hyderabad'}),setCheck(true),setCheckError(false),setFormError({name:'',mobile:'',email:'',city:''})}}>AUTO FILL</p>
    </div>
  );
};

export default Register;
