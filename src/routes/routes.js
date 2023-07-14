import Documentation from "../screens/documentation/index.js"
import Home from "../screens/home/index.js"
import AdvertiserSettings from "../screens/documentation/pages/advertisersettings.js";
import AccountSettings from "../screens/documentation/pages/accountsettings.js";
import Integrations from "../screens/documentation/pages/integration.js";
import Introduction from "../screens/documentation/pages/introduction.js";
import BrandInfo from "../screens/documentation/pages/brandinfo.js";
import CompaignManagement from "../screens/documentation/pages/compaignmanage.js";
import MediaManagement from "../screens/documentation/pages/mediamanagement.js";
import RoleSettings from "../screens/documentation/pages/rolesettings.js";
import PlacementSettings from "../screens/documentation/pages/placementsettings.js";
import ProductInfo_Conf from "../screens/documentation/pages/productinfo&conf.js";
import PublisherSettings from "../screens/documentation/pages/publishersettings.js";
import Settings_configuration from "../screens/documentation/pages/setting&conf.js";
import TargetData from "../screens/documentation/pages/targetdata.js";
import TargetGroup from "../screens/documentation/pages/targetgroup.js";
import TargetSegment from "../screens/documentation/pages/targetsegment.js";
import AdServing from "../screens/documentation/pages/adserving.js";

import React from 'react'
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";

function AllRoutes(params) {
    return (<div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/docs" element={<Documentation/>}></Route>
            <Route path="/docs/introduction" element={<Introduction/>}></Route>
            <Route path="/docs/roles-and-settings" element={<RoleSettings/>}></Route>
            <Route path="/docs/brands-information-and-configuration" element={<BrandInfo/>}></Route>
            <Route path="/docs/target-data-keys" element={<TargetData/>}></Route>
            <Route path="/docs/media-management" element={<MediaManagement/>}></Route>
            <Route path="/docs/settings-and-configuration" element={<Settings_configuration/>}></Route>
            <Route path="/docs/publisher-settings-and-configuration" element={<PublisherSettings/>}></Route>
            <Route path="/docs/placement-settings-and-configuration" element={<PlacementSettings/>}></Route>
            <Route path="/docs/target-segments" element={<TargetSegment/>}></Route>
            <Route path="/docs/compaign-management" element={<CompaignManagement/>}></Route>
            <Route path="/docs/account-settings" element={<AccountSettings/>}></Route>
            <Route path="/docs/product-information-and-configuration" element={<ProductInfo_Conf/>}></Route>
            <Route path="/docs/target-groups" element={<TargetGroup/>}></Route>
            <Route path="/docs/advertiser-settings-and-configuration" element={<AdvertiserSettings/>}></Route>
            <Route path="/docs/integration" element={<Integrations/>}></Route>
            <Route path="/docs/adserving-and-refresh-logic" element={<AdServing/>}></Route>
        </Routes>
    </div>)
    
}
export default AllRoutes
