import React from "react";
import Button from "@material-ui/core/Button";
import images01 from "../images/icon/blood_donation.png";  // Update these images to be yoga-related
import images02 from "../images/icon/medical-kit.png";
import images03 from "../images/icon/AdobeStock_207418957_Preview-removebg-preview.png";
import images04 from "../images/icon/open.png";
import images05 from "../images/icon/chat.png";
import images06 from "../images/icon/appointment.png";
import "../assets/styles/Features.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div>
      <section id="home-icon" className="pb-3 text-center">
        <div className="content pb-5"></div>
        <div className="containerx text-center">
          <div className="row align-self-center">
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-1" className="box col-md-4 ">
                {/* <img style={{ height: "80px" }} src={images02} alt="Yoga Classes" /> */}
                <h3 className="my-2">Yoga Classes</h3>
                <p className="lead mb-3">
                  Join our expert-led yoga classes for all levels. Enhance your flexibility, strength, and peace of mind.
                </p>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-2" className="box  col-md-4">
                {/* <img style={{ height: "80px" }} src={images04} alt="Opening Hours" /> */}
                <h3 className="my-2">Opening Hours</h3>
                <p className="lead mb-3">
                  We offer yoga sessions throughout the week. Check our schedule for class timings and availability.
                </p>
                <Button variant="contained" color="secondary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-3" className="box col-md-4 ">
                {/* <img style={{ height: "80px" }} src={images01} alt="Meditation" /> */}
                <h3 className="my-2">Meditation</h3>
                <p className="lead mb-3">
                  Discover the benefits of meditation for stress relief and mental clarity in our guided sessions.
                </p>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-4" className="box col-md-4 ">
                {/* <img style={{ height: "80px" }} src={images05} alt="Yoga for Beginners" /> */}
                <h3 className="my-2">Yoga for Beginners</h3>
                <p className="lead mb-3">
                  New to yoga? Start with our beginner-friendly classes designed to help you build a solid foundation.
                </p>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-5" className="box col-md-4 ">
                {/* <img style={{ height: "80px" }} src={images06} alt="Private Sessions" /> */}
                <h3 className="my-2">Private Sessions</h3>
                <p className="lead mb-3">
                  Enjoy personalized attention with our one-on-one yoga sessions tailored to your needs and goals.
                </p>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-6" className="box  col-md-4">
                {/* <img style={{ height: "80px" }} src={images03} alt="24/7 Yoga Support" /> */}
                <h3 className="my-2">24/7 Yoga Support</h3>
                <p className="lead mb-3">
                  Get access to yoga resources and support anytime. Reach out to our team for guidance and advice.
                </p>
                <Button variant="contained" color="primary">
                  <Link className="btnlink" to="/contactus">
                    Contact Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
