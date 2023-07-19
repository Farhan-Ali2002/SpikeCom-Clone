import React from "react";
import statsData from "../data/statsDataList";

import StatsContainer from "./statsContainer";
function StatsGrid(params) {
 
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
