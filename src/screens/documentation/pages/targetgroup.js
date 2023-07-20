import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function TargetGroup(params) {
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
                <h1>Target Groups</h1>
                <p>Target groups is set of predefined generic basic targetting field values which can be grouped together and be later used by advertiser while creating campaign ads.</p>
                <p>Spike offers various ways for configuring target audience of the served ads.</p>
                <p>This is completely optional , publisher can define target groups and advertiser can select from them if ads are being created on their placements. Otherwise advertiser can also specify values for these generic basic targetting fields themselves for their ads.</p>
                <h2>Configuration</h2>
                <ul>
                    <li>In target group configuration first publisher selection is needed , in-case pubilsher is doing this themselves then this field is auto-loaded.</li>
                    <li>Target group title is needed next which is to identify any target group by its name.</li>
                    <li>Age group is the first basic targetting field for selection having options between 18-30 , between 30-46 , between 46-60 , above 60. Incase some other range needs to be defined publisher can use target segments option instead of using target groups. This is applicable in json where publisher will have this value in response which they can use. This is also applicable in js and iframe but for that publisher will have to pass the longitude, latitude parameter values in the request call for ads against which spike will be responding back with the filtered ads.</li>
                    <li>Gender is the second basic targetting field for selection having option Male , Female , Other. This is applicable in json where publisher will have this value in response which they can use. This is also applicable in js and iframe but for that publisher will have to pass the longitude, latitude parameter values in the request call for ads against which spike will be responding back with the filtered ads.</li>
                    <li>Target specific OS and Browsers is the third basic targetting field for selection , enabling this will allow publisher to choose target platforms. This is applicable only incase of json where publisher will have this value in response which they can use.</li>
                    <li>Ad locations is the fourth basic targetting field for selection , publisher can choose a location and set a radius around it as a target and add multiple sets of such location targets inside single group. This is applicable in json where publisher will have this value in response which they can use. This is also applicable in js and iframe but for that publisher will have to pass the longitude, latitude parameter values in the request call for ads against which spike will be responding back with the filtered ads.</li>
                    <li>Unique delivery tells if ads has to be served in unique manner i.e if repetition needs to be avoided. This is applicable only incase of json where publisher will have this value in response which they can use.</li>
                    <li>Auto refresh is the rate of refreshing an Ad in milliseconds. When any ad served having this set it will be refreshed after this set amount of time. This is applicable only incase of js and iframe , where as for json publisher is responsible to refresh ads using our callback url link in response.</li>
                    <li>Serving priority can be high , medium or low based on this the ads from same placement are served. High priority ads are likely to be served three times more then low priority ads where as medium priority ads are likely to serve two times more then low priority ads.</li>
                    <li>Keywords are tied to ads telling some more information about it like what is this ad about. Multiple keywords can be tied to a single group.</li>
                </ul>
                <p>Target groups can be searched using group title in Target Group List. They are used by advertiser during campaign ad creation.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default TargetGroup