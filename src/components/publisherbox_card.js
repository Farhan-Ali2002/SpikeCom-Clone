import React from "react";
import icon12 from "../images/icon-12.png";

function PublisherBoxCard(props) {
  return (
    <div className="publisherbox-outer-card">
      <div className="publisherbox-top p-12">
        <div className="c-publisher-logo d-flex justify-center">
          <img className="mb-2" src={props.logo}></img>
        </div>
        <p className="mt-3 fs-15 text-light">{props.desc}</p>
      </div>
      <div className=" publisherbox-bottom mt-4">
        <div className="d-flex flex-wrap justify-between">
          <div className="publisherbox-inner-card mb-3 p-4">
            <div className="mb-2">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-24 fw-600">{props.num1}</h4>
            <p className="fs-15">Monthly Impressions</p>
          </div>

          <div className="publisherbox-inner-card mb-3 p-4">
            <div className="mb-2">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-24 fw-600">{props.num2}</h4>
            <p className="fs-15">Average Sessions</p>
          </div>
          <div className="publisherbox-inner-card p-4">
            <div className="">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-24 fw-600">{props.num3}</h4>
            <p className="fs-15">Monthly Users</p>
          </div>
          <div className="publisherbox-inner-card p-4">
            <div className="mb-2">
              <img src={icon12}></img>
            </div>
            <h4 className="fs-24 fw-600">{props.num4}</h4>
            <p className="fs-15">App Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PublisherBoxCard;
