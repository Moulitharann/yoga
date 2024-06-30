import React from "react";
import "../assets/styles/Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faDumbbell,
  faUsers,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "react-awesome-reveal";

const Counter = () => {
  return (
    <section className="counter">
      <Zoom top>
        <div className="containerx">
          <div className="box-container">
            <div className="box" data-aos="fade-up">
              <FontAwesomeIcon icon={faCalendarCheck} className="i" />
              <span>50+</span>
              <h3>Yoga Classes</h3>
            </div>

            <div className="box" data-aos="fade-up">
              <FontAwesomeIcon icon={faUsers} className="i" />
              <span>200+</span>
              <h3>Happy Yogis</h3>
            </div>

            <div className="box" data-aos="fade-up">
              <FontAwesomeIcon icon={faSmile} className="i" />
              <span>500+</span>
              <h3>Positive Reviews</h3>
            </div>

            <div className="box" data-aos="fade-up">
              <FontAwesomeIcon icon={faDumbbell} className="i" />
              <span>30+</span>
              <h3>Workshops</h3>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default Counter;
  