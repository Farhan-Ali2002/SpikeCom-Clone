import Documentation from "../screens/documentation/index.js"
import Home from "../screens/home/index.js"
import React from 'react'
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";

function allRoutes(params) {
    return (<div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/documentation" element={<Documentation/>}></Route>
        </Routes>
    </div>)
    
}
export default allRoutes