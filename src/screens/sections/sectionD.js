import React from "react";
import screen from "../../images/laptop.png";
function SectionD(params) {
  return (
    <div className="section-D" id="section-D">
      <div className="container-D wrapper d-flex justify-center">
        <div className="D-section-left d-flex justify-center">
          <div className="D-screen-img-container">
            <img src={screen} height="380px" alt="screen"></img>
          </div>
        </div>
        <div className="D-section-right">
          <div className=" w-80">
            <h6 className="fs-18 m-0 mb-2 fw-normal">
              Let your profit <b>grows & enjoy</b>
            </h6>
            <h1 className="fs-38 mt-2">
              Start using <br></br>
              <span className="orange fw-normal">SpikeCom</span>
            </h1>
            <p className="fs-18 mt-3">
              We bring together everything you need to manage, serve and track
              your ads on any platform. SpikeCom's products power ad serving for
              web sites, apps, marketplaces, retailers, email newsletters and
              everything in between.
            </p>

            <p className="fs-22 orange">Sign In Now {"→"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionD;
