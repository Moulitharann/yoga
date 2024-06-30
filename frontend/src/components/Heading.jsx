import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../assets/styles/Heading.css";
import images01 from "../images/doctors.png";
import yogaPoseImage from "../images/download/homescreen9.jpeg";
import meditationImage from "../images/download/homescreen6jpeg.webp";
import yogaMatImage from "../images/download/homescreen7.jpeg";
import images04 from "../images/Abortionamico591x531.png";
import images05 from "../images/World-health-dayrafiki591x531.png";
import { Carousel } from "react-bootstrap";

const Heading = () => {
  return (
    <div className="site-header">
      <div className="container-fluid main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              <div className="col-md-5 col-12 main_header_left">
                <section className="left-sec">
                  <h3> We Are Here For Your Care</h3>
                  <h1>
                    {" "}
                    <span style={{ color: "#264653" }}>We</span>
                    <span style={{ color: "#e9c46a" }}> The </span>
                    <span style={{ color: "#f4a261" }}>Best</span>{" "}
                    <span style={{ color: "#e76f51" }}>Yoga Specialist</span>
                  </h1>
                  <p>Yoga is not about self-improvement It's about self-acceptance</p>

                  <Link className="btnlink" to="/Doctor">
                    <Button variant="contained" color="secondary">
                      Make An Appointment
                    </Button>
                  </Link>
                </section>
              </div>
              <div className="col-md-7 col-12 main_header_right">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid"
                      src={yogaPoseImage}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-78 img-fluid"
                      src={yogaMatImage}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid"
                      src={meditationImage}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  
                  
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
