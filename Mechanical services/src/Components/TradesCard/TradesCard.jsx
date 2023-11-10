import React from "react";
import "./TradesCard.css";

const TradesCard = ({ image, title }) => {
  return (
    <>
      <div className="T-card">
        <div
          className="T-card-img"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        ></div>
        <div className="T-card-text">{title}</div>
      </div>
    </>
  );
};

export default TradesCard;
