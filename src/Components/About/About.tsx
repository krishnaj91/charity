import React from "react";
import "./about.css";
import Card from "../../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <center><h1>With your support, we can</h1></center> */}
      <div className="container-about">
        <div
          className="card-about"
          onClick={() => navigate("/about-education")}
        >
          <div>
            <img src={Card} className="img-about" />
          </div>
          <div>
            <h1 className="card-title">
              CHILDREN <span>EDUCATION</span>
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
            <img src={Card} className="img-about" />
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
            <img src={Card} className="img-about" />
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
            <img src={Card} className="img-about" />
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
          <div className="volunteer-left">
            <h1>OUR <br/> VOLUNTEERS</h1>
          </div>
          <div className="volunteer-right">
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

      <h1 className="volunteer-title">About Our Volunteers</h1>
      <div className="volunteer-about">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            quas
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          aliquid? Eligendi, rem. Non est cumque amet saepe consequatur
          explicabo totam.
        </p>
      </div>

      <h1 className="volunteer-title">What Our Volunteers do in common?</h1>
      <div className="volunteer-cards">
        <div className="volunteer-card">
          <img src={Card} />
          <h1>They are motivated by helping others</h1>
          <center><button>Read More</button></center>
        </div>

        <div className="volunteer-card">
          <img src={Card} />
          <h1>They are local</h1>
          <center><button>Read More</button></center>
        </div>

        <div className="volunteer-card">
          <img src={Card} />
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
