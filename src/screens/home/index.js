import React from "react";
import './index.css'
import screen from "../../images/laptop.png"
// import cardImage from "../../images/card-image.png"
// import CardBContainer from "../../components/CardContainer";
import SpikeOffers from "../../components/spikeoffergrid";
import StatsGrid from "../../components/statsGrid";
import quickmarketlogo from '../../images/logo-quick-market.png'
import icon12 from '../../images/icon-12.png'
function Home(params) {

     return (
        <div className="home">
            
                <div className="section-A">

                <div className="container-A">
                    <div className="row">
                      
                        <div className="section-A-left">
                            <h1 className="A-heading">
                                <span className="orange">SpikeCom </span>
                                In-App Media Ecosystem

                            </h1>
                            <p>At a moment of truth, SpikeCom connects Advertisers and Publishers to Spike their communication with the right target audience</p>
                          
                            <button className="sign-in-btn mt-16">Start Trial</button>
                        </div>
                        <div  className="section-A-right">
                            <div className="inner-container-A">
                           <div className="card-div-A-right">
                            <div className="inner-card-heading-right-A">
                                <h2>
                                    <span className="orange">Spike</span>
                                    Com
                                </h2>
                               
                            </div>
                            <div>
                            <p
                            className="inner-card-para-right-A"
                            >Connecting publishers and advertisers under a single platform</p>
                            </div>
{/* 
                            <img className="card-img-A" src={cardImage}>

                            </img> */}
                            
                           </div>
                           </div>
                        </div>
                    </div>
                    
                </div>
                <div className="orange-container">
                    <div className="orange-inner-container">
                        <div className="orange-container-desc">
                    <p>Everyone's Using SpikeCom. We would love to have you in our list. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti omnis animi, quo perspiciatis dolore veniam laborum repudiandae ipsum quae voluptatum ducimus, sunt saepe.</p>
                    </div>
                    <div className="orange-container-btn-div">
                        <button className=" orange-container-btn ">READ MORE</button>
                    </div>
                    </div>
                </div>
                
                </div>
                <div className="image-sliding-div"></div>
                <div className="section-B">

                <div className="container-B">
                    <div className="flex-B">
                   
                            <div className="sec-b-top-section">
                            <p className="fs-18">What SpikeCom is offering?</p>
                            <div className="fs-34 text-center fw-500">Explore All the Solutions in the <span className="orange">SpikeCom </span>Platform</div>
                             
                            </div>
                        <SpikeOffers/>
                        
                    
                </div>
                </div>
                </div>

                <div className="before-section-c">
                    <div className="bef-sec-c-top-sec">
                    <p className="text1">Simply, We Get Results</p>
                    <div className="text2">Whatever your needs, <span className="orange">We get it Done</span></div>
                    </div>
                    <StatsGrid/>

                   
                </div>
                <div className="section-C bg-light">

                    <div className="container-C">
                        <div className="c-top-section">
                            <div className="d-flex justify-center">
                                <div className="text-center">
                                    <p className="fs-18">Register as a Publisher</p>
                                    <h2 className="fs-34">Join Our <span className="orange">Publisher</span> Network</h2>
                                    <p className="fs-20">Get Started with SpikeCom & Rent your application's placements</p>
                                </div>
                                

                            </div>
                            <div className="d-flex justify-center">
                            <div className="c-sliding-images w-50">
                                    <div className="mt-5">
                                        <div className="c-images"></div>
                                    </div>


                                </div>
                                </div>

                            
                        </div>
                        <div className="c-bottom-section d-flex ">
                            <div className="sec-c-outer-card">
                                <div className="c-bottom-inner-sec1 p-12">
                                    <div className="c-publisher-logo d-flex justify-center">
                                        <img className="h-2 w-2"src={quickmarketlogo}></img>
                                    </div>
                                    <p className="mt-3 fs-18 text-light">Quick Market helps create an amazing on-demand grocery experience. One of the world's largest and fastest growing online food delivery and quick commerce platform</p>


                                </div>
                                <div className="c-bottom-inner-sec2 mt-4">
                                <div className="d-flex flex-wrap justify-center">
                                    <div className="sec-c-inner-card m-3">
                                        <div className="sec-inner-card-img">
                                            <img src={icon12}></img>


                                        </div>
                                        <h4>+2.5M</h4>
                                        <p className="">Monthly Impressions</p>

                                    </div>
                                   
                                    <div className="sec-c-inner-card m-3 ">
                                        <div className="sec-inner-card-img">
                                            <img src={icon12}></img>


                                        </div>
                                        <h4>+2.5M</h4>
                                        <p className="">Average Sessions</p>

                                    </div>
                                    <div className="sec-c-inner-card m-3">
                                        <div className="sec-inner-card-img">
                                            <img src={icon12}></img>


                                        </div>
                                        <h4>+2.5M</h4>
                                        <p className="">Monthly Users</p>

                                    </div>
                                    <div className="sec-c-inner-card m-3">
                                        <div className="sec-inner-card-img">
                                            <img src={icon12}></img>


                                        </div>
                                        <h4>+2.5M</h4>
                                        <p className="">App Downloads</p>

                                    </div>
                                    </div>

                                </div>
                            </div>
                            
                            


                        </div>
                    </div>
                </div>
               

            <div className="section-D">

                <div className="container-D">
                    <div className="row">
                        <div  className="screen-img-container">
                          <img src={screen}  alt="screen"></img>
                          </div>
                          <div className="description">
                            <p>jdghjddjddjgdjhgd</p>
                            <h3></h3>
                            <p>kdghjgdh</p>
                            <p>hjdhvhghdgchghjhdgjgdjhgd<br/>hgdhgdhgdhgd</p>
                            <p>Sign In Now</p>
                          </div>
                    </div>
                </div>
            </div>
            <div className="section-E">

<div className="container-E">
    <div className="row">
      
        <div className="description">
            <p>jdghjddjddjgdjhgd</p>
            <h3></h3>
            <p>kdghjgdh</p>
            <p>hjdhvhghdgchghjhdgjgdjhgd<br/>hgdhgdhgdhgd</p>
            <p>Sign In Now</p>
        </div>
        <div  className="">
        
        </div>
    </div>
</div>
</div>
        </div>
    )
    
}
export default Home