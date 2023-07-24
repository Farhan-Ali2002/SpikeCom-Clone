import React from "react";
function SpikeOfferContainer(props) {
    console.log("data",props.data);
    return <div className="cardB-container">
        <img className="B-icon" src={props.img}></img>
        <h5 className="fs-20 fw-600">{props.title}</h5>
        <p className="fs-15">{props.desc}</p>

    </div>
}
export default SpikeOfferContainer