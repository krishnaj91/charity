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

  const handleChange = (name: any, value: any) => {
    setForm((preValue: any) => ({ ...preValue, [name]: value }));
  };

  const handleSubmit = () => {
      navigate('/payment')
      localStorage.setItem('amount',form.amount)
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
    <Button variant="contained" onClick={handleSubmit}>Pay</Button>
  </div>
  )
}

export default Form