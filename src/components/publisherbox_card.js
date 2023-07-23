import React from "react";
import icon12 from "../images/icon-12.png";

function PublisherBoxCard(props) {
  return (
    <div className="publisherbox-outer-card">
      <div className="publisherbox-top p-12">
        <div className="c-publisher-logo d-flex justify-center">
          <img className="" src={props.logo}></img>
        </div>
        <p className="mt-3 fs-15 text-light ">{props.desc}</p>
      </div>
      <div className=" publisherbox-bottom mt-4">
        <div className="d-flex flex-wrap justify-between">
          <div className="publisherbox-inner-card mb-3">
            <div className="">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-24">{props.num1}</h4>
            <p className="">Monthly Impressions</p>
          </div>

          <div className="publisherbox-inner-card mb-3">
            <div className="">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-24">{props.num2}</h4>
            <p className="">Average Sessions</p>
          </div>
          <div className="publisherbox-inner-card">
            <div className="">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-24">{props.num3}</h4>
            <p className="">Monthly Users</p>
          </div>
          <div className="publisherbox-inner-card ">
            <div className="">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-24">{props.num4}</h4>
            <p className="">App Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PublisherBoxCard;
