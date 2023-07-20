import React from "react";
import { NavLink } from "react-router-dom";
function DocSidebar(params) {
    return (
        <div className="doc-sidebar">
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
    )
    
}
export default DocSidebar