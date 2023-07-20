import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function TargetData(params) {
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
                <h1>Target Data Keys</h1>
                <p>Target data keys are custom publisher defined keys which can be used in target segments.</p>
                <p>These custom defined keys are used for targetting.</p>
                <p>This is useful when some more advandced audience filtering is required which cannot be accomplished by basic generic target fields from target groups. The publisher is capable of defining his own targeting keys from here , rules on these keys can be defined from target segments module.</p>
                <h2>Configuration</h2>
                <ul>
                    <li>Defining a key is pretty simple, it needs a Name of the key which shall be unique. </li>
                    <li>Each key has a type, supported types are String and Number.</li>
                    <li>Each key is assigned to some publisher(s), incase the publisher himself is defining his keys then that publisher is preselected.</li>
                </ul>
                <p>Target data keys can be used in Target segments for defining the rules on them, this is later explained in Target segments and in API Integration part of knowledge base.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default TargetData