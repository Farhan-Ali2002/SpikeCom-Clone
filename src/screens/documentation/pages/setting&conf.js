import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
function Settings_configuration(params) {
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
                <h1>Settings and Configuration</h1>
                <p>In the Spike settings you have an option to manage basic settings related to your user profile.</p>
                <p>If you are an Advertiser, you have an option to reset your password or update your user account name.</p>
                <p>If you are a publisher, you have an option to reset your password or update your user account name as well as access and generate your API access key.</p>
                <p>Spike gives you the freedom to create multiple API Access Keys , which you can share different with different set of users and you can inactive any of them if you want them to stop using it, so you will have full control over it.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        </div>
        )
}
export default Settings_configuration