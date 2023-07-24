import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
function ResponsiveNavbar() {
  return (
    <ul className="responsive_navbar">
      <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-A">
          HOME
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-B">
          SOLUTIONS
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-C">
          OUR NETWORK
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-D">
          DISCOVER
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink className="nav-child" smooth to="/#section-E">
          FAQ
        </HashLink>
      </li>
      <li className="nav-item">
        <NavLink to="/docs" className="nav-child">
          DOCUMENTATION
        </NavLink>
      </li>
      <li className="nav-item">
      <button className="sign-in-btn">SIGN-IN NOW</button>
      </li>

      
    </ul>
  );
}
export default ResponsiveNavbar;