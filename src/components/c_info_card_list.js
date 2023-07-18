import React from "react";
import CInfoCard from "./c_info_card";
import quickmarketlogo from "../images/logo-quick-market.png";
import carrefourlogo from "../images/logo-carrefour.png";

import danubelogo from "../images/logo-danube.png";
// import clicflyerlogo from "../images/logo-clicflyer.png"
import jahezlogo from "../images/logo-jahez.png";
import hungerstationlogo from "../images/logo-hungerstation.png";
import lululogo from "../images/logo-lulu.png";
import pandaclicklogo from "../images/logo-pandaclick.png";
import noonlogo from "../images/logo-noon.png";
import zadlogo from "../images/logo-zad.png";
import jumlatylogo from "../images/logo-jumlaty.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  let CinfoCardData = [
    {
      logo: quickmarketlogo,
      desc: "Quick Market helps create an amazing on-demand grocery experience. One of the world's largest and fastest growing online food delivery and quick commerce platform",
      num1: "+2.5M",
      num2: "+8M",
      num3: "+85K",
      num4: "+7.5M",
    },
    {
      logo: carrefourlogo,
      desc: "One of the largest Supermarket in Middle East & North African regions. It is considered to be top player in 'Brick & Click' E-Commerce channels. It has a growing MOM associated with no less than 95% SL",
      num1: "+1.9M",
      num2: "+17M",
      num3: "+600K",
      num4: "+15M",
    },
    {
      logo: danubelogo,
      desc: "First Grocery Applicaiton in Kingdom of Saudi Arabia. Danube is one of the first retailer in the Kingdom of Saudi Arabia. It provides wide range of high-end assortment of products with high average basket size",
      num1: "+1.5M",
      num2: "+15M",
      num3: "+165K",
      num4: "+4M",
    },
    {
      logo: jahezlogo,
      desc: "Clicflyer is the highest rated & frequently used app in its category. It is making weekly savings easy for it's valuable customers. It offers features including browsing flyers, create shopping list & find your faviorite offers",
      num1: "+127M",
      num2: "+15M",
      num3: "+872K",
      num4: "+6.5M",
    },
    {
      logo: jahezlogo,
      desc: "Jahez in less than two years came on top of food on demands business in Kingdom Saudi Arabia. It serves more than 20,000 restaurants for 4.4 million users each month",
      num1: "+40M",
      num2: "+8M",
      num3: "+4.4M",
      num4: "+14M",
    },
    {
      logo: hungerstationlogo,
      desc: "Hunger Station helps create an amazing on-demand grocery experience. One of the world's largest and fastest growing online food delivery and quick commerce platform",
      num1: "+2.5M",
      num2: "+8M",
      num3: "+85K",
      num4: "+7.5M",
    },
    {
      logo: lululogo,
      desc: "LuLu has always been known as a trend-setter for the retail industry in the region. LuLu targets users from the asian sub-continent by providing imported products to it's customers",
      num1: "+250K",
      num2: "+12M",
      num3: "+100K",
      num4: "+1.5M",
    },
    {
      logo: pandaclicklogo,
      desc: "With PandaClick, the largest grocery chain in Kingdom of Saudi Arabia is a click away. It is massively growing by leveraging on the high traffic of offline stores & converting them to online users across their 200+ stores",
      num1: "+1M",
      num2: "+12M",
      num3: "+150K",
      num4: "+2.6M",
    },
    {
      logo: noonlogo,
      desc: "Ranked #1 in regions app store has experienced growth, popularity in United Arab Emmirates, Kingdom of Saudi Arabia and Egypt. Stay home and order and we will deliver straight to your door step",
      num1: "+11.3M",
      num2: "+18M",
      num3: "+8M",
      num4: "+20M",
    },
    {
      logo: zadlogo,
      desc: "Zad delivery groceries to your door step. Zad came to market to fulfill the aggressive demand on e-grocers especially in Center region and considered one of the top #10 App in Saudi Arabia.",
      num1: "+1M",
      num2: "+12M",
      num3: "+150K",
      num4: "+2.6M",
    },
    {
      logo: jumlatylogo,
      desc: "Jumlaty app is focused on an economy scale business model where you can buy day to day commodities in bulk with slashing prices. World's largest and fastest growing online food delivery and quick commerce platform.",
      num1: "+4.65M",
      num2: "+15M",
      num3: "+20K",
      num4: "+100K",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {CinfoCardData.map((data, i) => (
          <CInfoCard
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

export default Carousel;
