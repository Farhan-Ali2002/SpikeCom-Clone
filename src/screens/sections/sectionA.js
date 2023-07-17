function SectionA(params) {
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

          <button className="sign-in-btn mt-16">Start Trial</button>
        </div>
        <div className="section-A-right">
          <div className="inner-container-A">
            <div className="card-div-A-right">
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
    <div class="bg-primary py-5">
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