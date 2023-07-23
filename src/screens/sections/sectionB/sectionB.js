import React from "react";
import "./sectionB.css";
import SpikeOffers from "../../../components/spikeoffergrid";
function SectionB(params) {
  return (
    <div className="section-B" id="section-B">
      <div className="wrapper">
        
          <div className="text-center">
            <p className="fs-18">What SpikeCom is offering?</p>
            <div className="fs-34  fw-500">
              Explore All the Solutions in the{" "}
              <span className="orange">SpikeCom </span>Platform
            </div>
          </div>
          <SpikeOffers />
        
      </div>
    </div>
  );
}
export default SectionB;
