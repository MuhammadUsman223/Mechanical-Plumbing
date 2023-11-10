import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/footerlogo.png";
import location from "../../assets/location.png";
import whatsapp from "../../assets/whatsapp.png";
import email from "../../assets/email.png";
import R from "../../assets/R.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-columns">
          <div className="footer-logo-para">
            <div className="footer-logo">
              <img src={footerlogo} alt="footerlogo" />
            </div>
            <p className="footer-para">
              <span className="footer-para-start">PROCORE Estimators</span>
              &nbsp; are an industry leader in providing accurate and reliable
              construction cost estimation services. We specialize in Quantity
              and Material Takeoff, Scheduling, and Planning for your project
              management needs. Our experts use advanced softwares and we pay
              close attention to detail to ensure accurate estimates. We provide
              you with accurate information in a timely manner, enabling you to
              make informed decisions and execute projects efficiently. Rely on
              PROCORE Estimators for precise and prompt cost estimation in
              construction.
            </p>
          </div>
          <div>
            <h6>Naviagation</h6>
            <ul className="footer-naviagation">
              <li>Service</li>
              <li>About Us</li>
              <li>Payment</li>
              <li>Sample</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h5>Contact</h5>
            <div className="footer-contact-address">
              <div className="footer-conatct-address-icon">
                <img src={location} alt="location" />
              </div>
              <p className="footer-contact-address-text">
                2505 Bedford Ave, Brooklyn, NY 11226, USA
              </p>
            </div>
            <div className="footer-conatct-number">
              <div className="footer-conatct-number-icon">
                <img src={whatsapp} alt="whatsapp" />
              </div>
              <p className="footer-contact-number-text">+1 917 300 1079</p>
            </div>
            <div className="footer-conatct-email">
              <div className="footer-conatct-email-icon">
                <img src={email} alt="email" />
              </div>
              <p className="footer-contact-email-text">
                Dave@procoreestimators.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="footer-copyright-text">
            Copyright © 2023 Procore Estimators Designed By &nbsp;
            <span className="footer-copyright-MF">MF</span>&nbsp;
            <span className="footer-copyright-Bzone">Bzone</span>
          </p>
          <img src={R} alt="R" className="r" />
        </div>
      </div>
    </>
  );
};

export default Footer;
