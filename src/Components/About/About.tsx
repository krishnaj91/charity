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
          <h1>CHILDREN EDUCATION</h1>
        </div>
      </div>

      <div className='card-about'>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1>CHILDREN HEALTH</h1>
        </div>
      </div>
      
      <div className='card-about'>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1>CHILDREN WEALTH</h1>
        </div>
      </div>

      <div className='card-about'>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1>CHILDREN WELFARE</h1>
        </div>
      </div>
    </div>
  )
}

export default About