import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function MediaManagement(params) {
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
                <h1>Media Management</h1>
                <p>In Spike, Media is a creative library that Spike admin or advertiser can manage for themselves. Admin can manage for any advertiser where as any particular advertiser can only manage its own media.</p>
                <p>Media is first categorized into folders.</p>
                <p>Upon clicking on any folder inside media, it will show all the media files uploaded inside that folder for that advertiser.</p>
                <h2>Configuration</h2>
                <ul>
                    <li>Further details are shown upon clicking on an image inside any folder.</li>
                    <li>Filename , Uploaded by , Uploaded Date , File Size are shown next to the image thumnail upon clicking the image.</li>
                    <li>File URL also shown which is after upload URL from our server. File Folder information also is shown here. Description can be tied to any media creative.</li>
                    <li>These details can be updated as well from the details view of any creative.</li>
                    <li>It also gives an option to remove any existing media which is not used in any campaign.</li>
                </ul>
                <p>Media creatives can be searched by file names.</p>
            </div>
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default MediaManagement