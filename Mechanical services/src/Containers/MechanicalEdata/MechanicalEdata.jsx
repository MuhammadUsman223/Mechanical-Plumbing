import React from "react";
import "./MechanicalEdata.css";

import Mcard1 from "../../assets/Mcard1.png";
import Mcard2 from "../../assets/Mcard2.jpg";
import Mcard3 from "../../assets/Mcard3.png";

import MPEdataCard from "../../Components/MPEdataCard/MPEdataCard";

const MechanicalEdata = () => {
  return (
    <>
      <div className="MEData">
        <p className="MEData-heading">Mechanical Estimation Data</p>
        <div className="MPEcards">
          <MPEdataCard title="HAVC" image={Mcard3} />
          <MPEdataCard
            title="Mechanical Equipment Installation"
            image={Mcard2}
          />
          <MPEdataCard title="Energy Efficiency Upgrades" image={Mcard1} />
        </div>
      </div>
    </>
  );
};

export default MechanicalEdata;
