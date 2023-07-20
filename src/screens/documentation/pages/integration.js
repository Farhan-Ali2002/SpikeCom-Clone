import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function Integrations(params) {
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
                    
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default Integrations