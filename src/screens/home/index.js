import React from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../../components/image_slider";
import StatsGrid from "../../components/statsGrid";

import SectionA from "../sections/sectionA/sectionA";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionB from "../sections/sectionB/sectionB";
import SectionC from "../sections/sectionC/sectionC";
import SectionD from "../sections/sectionD/sectionD";
import SectionE from "../sections/sectionE/sectionE";
import imageList1 from "../../data/imageSlideList1";
function Home(params) {
  return (
    <div>
      <div className="">
        <div className="header-and-A">
          <Header />
          <SectionA />
        </div>
        <div className="wrapper mt-4">
          <div className="clients">
            <ImageSlider imageList={imageList1} />
          </div>
        </div>

        <SectionB />

        <div className="counter pt-5 pb-5">
          <div className="wrapper">
          <div className="d-flex justify-center">
            <div className="col-lg-6 text-center">
            <p className="text1 text-muted fs-15">Simply, We Get Results</p>
            <h2 className="text2 fs-32">
              Whatever your needs,{" "}
              <span className="orange">We get it Done</span>
            </h2>
            </div>
          </div>
          <StatsGrid />
          </div>
        </div>
        <SectionC />
        <SectionD />
        <SectionE />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
