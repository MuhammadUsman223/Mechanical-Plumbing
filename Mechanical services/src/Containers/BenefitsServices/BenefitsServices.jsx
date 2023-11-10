import React from "react";
import "./BenefitsServices.css";
import BSImg from "../../assets/BSImg.png";

const BenefitsServices = () => {
  return (
    <>
      <div className="benefits-services-image">
        <div>
          <div className="benefits">
            <p className="benefits-heading">
              Benefits of Mechanical Estimating
            </p>
            <div className="benefits-list">
              <ul>
                <li>Getting access to the industry standards insights.</li>
                <li>Understanding the internal project cost.</li>
                <li>Getting the most reliable mechanical estimates.</li>
                <li>Increasing the probability of high profit.</li>
                <li>Boosting their win-bid ratio.</li>
                <li>
                  Streamlining their project activities with more confidence.
                </li>
                <li>
                  Identifying the errors and flaws in their mechanical project.
                </li>
                <li>
                  Mitigating the potential risk while saving their time and
                  money.
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <p className="services-heading">Our Plumbing Estimating Services</p>
            <div className="services-lists">
              <div className="services-list-section1">
                <ul>
                  <li>Cold Water Pipes</li>
                  <li>Hot Water Pipes</li>
                  <li>Vent Pipes</li>
                  <li> Gas Pipes </li>
                  <li>Sanitary Pipes</li>
                  <li>Underground Pipes</li>
                  <li>Pipe Fittings</li>
                </ul>
              </div>
              <div className="services-list-section2">
                <ul>
                  <li> Pipe Concealment</li>
                  <li>Insulations</li>
                  <li>Valves</li>
                  <li>Hangers</li>
                  <li>Struts</li>
                  <li>Supports</li>
                </ul>
              </div>
            </div>
            <ul className="services-list"></ul>
          </div>
        </div>
        <div className="benefits-services-sideimage">
          <img src={BSImg} alt="BSImg" />
        </div>
      </div>
    </>
  );
};

export default BenefitsServices;
