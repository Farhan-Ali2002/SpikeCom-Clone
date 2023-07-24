import React from "react";

function StatsContainer(stats) {
    return (
        <div className="counter-box-div">
        <div className="counter-box text-center">
        <div className="counter-box-img">
            <img src={stats.img} height={"30px"} width={"30px"}></img>
        </div>
        <h2 className="orange fw-600"><span className="fs-32">+</span>{stats.num}<span className="fs-32">M</span></h2>
        <h5 className="fs-20">{stats.text}</h5>
        </div>
    </div>
    )
    
}
export default StatsContainer