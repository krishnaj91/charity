import React from "react";
import "./home.css";
import HomeImg from "../../assets/homemain.jpg";
import { Box, Button, Modal, Typography } from "@mui/material";
import Demo from "../../assets/bg.jpg";
import { Carousel } from "react-carousel-minimal";
import Form from "../Form/Form";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = [
    { image: [HomeImg] },
    { image: [HomeImg] },
    { image: [HomeImg] },
    { image: [HomeImg] },

    // {
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyufviOAXqhmPCbBElkY2ZXok_N5n0FHQTeBmdV3dGEtHC0pvdTZiQF-XsGuacn96bZsg&usqp=CAU",
    // },
    // {
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyufviOAXqhmPCbBElkY2ZXok_N5n0FHQTeBmdV3dGEtHC0pvdTZiQF-XsGuacn96bZsg&usqp=CAU",
    // },
    // {
    //   image: "https://media.istockphoto.com/vectors/healthy-lifestyle-and-selfcare-concept-vector-id1208604845?s=170667a",
    // },
    // {
    //   image: "https://wallpaperaccess.com/full/307193.jpg",
    // }
  ];

  return (
    <div>
      <div className="container-home">
        <div className="left-home">
          {/* <img src={HomeImg}/> */}
          <Carousel
            data={data}
            time={4500}
            slideNumber={true}
            automatic={true}
            dots={true}
            width="100%"
            slideImageFit="cover"
            showNavBtn={false}
            slideBackgroundColor="transparent"
            style={{
              backgroundColor: "transparent",
              transition: "all 2s ease",
            }}
          />
        </div>
        <div className="right-home">
          <div>
            <h1>Your Contribution</h1>
            <h1>HELP THE CHILDREN</h1>
            <p>
              We do whatever it takes to make sure children don&apos;t just
              survive
              <br />
              but thrive. Helper believes that every child should be able to
              <br />
              make their mark on their world and help build a better future.
            </p>
          </div>
          <Button variant="contained" color="success" onClick={handleOpen}>
            Contribute now
          </Button>
        </div>
      </div>
      <div className="home-info">
        <div>
          <h2>Who we are?</h2>
          <h2>Organization You Can Trust</h2>
          <p>
            Chariy foundation is a volunteer led, non profit organization,
            established in 2010 to serve the underserved needy predominantly in
            Telangana & Andhra Pradesh. UWH is committed towards creating
            long-term social change that produces healthy, well-educated and
            financially-stable individuals and families. We are registered as a
            Society under Andhra Pradesh Societies Registration Act 2001 and are
            legally compliant with 80G, 12A & FCRA.
          </p>
          <p>
            In a world of plenty, where enough food is produced to feed everyone
            on the planet, hunger should be a thing of the past. However,
            <b> conflict, climate change, disasters, inequality </b>and – most
            recently – <b>the COVID-19 pandemic</b> mean one in nine people
            globally is still going to bed hungry and{" "}
            <b>famine looms for millions</b>.
          </p>
          <p>
            Powered by the passion, dedication and professionalism of our 20,000
            staff worldwide, the Charity works in over 120 countries and
            territories to bring life-saving food to people displaced by
            conflict and made destitute by disasters, and help individuals and
            communities find life-changing solutions to the multiple challenges
            they face in building better futures.
          </p>
          <p>
            We work to enhance nutrition in women and children, support
            smallholder farmers in improving productivity and reducing losses,
            help countries and communities prepare for and cope with
            climate-related shocks, and boost human capital through school
            feeding programmes.
          </p>
          <p>
            In conflict situations, we bring relief to exhausted populations and
            use food assistance to build pathways to peace and stability – work
            for which WFP was awarded the Nobel Peace Prize in 2020.
          </p>
        </div>
      </div>

      {/* Awards */}
      <div className="awards-bg">
        <h1>Awards</h1>
        <div className="awards">
          <div>
            <img src={HomeImg} alt="" />
            <h1>award1</h1>
            <h2>sub</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              aliquam excepturi omnis adipisci eaque, atque quam animi quidem
              dicta porro ut iste, quo, iure maxime rerum rem in totam
              recusandae?
            </p>
          </div>

          <div>
            <img src={HomeImg} alt="" />
            <h1>award1</h1>
            <h2>sub</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              autem quis quos accusantium aut ea animi perferendis ab non!
              Commodi dolorum animi illum? Neque illo architecto ipsum eligendi
              earum doloribus?
            </p>
          </div>

          <div>
            <img src={HomeImg} alt="" />
            <h1>award1</h1>
            <h2>sub</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              laudantium nobis ut illo voluptatum labore similique laboriosam
              iusto velit. Laudantium culpa ipsa ullam error rerum quibusdam
              velit ipsam harum numquam.
            </p>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="impact-bg">
        <h1>Our Impacts</h1>
        <div className="impact">
          <div>
            <img src={Demo} />
            <h1>story 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis porro autem corporis perferendis. Illum repellat
              quisquam sequi molestias reiciendis blanditiis ullam doloremque
              recusandae at, fuga, voluptate dicta pariatur eligendi quae?
            </p>
          </div>
          <div>
            <img src={Demo} />
            <h1>story 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis porro autem corporis perferendis. Illum repellat
              quisquam sequi molestias reiciendis blanditiis ullam doloremque
              recusandae at, fuga, voluptate dicta pariatur eligendi quae?
            </p>
          </div>
          <div>
            <img src={Demo} />
            <h1>story 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis porro autem corporis perferendis. Illum repellat
              quisquam sequi molestias reiciendis blanditiis ullam doloremque
              recusandae at, fuga, voluptate dicta pariatur eligendi quae?
            </p>
          </div>
          <div>
            <img src={Demo} />
            <h1>story 4</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis porro autem corporis perferendis. Illum repellat
              quisquam sequi molestias reiciendis blanditiis ullam doloremque
              recusandae at, fuga, voluptate dicta pariatur eligendi quae?
            </p>
          </div>
        </div>
      </div>

      {/*  */}
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
            To bring together stakeholders on to a common platform to implement
            sustainable and impactful community development project
          </p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form/>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
