import React, { useState } from "react";
import "./donate.css";
import Demo from "../../assets/bg.jpg";
import TextField from "@mui/material/TextField";

const Donate = () => {
  const [form,SetForm] = useState({
    name:'',
    email:'',
    mobile:'',
    amount:''
  })

  const [formError,SetFormError] = useState({
    name:'',
    email:'',
    mobile:'',
    amount:''
  })

  const handleChange = (name:any,value:any)=>{
    SetForm((preValue:any)=>({...preValue,[name]:value}))
    SetFormError((preValue:any)=>({...preValue,[name]:''}))
  }

  const Validate = ()=>{
    const tempObj = {...formError}
    if(form.name===''){
      tempObj.name="Please enter your name"
    }
    if(form.email===''){
      tempObj.email='Please enter your email'
    }
    if(form.mobile===''){
      tempObj.mobile='Please enter your mobile number'
    }
    if(form.amount===''){
      tempObj.amount='Please enter a amount'
    }
    SetFormError(tempObj)
  }
  const handleSubmit =()=>{
    Validate()
  }
  return (
    <div className="container-donate">
      <div className="left-donate">
        <h1>
          Every donation provides nutritious food for hungry children and
          families.
        </h1>
        <p>
          When you donate to the World Food Programme, your generosity is
          immediately put to work helping build a world with zero hunger. You
          can help save lives during emergencies or give children nutritious
          meals in school.
        </p>
        <p>We can’t do any of this without your support.</p>
        <p>Please donate now.</p>
        <h2>
          For large philanthropic gifts,please contact the High Value Donor
          Programme Lead.
        </h2>
      </div>
      <div className="right-donate">
        <div className="donate">
          <div>
            <h1>You are about to Donate</h1>
          </div>
          <div>
            <img className="donate-imgs" src={Demo} />
          </div>
          <div className="donate-styled-text">
            <h3>enough to provide food for two people each month</h3>
          </div>
          <hr />
          <div className="donate-payment">
            <h2>YOUR CONTACT DETAILS</h2>
            <div>
              <h2>Name:</h2>
              <TextField
                value={form.name}
                onChange={(e:any)=>{handleChange('name',e.target.value)}}
                className="field"
                placeholder="Name"
                variant="outlined"
              />
              <p className="err">{formError.name}</p>
              <h2>Email:</h2>
              <TextField
                value={form.email}
                onChange={(e:any)=>{handleChange('email',e.target.value)}}
                className="field"
                placeholder="Email"
                variant="outlined"
              />
              <p className="err">{formError.email}</p>
              <h2>Mobile number:</h2>
              <TextField
                value={form.mobile}
                onChange={(e:any)=>{handleChange('mobile',e.target.value)}}
                className="field"
                placeholder="Mobile Number"
                variant="outlined"
              />
              <p className="err">{formError.mobile}</p>
              <h2>Amount:</h2>
              <TextField
                value={form.amount}
                onChange={(e:any)=>{handleChange('amount',e.target.value)}}
                className="field"
                placeholder="Amount"
                variant="outlined"
              />
              <p className="err">{formError.amount}</p>
              <button onClick={handleSubmit}>Pay</button>
            </div>
          </div>
          <div className="donate-info">
            <p>
              By providing your phone number you agree that ___ will use the
              personal information you share with us to send you information
              about our programs, services and events by SMS, telephone (voice)
              and via messenger platforms i.e. WhatsApp.If you agree to receive
              marketing communications, you also agree to your personal data
              being processed and transferred outside the country where you live
              to send you these communications. To learn more about this and
              ___s personal data and privacy practices, please read our donation
              platform privacy policy. You can opt out of marketing
              communications at any time by emailing supportercare@___.org.
            </p>
          </div>
          <div className="donate-end">
            <p>
              The Charity Programme is a 100% voluntarily funded organization.
              For every $1 you give, 64 cents goes directly to programmes
              supporting hungry people. Right now, 2 cents is used to process
              your donation and 6 cents helps run ___ and our programmes. 28
              cents goes towards raising the next $1 (which under our ten-year
              plan will fall – averaging out at 22 cents between 2020-2030).
              ___, as an international organization, enjoys privileges and
              immunities, including exemption from direct taxation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
