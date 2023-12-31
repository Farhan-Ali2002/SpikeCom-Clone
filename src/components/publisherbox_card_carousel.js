import React from "react";

import PublisherBoxCard from "./publisherbox_card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CinfoCardData from "../data/publisherboxList";
function PublisherBoxCarousel() {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
 
    autoplaySpeed: 2000,
    responsive: [
      // {
      //     breakpoint: 1724,
      //     settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         // dots: true
      //     }
      // },
      // {
      //     breakpoint: 1250,
      //     settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         infinite: true,
      //         // dots: true
      //     }
      // },
      {
          breakpoint: 900,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]



  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {CinfoCardData.map((data, i) => (
          <PublisherBoxCard
            img={data.img}
            logo={data.logo}
            desc={data.desc}
            num1={data.num1}
            num2={data.num2}
            num3={data.num3}
            num4={data.num4}
            key={i}
          />
        ))}
      </Slider>
    </div>
  );
}

export default PublisherBoxCarousel;
