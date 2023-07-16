import React from "react";
import icon1 from "../images/icon-07.png";
import icon2 from "../images/icon-08.png";
import icon3 from "../images/icon-09.png";
import icon4 from "../images/icon-10.png";
import icon5 from "../images/icon-11.png";

import StatsContainer from "./statsContainer";
function StatsGrid(params) {
  let statsData = [
    { img: icon1, num: "20", text: "Reach" },
    { img: icon2, num: "73", text: "App Install" },
    { img: icon3, num: "192", text: "Impressions" },
    { img: icon4, num: "17", text: "Average Session" },
    { img: icon5, num: "10", text: "No of Apps" },
  ];

  return (
    <div className="stats wrapper">
      {statsData.map((data, i) => (
        <StatsContainer
          img={data.img}
          num={data.num}
          text={data.text}
          key={i}
        />
      ))}
    </div>
  );
}

export default StatsGrid;
