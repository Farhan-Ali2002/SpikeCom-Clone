import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function TargetSegment(params) {
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
                <h1>Target Segments</h1>
                <p>Target segments are custom rules defined on top of target keys which are defined by publisher themselves.</p>
                <p>These custom rules are used for targetting.</p>
                <p>If the placement tag being used is for JSON, publisher can tweek the request url and pass datakey values to be served with only those ads which fulfill the rule of this key based on its supplied value in the parameter. This is further elaborated in Integrations section of knowledge base.</p>
                <h2>Configuration</h2>
                <ul>
                    <li>Defining a segment is pretty simple, it needs a Name of the segment which shall be unique.</li>
                    <li>A segment comprise of multiple rules on predefined keys. From here user can add multiple rules in a single segment by add multiple rows each row containing a key , an operator and a value.</li>
                    <li>First a publisher is selected , incase if publisher himself is creating the segment then publisher is autoselected , keys are loaded for this publisher which are defined against it in Target data keys window. Operator shows the list of possible rule logic operators for selection to define the rule , the possible options are = , != , &lt; , &lt;= , &gt; , &gt;= , starts-with , ends-with and contains where as Value contains the value is the treshold value setting up the rule.</li>
                </ul>
                <p>Target segments are mainly used for defining custom target audience and ads filtering, this is later explained in Integrations section of knowledge base.</p>
            </div>
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default TargetSegment