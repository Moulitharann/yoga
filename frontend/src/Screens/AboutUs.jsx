import React from "react";
import { Link } from "react-router-dom";
import yogaImage from "../images/Group 140.png";import "../assets/styles/aboutus.css";

const AboutUs = () => {
  return (
    <section id="about" className="d-flex align-item-center aboutcls">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Welcome to Our Yogic's Space <br />
                  <strong className="brand-name "> Zens</strong>
                </h1>
                <h2 className="my-2">
                  At Zen Harmony, we are a passionate team of yoga instructors and wellness experts dedicated to guiding you on your journey to balance and serenity. Our mission is to offer a sanctuary where you can explore the physical and mental benefits of yoga in a supportive and peaceful environment.
                  <br /> <br />
                  Our studio is not just a place to practice yoga; it’s a community where you can connect with like-minded individuals and deepen your practice. Whether you are a beginner or an experienced yogi, we offer a variety of classes and workshops designed to meet your needs and help you achieve your personal wellness goals.
                  <br /> <br />
                  Join us and discover how yoga can transform your life. 
                </h2>
                <div className="mt-3">
                  <Link to="/classes" className="btn-get-started">
                    Explore Our Classes
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 about-img">
                <img
                  src={yogaImage}
                  style={{ height: "82vh" }}
                  className="img-fluid animated"
                  alt="Yoga studio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
