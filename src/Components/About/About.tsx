import React from 'react'
import './about.css'
import Card from '../../assets/bg.jpg'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <>
    <h1>With your support, we can</h1>
    <div className='container-about'>

      <div className='card-about' onClick={()=>navigate('/about-education')}>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1 className='card-title'>CHILDREN <span>EDUCATION</span></h1>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet quo cupiditate animi quibusdam natus mollitia, est minus quam molestias.</p>
        </div>
      </div>

      <div className='card-about' onClick={()=>navigate('/about-health')}>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1 className='card-title'>CHILDREN HEALTH</h1>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet quo cupiditate animi quibusdam natus mollitia, est minus quam molestias.</p>
        </div>
      </div>
      
      <div className='card-about' onClick={()=>navigate('/about-shelter')}>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1 className='card-title'>CHILDREN SHELTER</h1>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet quo cupiditate animi quibusdam natus mollitia, est minus quam molestias.</p>
        </div>
      </div>

      <div className='card-about' onClick={()=>navigate('/about-welfare')}>
        <div>
          <img src={Card} className='img-about'/>
        </div>
        <div>
          <h1 className='card-title'>CHILDREN WELFARE</h1>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet quo cupiditate animi quibusdam natus mollitia, est minus quam molestias.</p>
        </div>
      </div>
    </div>
    <div>
      <h1>VOLUNTEERS</h1>
      <p>Our Worker</p>
      <h2>Card 1</h2>
      <h2>Card 2</h2>
      <h2>Card 3</h2>
      <h2>Card 4</h2>
    </div>
    <div>
      <h1>comments</h1>
      <h2>Happy Donors</h2>
      <p>Reviews</p>
    </div>
    </>
  )
}

export default About