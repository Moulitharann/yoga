import React from "react";
import { Link } from "react-router-dom";
// import yogaImage from "../images/yoga_image.png";  // Replace with your actual image path
import "../assets/styles/MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <div style={{ paddingRight: "150px", paddingLeft: "150px" }}>
      <section className="make-appointment mt-5">
        <div className="appointment_container">
          <div className="row">
            <div className="col-md-5 d-none d-md-block">
              {/* <img src={yogaImage} alt="Yoga Practice" /> */}
            </div>
            <div className="col-md-7 text-white py-5 front">
              <h5 className="text-uppercase my-2">Join Us</h5>
              <h1 className="my-4">
                Start Your Yoga Journey <br /> with Us
              </h1>
              <p>
                Experience the benefits of yoga with our expert instructors. Whether you're a beginner or an experienced yogi, we have classes tailored for you.
              </p>
              <Link
                variant="contained"
                to="/yogaproduct"
                className=" contact1-form-btn1"
              >
                Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
