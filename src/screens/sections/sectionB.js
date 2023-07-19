import React from "react";
import SpikeOffers from "../../components/spikeoffergrid";
function SectionB(params) {
  return (
    <div className="section-B" id="section-B">
      <div className="wrapper">
        <div className="flex-B">
          <div className="sec-b-top-section">
            <p className="fs-18">What SpikeCom is offering?</p>
            <div className="fs-34 text-center fw-500">
              Explore All the Solutions in the{" "}
              <span className="orange">SpikeCom </span>Platform
            </div>
          </div>
          <SpikeOffers />
        </div>
      </div>
    </div>
  );
}
export default SectionB;
