import React from "react";
import "./ContactUs.css";
import bgAboutUs from "../../assets/bgAboutUs.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";

const ContactUs = () => {
  return (
    <>
      <div
        className="contactUs"
        style={{
          backgroundImage: `url(${bgAboutUs})`,
          backgroundSize: "cover",
        }}
      >
        <div className="aboutUs-btn-icons-text">
          <div className="aboutUs-btn-icons">
            <button className="aboutUs-btn">UPLOAD YOUR PLANS</button>
            <div className="aboutUs-icons">
              <img src={icon1} alt="icon1" />
              <img src={icon2} alt="icon2" />
            </div>
          </div>

          <p className="aboutUs-text">
            For a quick quote based on your project scope, call us at +1 917 300
            1079 or email us at
            <span className="aboutUs-text-email">
              Dave@procoreestimators.com
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
