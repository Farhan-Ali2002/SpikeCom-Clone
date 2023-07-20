import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function Introduction(params) {
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
                <h1>Introduction</h1>
                <p>SpikeCom is an Ad serving agency capable to serve various kinds of ads on various different platforms. </p>
                <p>If you are an Advertiser, you will have an option to choose from list of on-boarded publishers , create your own campaign the way you want in few easy steps, run and monitor the performance of each ads in your campaign. </p>
                <p>If you are a publisher, you will have option to configure your different platform placements , list and manage your products and list and manage your brands, specify your target audience, integrate with Spike via JS/Iframe/Json, serve ads on your platform and contineously monitor them. </p>
                <h2>Policies:</h2>
                <ul>
                    <li>Spike will be responsible to serve ads only when spike placement tags are used properly and when the designated campaign ads are alligned.</li>
                    <li>Incase of response in json is chosen as the integration type, Spike is responsible to send the ad in json where as publisher will be responsible to serve ad , refresh it , mark impression and mark click using our callback urls in response.</li>
                    <li>Advertiser is responsible to manage media and create and publish campaigns</li>
                    <li>Spike is responsible to be a mediator between advertiser and publisher and after aligning both parties campaign will be started.</li>
                    <li>Publisher is responsible to manage products , brands , placements and accept/reject any campaign.</li>
                </ul>
                <p>Spike gives you the freedom to express your ad placements the way you want. Be it a main banner, a strip banner, a product chain, a feature list, a keyword search , a popup , a push notification, a content card or any other type of ad. The configuration options are all based on type of placement from start till end.</p>
            </div>

                


            </div>

        </section>
    <div/>
    <Footer/>
    </div>
    )}
export default Introduction