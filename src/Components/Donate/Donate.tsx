import React, { useState } from "react";
import "./donate.css";
import Demo from "../../assets/bg.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const [option,setOption] = useState('')
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

  const navigate = useNavigate();

  const handleChange = (name: any, value: any) => {
    setForm((preValue: any) => ({ ...preValue, [name]: value }));
    setFormError((preValue: any) => ({ ...preValue, [name]: "" }));
  };

  const Validate = () => {
    const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const tempObj = { ...formError };
    if (form.name === "") {
      tempObj.name = "Please enter your name";
    }
    else if(form.name.length<=2){
      tempObj.name = "Invalid name";
    }else{
      tempObj.name = "";
    }

    if (form.email === "") {
      tempObj.email = "Please enter your email";
    }
    else if (!emailRegx.test(form.email)) {
      tempObj.email = "Invalid Email address";
    }else{
      tempObj.email = "";
    }

    if (form.mobile === "") {
      tempObj.mobile = "Please enter your mobile number";
    }
    else if(form.mobile.length<10){
      tempObj.mobile = "Invalid mobile number";
    }
    if (form.amount === "") {
      tempObj.amount = "Please enter a amount";
    }
    setFormError(tempObj);
  };
  const handleSubmit = () => {
    Validate();
    if(form.amount){
      navigate('/payment')
      localStorage.setItem('amount',form.amount)
    }
  };
  return (
    <div className="container-donate">
      <div className="left-donate">
        <div className="info">
          <h1>
            Every donation provides help for childrens
          </h1>
          <ul>
            <li>Give the gift of hope to a child in need.</li>
            <li>Every child deserves a bright future.</li>
            <li>Your donation can change a child&apos;s life.</li>
            <li>Help us make a difference in the lives of children.</li>
            <li>Together, we can create a better world for children.</li>
            <li>Your generosity can provide a child with a better tomorrow.</li>
            <li>Invest in children&apos;s futures by donating today.</li>
            <li>Empower children to reach their full potential.</li>
            <li>Make a lasting impact on a child&apos;s life.</li>
            <li>Be a hero for children in need. Donate now.</li>
          </ul>
          <p>We can’t do any of this without your support.</p>
          <p>Please donate now.</p>
          <h2>
            For large philanthropic gifts,
            <u>please contact the High Value Donor Programme Lead</u>.
          </h2>
        </div>
      </div>
      <div className="right-donate">
        <div className="donate">
          <div>
            <h1 className="donate-tittle">You are about to Donate</h1>
            <div className="option">
              <div>
                <input type='radio' name="payment" onClick={()=>setOption('one-time')}/><span>One-time</span>
              </div>
              <div>
                <input type='radio' name="payment" onClick={()=>setOption('monthly')}/><span>Monthly</span>
              </div>
            </div>
          </div>
          <div>
            {!option && <img className="donate-imgs" src={Demo} />}
            {option==='one-time' && <img className="donate-imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4j3t9KA75p7e9Up0dczLSk5QdkZq3ls7uA&usqp=CAU" />}
            {option==='monthly' && <img className="donate-imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gSNI-UZr4nqf_fkjacQE4xg9bULnPxjyiQ&usqp=CAU" />}
          </div>
          <div className="donate-styled-text">
            <h3>enough to provide food for two people each month</h3>
          </div>
          <hr />
          <div className="donate-payment">
            <h2 className="donate-tittle">YOUR CONTACT DETAILS</h2>
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
              {/* {!option && <div></div>}
              {option==='one-time' && <div><p>1000</p><p>1500</p><p></p>2000</div>}
              {option==='monthly' && <div><p>200</p><p>400</p><p></p>600</div>} */}
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
              <Button variant="contained" onClick={handleSubmit}>Pay</Button>
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
