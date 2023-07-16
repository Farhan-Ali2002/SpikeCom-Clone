import React from "react";
import icon1 from "../images/icon-01.png";
import icon2 from "../images/icon-02.png";
import icon3 from "../images/icon-03.png";
import icon4 from "../images/icon-04.png";
import icon5 from "../images/icon-05.png";
import icon6 from "../images/icon-06.png";
import CardBContainer from "./CardContainer";
function SpikeOffers(params) {
  let cardBData = [
    {
      img: icon1,
      title: "Self-Serve Marketplace",
      desc: "Create your own web-based ad purchasing strategy. Let advertisers easily purchase display ads, native ads, sponsored listings and more.",
    },
    {
      img: icon2,
      title: "API Ad Server",
      desc: "Build a fully customized ad server in weeks not years. Ideal for online retailers, travel booking companies, user generated content, directories, internal promotions and more.",
    },
    {
      img: icon3,
      title: "Email Ad Server",
      desc: "Serve flexible email campaigns and expand your revenue model. Ideal for email marketers, newsletters, community sites, automated transactional emails such as shipping notifications, and more.",
    },
    {
      img: icon4,
      title: "Mobile Ad Server",
      desc: "Serve ads to mobile apps via our JSON API. Ideal for mobile games, travel apps, eCommerce apps, news apps and more.",
    },
    {
      img: icon5,
      title: "Digital Out-of-Home Ad Server",
      desc: "Serve your ads easily to any digital screen. Catch the attention of your out-of-home audience at the right time and place. For example, in a taxi or at a gas station.",
    },
    {
      img: icon6,
      title: "Contextual Management Platform",
      desc: "Segment your inventory into keywords and topics via real-time updates - enabling you to offer targeted ad buys, lift programmatic revenue, track content performance, and more.",
    },
  ];

  return (
    <div className="spike-offers">
      {cardBData.map((data, i) => (
        <CardBContainer
          img={data.img}
          title={data.title}
          desc={data.desc}
          key={i}
        />
      ))}
    </div>
  );
}

export default SpikeOffers;
