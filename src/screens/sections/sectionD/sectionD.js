import React from "react";
import screen from "../../../images/laptop.png";
import "./sectionD.css"
function SectionD(params) {
  return (
    <div className="section-D" id="section-D">
      <div className="container d-flex align-items-center">
        <div className="D-section-left">
         
          <div className="D-screen-img-container">
            <img src={screen} height="380px" alt="screen"></img>
          </div>
          <div id="imgcontainer-1">
                            <div id="inner" style={{transform:"rotateX(-1.34deg) rotateY(-0.44deg)"}}>
                                <div class="demo-img">
                                    <div class="demo-overlay">

                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
   
        <div className="D-section-right">
          <div className="">
            <h6 className="fs-16 text-muted m-0 mb-2 fw-normal">
              Let your profit <b>grows & enjoy</b>
            </h6>
            <h1 className="fs-38 mt-2">
              Start using <br></br>
              <span className="orange fw-normal">SpikeCom</span>
            </h1>
            <p className="fs-15 mt-3">
              We bring together everything you need to manage, serve and track
              your ads on any platform. SpikeCom's products power ad serving for
              web sites, apps, marketplaces, retailers, email newsletters and
              everything in between.
            </p>

            <p className="fs-16 orange fw-600"> Sign-In Now {"→"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionD;
