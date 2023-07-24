import React from "react";
import ImageSlider from "../../../components/image_slider";
import PublisherBoxCarousel from "../../../components/publisherbox_card_carousel";
import imageList2 from "../../../data/imageSlideList2";
import imageList1 from "../../../data/imageSlideList1";

import "./sectionC.css";
function SectionC(params) {
  return (
    <div className="section-C bg-light" id="section-C">
      <div className="container-C">
        <div className="c-top-section">
          <div className="d-flex justify-center">
            <div className="text-center">
              <p className="fs-16 text-muted">Register as a Publisher</p>
              <h2 className="fs-32">
                Join Our <span className="orange">Publisher</span> Network
              </h2>
              <p className="fs-15 text-muted">
                Get Started with SpikeCom & Rent your application's placements
              </p>
            </div>
          </div>
          <div className="">
            <div className="wrapper mt-5 mb-5 ">
              <ImageSlider imageList = {imageList2} />
            </div>
          </div>
        </div>
       
        <PublisherBoxCarousel />

      </div>
    </div>
  );
}
export default SectionC;
