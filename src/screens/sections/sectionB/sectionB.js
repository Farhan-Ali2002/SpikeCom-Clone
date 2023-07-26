import React from "react";
import "./sectionB.css";
import SpikeOffers from "../../../components/spikeoffergrid";
function SectionB(params) {
  return (
    <div className="section-B" id="section-B">
      <div className="wrapper">
        
          <div className=" d-flex justify-center">
            <div className="text-center col-lg-6">
            <p className="fs-16 text-muted">What SpikeCom is offering?</p>
            <h2 className="fs-32 fw-500 text-center">
              Explore All the Solutions in the{" "}
              <span className="orange">SpikeCom </span>Platform
            </h2>
            </div>
          </div>
          <SpikeOffers />
        
      </div>
    </div>
  );
}
export default SectionB;
