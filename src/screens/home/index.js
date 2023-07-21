import React from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../../components/image_slider";
import StatsGrid from "../../components/statsGrid";

import SectionA from "../sections/sectionA";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionB from "../sections/sectionB";
import SectionC from "../sections/sectionC";
import SectionD from "../sections/sectionD";
import SectionE from "../sections/sectionE";
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

        <div className="before-section-c">
          <div className="bef-sec-c-top-sec">
            <p className="text1">Simply, We Get Results</p>
            <div className="text2">
              Whatever your needs,{" "}
              <span className="orange">We get it Done</span>
            </div>
          </div>
          <StatsGrid />
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
