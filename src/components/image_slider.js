import React from "react";
import Slider from "react-slick";
import ImageSlide from "./image_slide";
import imageList1 from "../data/imageSlideList1";
function ImageSlider(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
      };
 const imageList = props.imageList
  return (
    <Slider {...settings }>
      {imageList.map((data, i) => (
        <ImageSlide image={data} />
      ))}
    </Slider>
  );
}
export default ImageSlider;
