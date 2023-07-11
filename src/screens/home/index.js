import React from "react";
import './index.css'
import screen from "../../images/laptop.png"
// import cardImage from "../../images/card-image.png"
// import CardBContainer from "../../components/CardContainer";
import SpikeOffers from "../../components/spikeoffergrid";
import StatsGrid from "../../components/statsGrid";
import quickmarketlogo from '../../images/logo-quick-market.png'
import icon12 from '../../images/icon-12.png'
import Carousel from "../../components/c_info_card_list";
function Home(params) {

     return (
        <div className="home">
            
                <div className="section-A" id="section-A">

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
                <div className="section-B" id="section-B">

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
                <div className="section-C bg-light" id="section-C">

                    <div className="container-C wrapper">
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
                        {/* <div className="c-bottom-section d-flex "> */}
                            <Carousel/>
                            
                            


                        {/* </div> */}
                    </div>
                </div>
               

            <div className="section-D" id="section-D">

                <div className="container-D wrapper d-flex justify-center">
                    <div className="D-section-left w-70 d-flex justify-end">
                        <div  className="D-screen-img-container">
                          <img src={screen} height="380px" alt="screen"></img>
                          </div>
                    </div>
                    <div className="D-section-right w-40">
                          <div className="D-wrapper w-50">
                            <p className="fs-18">Let your profit grows & enjoy</p>
                            <h3 className="fs-38">Start using <br></br><span className="orange">SpikeCom</span></h3>
                            <p className="fs-18">We bring together everything you need to manage, serve and track your ads on any platform. SpikeCom's products power ad serving for web sites, apps, marketplaces, retailers, email newsletters and everything in between.

</p>
                     
                            <p className="fs-22 orange">Sign In Now</p>
                            </div>
                          </div>
                   
                    
                </div>
            </div>
            <div className="section-E" id="section-E">

<div className="container-E wrapper d-flex justify-center">
    <div className="E-top-section">
      
        <div className="text-center">
            <p className="fs-20">Quickly find the help you need</p>
            <p className="fs-32 text-center"> <span className="orange">Our Frequently Ask Question</span>   <br/>support center</p>
            <p className="fs-20">We'd love to hear from you. Let us know if we can help you with anything</p>
        </div>
        
    </div>
    <div className="E-bottom-section"> 
    
    </div>
</div>
</div>
        </div>
    )
    
}
export default Home