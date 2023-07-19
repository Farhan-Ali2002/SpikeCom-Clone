import React from "react";
function ImageSlide(props) {
  return (
    <div className="slide-image">
    <div className="w-100">
      <img src={props.image} width={"90%"}></img>
    </div>
    </div>
  );
}
export default ImageSlide;
