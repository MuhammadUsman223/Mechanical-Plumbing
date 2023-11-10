import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <>
      <div className="getstarted">
        <p className="main-heading">Are You Ready To Get Started With Us!</p>
        <div className="heading-para-1">
          <p className="heading">1- Upload you Plans</p>
          <p className="paragraph">
            <a href="#" style={{ color: "#ff7518", fontWeight: "bold" }}>
              Click here
            </a>
            &nbsp;to upload your plans. we accept PDF format and your plans can
            be Bid set, Schematic, Design Development, Construction document, or
            conceptual drawings.
          </p>
        </div>
        <div className="heading-para-2">
          <p className="heading">2- Get a Quote</p>
          <p className="paragraph">
            Quotes will be based on invoice, delivery date, and turnaround time.
          </p>
        </div>
        <div className="heading-para-3">
          <p className="heading">3- Receive Estimate</p>
          <p className="paragraph">
            Estimates will be delivered to you in EXCEL sheets comprising all
            the material and labor pricing with cut reports either in
            MasterFormat or your customized format.
          </p>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
