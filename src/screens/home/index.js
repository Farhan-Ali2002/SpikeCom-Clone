import React from "react";
import './index.css'
import screen from "../../images/laptop.png"
import cardImage from "../../images/card-image.png"
import CardBContainer from "../../components/CardContainer";
import SpikeOffers from "../../components/spikeoffergrid";
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
                    <div className="flex-inner-B">
                      
                            <p>What SpikeCom is offering?</p>
                            <div className="container-B-offer">Explore All the Solutions in the <span className="orange">SpikeCom </span>Platform</div>
                             
                       
                        <div  className="">
                        <SpikeOffers/>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="section-C">

                <div className="container-C">
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