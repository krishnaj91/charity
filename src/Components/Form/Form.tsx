import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
  });

  const handleChange = (name: any, value: any) => {
    setForm((preValue: any) => ({ ...preValue, [name]: value }));
    setFormError((preValue)=>({...preValue,[name]:''}))
  };

  const Validate = () => {
    const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const tempObj = { ...formError };
    if (form.name === "") {
      tempObj.name = "Please enter your Name";
    }
    else if(form.name.length<=2){
      tempObj.name = "Invalid Name";
    }else{
      tempObj.name = "";
    }

    if (form.email === "") {
      tempObj.email = "Please enter your Email";
    }
    else if (!emailRegx.test(form.email)) {
      tempObj.email = "Invalid Email address";
    }else{
      tempObj.email = "";
    }

    if (form.mobile === "") {
      tempObj.mobile = "Please enter your Mobile Number";
    }
    else if(form.mobile.length<10){
      tempObj.mobile = "Invalid Mobile Number";
    }
    if (form.amount === "") {
      tempObj.amount = "Please enter Amount";
    }
    setFormError(tempObj);
  };

  const handleSubmit = () => {
      Validate();
      const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if(form.name.length > 2 && emailRegx.test(form.email) && form.mobile.length >= 10 && form.amount){
        navigate('/payment')
        localStorage.setItem('amount',form.amount)
      }
  };

  return (
    <div>
    <h2>Name:</h2>
    <TextField
      value={form.name}
      onChange={(e: any) => {
        handleChange("name", e.target.value.toString().slice(0, 15).replace(/[^a-z]/gi,''));
      }}
      className="field"
      placeholder="Name"
      variant="outlined"
    />
    <p className="err">{formError.name}</p>
    <h2>Email:</h2>
    <TextField
      value={form.email}
      onChange={(e: any) => {
        handleChange("email", e.target.value);
      }}
      className="field"
      placeholder="Email"
      variant="outlined"
    />
    <p className="err">{formError.email}</p>
    <h2>Mobile number:</h2>
    <TextField
      value={form.mobile}
      onChange={(e: any) => {
        handleChange("mobile", e.target.value.toString().slice(0, 10));
      }}
      onWheel={(e:any) => e.target.blur()}
      className="field"
      placeholder="Mobile Number"
      variant="outlined"
      type="number"
    />
    <p className="err">{formError.mobile}</p>
    <h2>Amount:</h2>
    <TextField
      value={form.amount}
      onChange={(e: any) => {
        handleChange("amount", e.target.value.toString().slice(0, 6));
      }}
      onWheel={(e:any) => e.target.blur()}
      type='number'
      className="field"
      placeholder="Amount"
      variant="outlined"
    />
    <p className="err">{formError.amount}</p>
    <center>
      <Button variant="contained" onClick={handleSubmit}>Pay</Button>
    </center>
    <p className='auto' onClick={()=>{setForm({name:'krishna',email:'krishna@gmail.com',mobile:'9987875867',amount:'100'}),setFormError({name:'',email:'',mobile:'',amount:''})}}>Auto Fill</p>
  </div>
  )
}

export default Form