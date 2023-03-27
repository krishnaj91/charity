import React, { useEffect } from "react";
import "./about.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import Card1 from '../../assets/about/card1.jpg';
import Card2 from '../../assets/about/card2.jpg';
import Card3 from '../../assets/about/card3.jpg';
import Card4 from '../../assets/about/card4.jpg';
import Volunteer1 from '../../assets/about/volunteer1.avif';
import Volunteer2 from '../../assets/about/volunteer2.avif';
import Volunteer3 from '../../assets/about/volunteer3.avif';

const About = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    AOS.init({
      delay: 50,
      once: true,
      duration: 1000
    })
  })

  return (
    <>
      {/* <center><h1>With your support, we can</h1></center> */}
      <div className="container-about" data-aos="fade-down">
        <div
          className="card-about"
          onClick={() => navigate("/about-education")}
        >
          <div>
            <img src={Card1} className="img-about" />
          </div>
          <div>
            <h1 className="card-title">
              CHILDREN EDUCATION
            </h1>
            <p className="card-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              amet quo cupiditate animi quibusdam natus mollitia, est minus quam
              molestias.
            </p>
          </div>
        </div>

        <div className="card-about" onClick={() => navigate("/about-health")}>
          <div>
            <img src={Card2} className="img-about" />
          </div>
          <div>
            <h1 className="card-title">CHILDREN HEALTH</h1>
            <p className="card-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              amet quo cupiditate animi quibusdam natus mollitia, est minus quam
              molestias.
            </p>
          </div>
        </div>

        <div className="card-about" onClick={() => navigate("/about-shelter")}>
          <div>
            <img src={Card3} className="img-about" />
          </div>
          <div>
            <h1 className="card-title">CHILDREN SHELTER</h1>
            <p className="card-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              amet quo cupiditate animi quibusdam natus mollitia, est minus quam
              molestias.
            </p>
          </div>
        </div>

        <div className="card-about" onClick={() => navigate("/about-welfare")}>
          <div>
            <img src={Card4} className="img-about" />
          </div>
          <div>
            <h1 className="card-title">CHILDREN WELFARE</h1>
            <p className="card-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              amet quo cupiditate animi quibusdam natus mollitia, est minus quam
              molestias.
            </p>
          </div>
        </div>
      </div>

      <div className="volunteer">
        <div className="volunteer-top">
          <div className="volunteer-left" data-aos='fade-right'>
            <h1>OUR <br/> VOLUNTEERS</h1>
          </div>
          <div className="volunteer-right"  data-aos='fade-left'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              fuga mollitia rem ex velit tempora eos asperiores molestiae quam
              adipisci, optio voluptates tenetur laudantium est molestias?
              Debitis odit molestiae praesentium.
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              enim delectus neque unde consequuntur perferendis molestias.
              Impedit, omnis eum! Nesciunt veniam culpa velit voluptatibus neque
              a doloribus ratione ad quia?
            </p>
          </div>
        </div>
      </div>

      <h1 className="volunteer-title" data-aos="fade-down">About Our Volunteers</h1>
      <div className="volunteer-about" data-aos="fade-up">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quas
          perspiciatis harum distinctio sit laudantium.
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          praesentium quod minima inventore. Impedit ut sequi quos veniam
          perferendis itaque sit. Dolorum delectus ut perspiciatis facilis
          dignissimos similique minus exercitationem?
        </p>
        <ul>
          <li>
            - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
          <li>
            - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
          <li>
            - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
          <li>
            - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
          <li>
            - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          aliquid? Eligendi, rem. Non est cumque amet saepe consequatur
          explicabo totam.
        </p>
      </div>

      <h1 className="volunteer-title" data-aos="fade-down">What Our Volunteers do in common?</h1>
      <div className="volunteer-cards" data-aos="fade-up">
        <div className="volunteer-card" data-aos="zoom-in" data-aos-delay="1000">
          <img src={Volunteer1} />
          <h1>They are motivated by helping others</h1>
          <center><button>Read More</button></center>
        </div>

        <div className="volunteer-card" data-aos="zoom-in" data-aos-delay="1000">
          <img src={Volunteer2} />
          <h1>They are local</h1>
          <center><button>Read More</button></center>
        </div>

        <div className="volunteer-card" data-aos="zoom-in" data-aos-delay="1000">
          <img src={Volunteer3} />
          <h1>They are diverse</h1>
          <center><button>Read More</button></center>
        </div>
      </div>

      <div>
        <h1>comments</h1>
        <h2>Happy Donors</h2>
        <p>Reviews</p>
      </div>
    </>
  );
};

export default About;
