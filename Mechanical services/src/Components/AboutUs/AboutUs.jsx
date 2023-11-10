import React from "react";
import "./AboutUs.css";
import whatsappLogo from "../../assets/WhatsappLogo.png";
import emailLogo from "../../assets/EmailLogo.png";
import facebookLogo from "../../assets/FacebookLogo.png";
import linkedinLogo from "../../assets/LinkedinLogo.png";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <div className="aboutUs-time-offer">
          <p className="aboutUs-time-text">TURNAROUND TIME 24-48 HOURS!</p>
          <p className="aboutUs-offer-text">Affordable Estimate (30% off) </p>
        </div>
        <div className="aboutUs-number-email-logoes">
          <div className="aboutUs-number-email">
            <div className="aboutUs-number-logo">
              <img
                className="aboutUs-nlogo"
                src={whatsappLogo}
                alt="whatsappLogo"
              />
              <p className="aboutUs-number">+1 917 300 1079</p>
            </div>
            <div className="aboutUs-email-logo">
              <img className="aboutUs-elogo" src={emailLogo} alt="emailLogo" />

              <p className="aboutUs-email">Dave@procoreestimators.com</p>
            </div>
          </div>

          <div className="facebook-linkedin">
            <img
              className="aboutUs-nlogo"
              src={facebookLogo}
              alt="facebookLogo"
            />
            <img
              className="aboutUs-nlogo"
              src={linkedinLogo}
              alt="linkedinLogo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
