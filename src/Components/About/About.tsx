import React from 'react'
import './about.css'
import Card from '../../assets/bg.jpg'

const About = () => {
  return (
    <div className='container-about'>

      <div className='card-about'>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1 className='card-title'>CHILDREN <span>EDUCATION</span></h1>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet quo cupiditate animi quibusdam natus mollitia, est minus quam molestias.</p>
        </div>
      </div>

      <div className='card-about'>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1 className='card-title'>CHILDREN HEALTH</h1>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet quo cupiditate animi quibusdam natus mollitia, est minus quam molestias.</p>
        </div>
      </div>
      
      <div className='card-about'>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1 className='card-title'>CHILDREN WEALTH</h1>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet quo cupiditate animi quibusdam natus mollitia, est minus quam molestias.</p>
        </div>
      </div>

      <div className='card-about'>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1 className='card-title'>CHILDREN WELFARE</h1>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet quo cupiditate animi quibusdam natus mollitia, est minus quam molestias.</p>
        </div>
      </div>
    </div>
  )
}

export default About