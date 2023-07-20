import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function BrandInfo(params) {
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
                <h1>Brands Information &amp; Configuration</h1>
                <p>Spike gives publisher access to brand list for defining their brands in detail.</p>
                <p>From the Brand section publisher can see list of brand catalogs which are groups of brands.</p>
                <p>Brands which are defined can be selected by advertisers in their ads which are against brand type placement object.</p>
                <h2>Configuration</h2>
                <ul>
                    <li>Publisher can download the format required to upload brands in bulk from Download Format link , from Create Catalog link publisher can create a new brand catalog by specifying name of catalog and uploading brand rows in bulk in the format.</li>
                    <li>Publisher can view single catalog and create or update any single brand entry in it or even bulk upload brands in that catalog.</li>
                    <li>There is also view , edit , duplicate and delete options for each individual brands.</li>
                    <li>There is also a brand type placement which uses the defined brands from here and gives an option for selection to the advertisers from the list of available brands.</li>
                </ul>
                <p>Such type of listings and placement is mainly used in top listings or feature listings type ads.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default BrandInfo