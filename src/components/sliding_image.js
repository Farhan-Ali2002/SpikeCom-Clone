import React from "react";
function SlidingImage(props) {
  return (
    <div className="slide-image">
      <img src={props.image}></img>
    </div>
  );
}
export default SlidingImage;
