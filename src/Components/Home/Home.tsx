import React from 'react'
import './home.css';
import HomeImg from '../../assets/homemain.jpg'

const Home = () => {
  return (
    <div>
      <div className='container-home'>
        <div className='left-home'>
          <img src={HomeImg}/>
        </div>
        <div className='right-home'>
          <div>
            <h1>Your Contribution</h1>
            <h1>HELP THE CHILDREN</h1>
            <p>We do whatever it takes to make sure children don&apos;t just survive
              <br/>but thrive. Helper believes that every child should be able to
              <br/>make their mark on their world and help build a better future.</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Who we are?</h1>
        <h3>Organization You Can Trust</h3>
        <p>Chariy foundation is a volunteer led, non profit organization,
          established in 2010 to serve the underserved needy predominantly in
          Telangana & Andhra Pradesh. UWH is committed towards creating
          long-term social change that produces healthy, well-educated and
          financially-stable individuals and families. We are registered as a
          Society under Andhra Pradesh Societies Registration Act 2001 and are
          legally compliant with 80G, 12A & FCRA.
        </p>
      </div>
      <div>
          <p className="help3">In a world of plenty, where enough food is produced to feed everyone on the planet, hunger should be a thing of the past. However,<b> conflict, climate change, disasters, inequality </b>and – most recently – <b>the COVID-19 pandemic</b> mean one in nine people globally is still going to bed hungry and <b>famine looms for millions</b>.</p>
          <p className="help3">Powered by the passion, dedication and professionalism of our 20,000 staff worldwide, the Charity works in over 120 countries and territories to bring life-saving food to people displaced by conflict and made destitute by disasters, and help individuals and communities find life-changing solutions to the multiple challenges they face in building better futures.</p>
          <p className="help3">We work to enhance nutrition in women and children, support smallholder farmers in improving productivity and reducing losses, help countries and communities prepare for and cope with climate-related shocks, and boost human capital through school feeding programmes.</p>
          <p className="help3">In conflict situations, we bring relief to exhausted populations and use food assistance to build pathways to peace and stability – work for which WFP was awarded the Nobel Peace Prize in 2020.</p>
      </div>

      <div className="home-flex">
          <div className="home-card">
            <img
              className="home-img"
              src="https://www.unitedwayhyderabad.org/images/ourvision_mission_img1.png"
            />

            <h3>OUR VISION</h3>
            <p>
              Create a world where all individuals and families achieve their
              human potential through education, income stability and healthy
              lives.
            </p>
          </div>

          <div className="home-card">
            <img
              className="home-img"
              src="https://www.unitedwayhyderabad.org/images/ourvision_mission_img2.png"
            />

            <h3>OUR MISSION</h3>
            <p>
              Improve lives by mobilizing the caring power of the communities to
              create long-term social change and advance towards common good.
            </p>
          </div>
          <div className="home-card">
            <img
              className="home-img"
              src="https://www.unitedwayhyderabad.org/images/ourvision_mission_img3.png"
            />

            <h3>OUR STRATEGY</h3>
            <p>
              To bring together stakeholders on to a common platform to
              implement sustainable and impactful community development project
            </p>
          </div>
        </div>

    </div>
    
  )
}

export default Home