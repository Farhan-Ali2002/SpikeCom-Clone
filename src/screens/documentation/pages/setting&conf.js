import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function Settings_configuration(params) {
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
                <h1>Settings and Configuration</h1>
                <p>In the Spike settings you have an option to manage basic settings related to your user profile.</p>
                <p>If you are an Advertiser, you have an option to reset your password or update your user account name.</p>
                <p>If you are a publisher, you have an option to reset your password or update your user account name as well as access and generate your API access key.</p>
                <p>Spike gives you the freedom to create multiple API Access Keys , which you can share different with different set of users and you can inactive any of them if you want them to stop using it, so you will have full control over it.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default Settings_configuration