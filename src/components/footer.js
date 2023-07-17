import React from "react";
import logo from "../images/logo-dark.png"
function Footer(params) {
    return (
        <div className="footer bg-black">
            <div className="wrapper">
                <div className="footer-sec-1">
                   <div><img src={logo} width={"20%"}></img></div>
                   <div><p>SpikeCom is an Advacned In-App Advertising Platform connecting advertisers and publishers to Spike their communication with the right target audience</p></div>
                   <div className="footer-icons"></div>
                </div>
                <div className="footer-sec-2"></div>
                <div className="footer-sec-3"></div>
                <div className="footer-sec-4"></div>
            </div>
        </div>

    )
    
}
export default Footer