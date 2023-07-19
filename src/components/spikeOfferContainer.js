import React from "react";
function SpikeOfferContainer(props) {
    console.log("data",props.data);
    return <div className="card-b-container">
        <img className="B-icon" src={props.img}></img>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>

    </div>
}
export default SpikeOfferContainer