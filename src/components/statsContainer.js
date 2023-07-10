import React from "react";

function StatsContainer(stats) {
    return (
        <div className="bef-c-div">
        <div className="bef-c-img">
            <img src={stats.img}></img>
        </div>
        <h2 className="orange">{stats.num}</h2>
        <h5>{stats.text}</h5>
    </div>
    )
    
}
export default StatsContainer