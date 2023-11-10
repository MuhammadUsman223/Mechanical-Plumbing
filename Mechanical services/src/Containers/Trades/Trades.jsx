import React from "react";
import "./Trades.css";
import TradesCard from "../../Components/TradesCard/TradesCard";

import Trade1 from "../../assets/Trade1.png";
import Trade2 from "../../assets/Trade2.png";
import Trade3 from "../../assets/Trade3.png";
import Trade4 from "../../assets/Trade4.png";

const Trades = () => {
  return (
    <>
      <div className="Trades">
        <p className="Trades-main-heading">Take a look at our Trades</p>
        <div className="Trades-cards">
          <TradesCard image={Trade1} title="General Requirement" />
          <TradesCard image={Trade2} title="Site Works" />
          <TradesCard image={Trade3} title="Concrete" />
          <TradesCard image={Trade4} title="Masonary" />
        </div>
      </div>
    </>
  );
};

export default Trades;
