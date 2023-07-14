import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
function TargetData(params) {
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
        </div>
        )
}
export default TargetData