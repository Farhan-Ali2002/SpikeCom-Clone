import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
function ProductInfo_Conf(params) {
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
                <h1>Product Information &amp; Configuration</h1>
                <p>Spike gives publisher access to product list for defining their products in detail.</p>
                <p>From the Product section publisher can see list of product catalogs which are groups of products.</p>
                <p>Products which are defined can be selected by advertisers in their ads which are against product type placement object.</p>
                <h2>Configuration</h2>
                <ul>
                    <li>Publisher can download the format required to upload products in bulk from Download Format link , from Create Catalog link publisher can create a new product catalog by specifying name of catalog and uploading product rows in bulk in the format.</li>
                    <li>Publisher can view single catalog and create or update any single product entry in it or even bulk upload products in that catalog.</li>
                    <li>There is also view , edit , duplicate and delete options for each individual products.</li>
                    <li>There is also a product type placement which uses the defined products from here and gives an option for selection to the advertisers from the list of available products.</li>
                </ul>
                <p>Such type of listings and placement is mainly used in product chain or search keyword type ads.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        </div>
        )
}
export default ProductInfo_Conf