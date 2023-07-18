import React from "react";
import logo from "../images/logo-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Footer(params) {
  return (
    <div className="footer py-5">
      <div className="wrapper d-flex justify-between">
        <div className="footer-sec-1 w-25">
          <div>
            <img src={logo} width={"80%"}></img>
          </div>
          <div>
            <p>
              SpikeCom is an Advacned In-App Advertising Platform connecting
              advertisers and publishers to Spike their communication with the
              right target audience
            </p>
          </div>
          <div className="footer-icons">
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{color: "#f5f9ff",}} />
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{color: "#f5f9ff",}} />
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{color: "#f5f9ff",}} />
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{color: "#f5f9ff",}} />
      
          </div>
        </div>
        <div className="footer-sec-2">
          <h5>Quick Navigation</h5>
          <ul>
           <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-A">
          Home
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-B">
          Solutions
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-C">
          Our Network
        </HashLink>
      </li>
      
      <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-E">
          Frequently Asked Question
        </HashLink>
      </li>
      <li className="nav-item">
        <NavLink to="/docs" className="nav-child">
          Documentation
        </NavLink>
      </li>
          </ul>
        </div>
        <div className="footer-sec-3">
          <h5>Documentation</h5>
          <ul>
            <li><NavLink>Role Settings</NavLink></li>
            <li><NavLink>Brand info & Config</NavLink></li>
            <li><NavLink>Target Data Keys</NavLink></li>
            <li><NavLink>Media Management</NavLink></li>
            <li><NavLink>Settings and Configurations</NavLink></li>
          </ul>
        </div>
        <div className="footer-sec-4 mt-4">
          <ul>
            <li><NavLink>Account Settings</NavLink></li>
            <li><NavLink>Target Groups</NavLink></li>
            <li><NavLink>Target Segments</NavLink></li>
            <li><NavLink>Compaign Management</NavLink></li>
            <li><NavLink>Integrations</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
