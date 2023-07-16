import React from "react";
import icon12 from "../images/icon-12.png";

function CInfoCard(props) {
  return (
    <div className="sec-c-outer-card">
      <div className="c-bottom-inner-sec1 p-12">
        <div className="c-publisher-logo d-flex justify-center">
          <img className="" src={props.logo}></img>
        </div>
        <p className="mt-3 fs-18 text-light ">{props.desc}</p>
      </div>
      <div className="c-bottom-inner-sec2 mt-4">
        <div className="d-flex flex-wrap justify-between">
          <div className="sec-c-inner-card mb-3">
            <div className="sec-inner-card-img">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-28">{props.num1}</h4>
            <p className="">Monthly Impressions</p>
          </div>

          <div className="sec-c-inner-card mb-3">
            <div className="sec-inner-card-img">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-28">{props.num2}</h4>
            <p className="">Average Sessions</p>
          </div>
          <div className="sec-c-inner-card">
            <div className="sec-inner-card-img">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-28">{props.num3}</h4>
            <p className="">Monthly Users</p>
          </div>
          <div className="sec-c-inner-card ">
            <div className="sec-inner-card-img">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-28">{props.num4}</h4>
            <p className="">App Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CInfoCard;
