import React from "react";
import Slider from "react-slick";
import SlidingImage from "./sliding_image";
import sadia from "../images/sadia.png";
import sadafko from "../images/sadafko.png";
import safi from "../images/safi.png";
function SlidingImageList1(params) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
  let imageList = [
    sadia,
    sadafko,
    safi,
    sadafko,
    safi,
    sadia,
    sadia,
    
    sadafko,
    safi,
    sadia,
    sadafko,
    safi,
    sadia,
    sadafko,
    safi,
  ];
  return (
    <Slider {...settings}>
      {imageList.map((data, i) => (
        <SlidingImage image={data} />
      ))}
    </Slider>
  );
}
export default SlidingImageList1;
