import React from "react";
import Carousel from "react-elastic-carousel";
import { Item } from "../utils/chat.styled.js";
import "../assets/styles/Service.css";
import yogaPoseImage from "../images/download/service1.png";
import meditationImage from "../images/download/service2.png";
import yogaMatImage from "../images/download/service3.png";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Service = () => {
  return (
    <div style={{ paddingLeft: "100px", paddingRight: "100px", paddingTop:"40px" }}>
      <h1 style={{ paddingTop: "30px", textAlign: "center" }}>
        Yoga Services We Offer
      </h1>
      <div className="service_container">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div className="text-center" style={{ color: "black" }}>
              <img
                style={{ height: "60px" }}
                src={yogaPoseImage}
                className="img-fluid"
                alt="Yoga Pose"
              />
              <h5 className="mt-3 mb-3">Yoga Classes</h5>
              <p className="text-secondary">
                Join our yoga classes designed for all levels to improve flexibility, strength, and relaxation.
              </p>
            </div>
          </Item>
          <Item>
            <div className="text-center" style={{ color: "black" }}>
              <img
                style={{ height: "60px" }}
                src={meditationImage}
                className="img-fluid"
                alt="Meditation"
              />
              <h5 className="mt-3 mb-3">Meditation Sessions</h5>
              <p className="text-secondary">
                Explore guided meditation sessions to find inner peace and enhance mindfulness.
              </p>
            </div>
          </Item>
          <Item>
            <div className="text-center" style={{ color: "black" }}>
              <img
                style={{ height: "60px" }}
                src={yogaMatImage}
                className="img-fluid"
                alt="Yoga Mat"
              />
              <h5 className="mt-3 mb-3">Yoga Workshops</h5>
              <p className="text-secondary">
                Participate in our workshops to dive deeper into yoga techniques and philosophy.
              </p>
            </div>
          </Item>
         
          
        </Carousel>
      </div>
    </div>
  );
};

export default Service;
