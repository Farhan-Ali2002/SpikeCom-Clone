import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
function MediaManagement(params) {
    return (
        <div>
        <section className='doc-top-section'>
            <header className="doc-header">
            <div className="navbar-wrapper">
            <nav className="navbar">
            
            <img className = "logo" height="40px"  src={logo}></img>
          
            {/* <Navbar/> */}
    
            <button className="sign-in-btn">SIGN-IN NOW</button>
            </nav>
            </div>
          </header>    
            <div className='search-banner d-flex justify-center'>
                <div className='wrapper text-center p-3'>
                    <h1>SpikeCom Knowledge Base</h1>
                    <p class="fs-16">Everything you need to know about SpikeCom</p>
                    <form autocomplete="off" action="/documentation">
                    <div class="autocomplete ">
                        <input id="docSearch" type="text" name="docSearch" placeholder="What are you looking for?">
                        
                        </input>
                        <button type="submit">search</button>
                        
                    </div>
                    <p className='text-center'>Document Release Notes</p>
                    
                </form>
    
    
                </div>
            </div>
            </section>
            <section className="doc-contents">
                <div className="doc-wrapper ">
                    <div className="content-header d-flex justify-between">
                        <p className="updated">
                            <span>Created : Feb, 04, 2016</span> | 
                            <span>Last Updated: April, 15, 2016</span>
                        </p>
                        <div className="breadcrum">
                            <NavLink to="../">SpikeCom Documentation</NavLink>
                            {"=>"}
                            <NavLink to="">Introduction</NavLink>
                        </div>
                    </div>
                </div>
                <div className="doc-wrapper d-flex">
                    <div className="doc-sidebar w-30">
                        <h2>Quick Navigation</h2>
                        <ul>
                        <li>
                                <NavLink to="/docs/introduction">Introduction</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/roles-and-settings">Role Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/brands-information-and-configuration">Brands information and Configuration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/target-data-keys">Target Data keys</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/settings-and-configuration">Settings and Configurations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/placement-settings-and-configuration">Placement Settings and Configurations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/target-segments">Target Segments</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/compaign-management">Compaign Management</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/account-settings">Account Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/product-information-and-configuration">Product information and Configuration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/target-groups">Target Groups</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/advertiser-settings-and-configuration">Advertiser Settings and Configuration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/integration">Integrations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/adserving-and-refresh-logic">Ads Serving and Refresh Logic</NavLink>
                            </li>
                        {/* <li>
                            <NavLink>Introduction</NavLink>
                        </li> */}
    
                    </ul>
                    </div>
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
        </div>
        )
}
export default MediaManagement