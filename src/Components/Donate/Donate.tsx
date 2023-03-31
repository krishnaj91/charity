import React, { useEffect, useState } from "react";
import "./donate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DonateImg from '../../assets/donate/donate.avif'
import Onetime from '../../assets/donate/onetime.avif'
import Monthly from '../../assets/donate/mounthly.avif'
import Form from "../Form/Form";

const Donate = () => {
  const [option,setOption] = useState('')

  useEffect(()=>{
    AOS.init({
      once: true
    })
  })
  
  return (
    <div className="container-donate">
      <div className="left-donate" data-aos="zoom-out">
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
      <div className="right-donate" data-aos="zoom-out">
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
            {!option && <img className="donate-imgs" src={DonateImg} />}
            {option==='one-time' && <img className="donate-imgs" src={Onetime} data-aos="zoom-in"/>}
            {option==='monthly' && <img className="donate-imgs" src={Monthly} data-aos="zoom-in"/>}
          </div>
          <div className="donate-styled-text">
            {!option && <h3>Make children happy</h3>}
            {option==='one-time' && <h3>Give a simle on a face</h3>}
            {option==='monthly' && <h3>Enough to provide food for two people each month</h3>}
          </div>
          <hr />
          <div className="donate-payment">
            <h2 className="donate-tittle">YOUR CONTACT DETAILS</h2>
            <Form/>
          </div>
          <div className="donate-info">
            <p data-aos="zoom-in">
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
          <div className="donate-end" data-aos="fade-up"  data-aos-delay="500">
            <p data-aos="zoom-in"  data-aos-delay="1000">
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
