import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../images/logo-dark.png'
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function RoleSettings(params) {
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
                <h1>Role Settings</h1>
                <p>In Spike user role management settings Spike admin have the option to assign/unassign default privliges from any role.</p>
                <p>The change will impact all the users at once which are under the umbrella of that publisher / advertiser account.</p>
                <p>The configurable privilges are User Management , Campaign Management , Dashboard Access , Media Library and Statistics.</p>
                <p>User roles can be searched by their Role Title.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default RoleSettings