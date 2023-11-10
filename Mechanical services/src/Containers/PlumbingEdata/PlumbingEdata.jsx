import React from "react";
import "./PlumbingEdata.css";
import MPEdataCard from "../../Components/MPEdataCard/MPEdataCard";
import Pcard1 from "../../assets/Pcard1.jpg";
import Pcard2 from "../../assets/Pcard2.png";
import Pcard3 from "../../assets/Pcard3.png";

const PlumbingEdata = () => {
  return (
    <>
      <div className="PEData">
        <p className="PEData-heading">Mechanical Estimation Data</p>
        <div className="MPEcards">
          <MPEdataCard title="Piping Systems" image={Pcard1} />
          <MPEdataCard title="Drainage and Water Supply" image={Pcard2} />
          <MPEdataCard title="Energy Efficiency Upgrades" image={Pcard3} />
        </div>
      </div>
    </>
  );
};

export default PlumbingEdata;
