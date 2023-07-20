import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function PlacementSettings(params) {
    return (
        <div>
       <DocTopSection/>
            <section className="doc-contents">
                <div className="doc-wrapper ">
                    <div className="content-header d-flex justify-between">
                        <p className="updated">
                            <span>Created : Feb, 04, 2016</span> | 
                            <span>Last Updated: April, 15, 2016</span>
                        </p>
                        <div className="breadcrum">
                            <NavLink to="../">SpikeCom Documentation</NavLink>
                            
                            <NavLink to="">Introduction</NavLink>
                        </div>
                    </div>
                </div>
                <div className="doc-wrapper d-flex">
                   <DocSidebar/>
                    <div class="doc-main">
                <h1>Publisher Settings and Configuration</h1>
                <p>In Spike a publisher is an entity who have some sort of application running on any platform where they need to be served with Ads. They can define their placements , products , brands etc which an advertiser can use while creating campaign. After an agreement between both parties the campaign starts running and Ads starts to be served. </p>
                <p>A Publisher account is initially setup by Spike admin with a single primary user, that user can later configure more users for their publisher. </p>
                <p>Spike offers plenty of configurable options for publisher setup.</p>
                <h2>Configuration</h2>
                <ul>
                    <li>Publisher Name is to identify publisher itself where as email address and password is for the primary user account associated with this publisher.</li>
                    <li>Publisher can be defined as multi-lingual by selecting any language in primary language and checking on Multilingual then selecting one or more languages in secondary language. This allows advertisers to upload their creative in multi-language while creating campaign ads.</li>
                    <li>Publisher payout settings can be defined by selecting which currency publisher deals in from supported currencies USD and SAR.</li>
                    <li>Publisher's VAT percent , default payout rate for CPM , CPC , CPA or CPD can be set here which is the selling rate of any placement (this can be configured different for different placements).</li>
                    <li>Agency commission which is Spike can be set here in terms of total or custom. Incase of total , this percent from total bill will be treated as Spike commission. Incase of custom different commision rates can be set for different payment models (CPM , CPC , CPA or CPD) based on the model followed by campaign that specific commision rates will be used.</li>
                    <li>Publishers once configured can be found in publisher list, a publisher can searched by publisher name or status.</li>
                    <li>Publisher View gives an option to view basic settings on that publisher as well as a performace chart showing statistics of that publisher.</li>
                </ul>
                <p>Interconnected UI allows publisher to create placement or edit publisher itself while viewing performance and statistics in publisher view, similarly allows to create placements right from publisher configuration upon completion.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default PlacementSettings