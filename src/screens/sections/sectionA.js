import React from "react"
import { useState } from "react"
function SectionA(params) {
const [toggleCard, setTogglerCard] = useState(true)
    return ( <div className="section-A" id="section-A">
    <div className="container-A wrapper d-flex justify-between">
      <div className="wrapper d-flex justify-between">
        <div className="section-A-left">
          <h1 className="A-heading">
            <span className="orange">SpikeCom </span>
            In-App Media Ecosystem
          </h1>
          <p>
            At a moment of truth, SpikeCom connects Advertisers and
            Publishers to Spike their communication with the right target
            audience
          </p>

          <button onClick={()=>setTogglerCard(!toggleCard)} className="btn btn-primary trial-btn mt-16 fs-10">START TRIAL{"→"}</button>
        </div>
        <div className="section-A-right">
          <div className="inner-container-A">
            <div className={ toggleCard? "card-div-A-image toggleCard":"card-div-A-image toggleCardReverse"}>
              <div className="inner-card-heading-right-A">
                <h2>
                  <span className="orange">Spike</span>
                  Com
                </h2>
              </div>
              <div>
                <p className="inner-card-para-right-A">
                  Connecting publishers and advertisers under a single
                  platform
                </p>
              </div>
              {/* 
                      <img className="card-img-A" src={cardImage}>

                      </img> */}
            </div>
            <div className={ !toggleCard? "card-div-A-content toggleCard":"card-div-A-content toggleCardReverse"} >
            <div class="text-center">
                                <p class="text-muted mb-2 f-13 text-uppercase">Welcome To SpikeCom</p>
                                <h5 class="form-dark mb-4">Start Your Free Trial</h5>
                            </div>
                            <form class="registration-form">
                                <div class="d-flex flex-column">
                                    <label for="validationCustom001" class="form-label">Your Full Name <span class="text-primary">*</span></label>
                                    <input type="text" class="form-control" id="fullName" value="" required=""></input>
                                </div>
                                <div class="d-flex flex-column mt-4">
                                    <label for="validationCustom002" class="form-label">Your Email Address <span class="text-primary">*</span></label>
                                    <input type="email" class="form-control" id="emailAddress" value="" required=""></input>
                                </div>
                                <div class="d-flex flex-column mt-4">
                                    <label for="validationCustom005" class="form-label">Your Phone Number <span class="text-primary">*</span></label>
                                    <input type="tel" class="form-control" id="phoneNumber" required=""></input>
                                </div>
                                <div class="d-flex flex-column mt-4">
                                    <label for="accountType" class="form-label">Joining SpikeCom as <span class="text-primary">*</span></label>
                                    <select class="form-control" id="accountType" required="">
                                        <option selected="" disabled="">Select Account Type</option>
                                        <option value="1">Join as Advertiser</option>
                                        <option value="2">Join as Publisher</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-4">Get Started <i class="mdi mdi-telegram ms-2"></i></button>
                            </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="orange-container">
              <div className="wrapper d-flex justify-center align-items-center h-100">
                  <div className="orange-container-desc">
              <p>Everyone's Using SpikeCom. We would love to have you in our list. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti omnis animi, quo perspiciatis dolore veniam laborum repudiandae ipsum quae voluptatum ducimus, sunt saepe.</p>
              </div>
              <div className="orange-container-btn-div">
                  <button className=" orange-container-btn ">READ MORE</button>
              </div>
              </div>
          </div> */}
    <div class="bg-primary py-5" >
      <div class="my-4">
        <div class="container ">
          <div class="wrapper d-flex align-items-center justify-content-start">
            <div class="col-lg-7">
              <div class="text-start">
                <p class="text-light">
                  Everyone's Using SpikeCom. We would love to have you in
                  our list. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Dolores deleniti omnis animi, quo
                  perspiciatis dolore veniam laborum repudiandae ipsum
                  quae voluptatum ducimus, sunt saepe.
                </p>
              </div>
            </div>
            <div class="col-lg-3 ">
              <div class="text-lg-end text-start orange-container-btn-div">
                <button class="btn orange-container-btn">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
export default SectionA