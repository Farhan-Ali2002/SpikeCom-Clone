import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function AdvertiserSettings(params) {
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
                <h1>Account Settings</h1>
                <p>Spike supports three types of users. one are Spike users or Admins , second are publisher users and
                    third are advertiser users.</p>
                <p>If you are an advertiser, Spike Admins creates advertiser account with its primary user account
                    created with it, then you will have an option to create more users under your advertiser account
                    umbrella and by default all users under single advertiser account will have same roles and
                    privileges.</p>
                <p>If you are a publisher, Spike Admins creates publisher account with its primary user account created
                    with it, then you will have an option to create more users under your publisher account umbrella and
                    by default all users under single publisher account will have same roles and privileges.</p>
                <h2>User Management</h2>
                <ul>
                    <li>You can manage your users from "User Accounts" module.</li>
                    <li>You can search any user by name or status.</li>
                    <li>You can view or edit any existing user</li>
                    <li>You can Inactive or Archive any existing user.</li>
                </ul>
                <p>Inactive and Archived users will no longer be able to login to Spike application. Inactive users can
                    be activated back by active users under same publisher/advertiser account umbrella. Archived users
                    can also be activated back by active users under same publisher/advertiser account umbrella.</p>
            </div>
    
                    
    
    
                </div>
    
            </section>
        <div/>
        <Footer/>
        </div>
        )
}
export default AdvertiserSettings