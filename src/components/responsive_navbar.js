import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
function ResponsiveNavbar() {
  return (
    <ul className="responsive_navbar">
      <li className="">
        <HashLink className="" smooth to="/#section-A">
          HOME
        </HashLink>
      </li>
      <li className="">
        <HashLink className="" smooth to="/#section-B">
          SOLUTIONS
        </HashLink>
      </li>
      <li className="">
        <HashLink className="" smooth to="/#section-C">
          OUR NETWORK
        </HashLink>
      </li>
      <li className="">
        <HashLink className="" smooth to="/#section-D">
          DISCOVER
        </HashLink>
      </li>
      <li className="">
        <HashLink className="" smooth to="/#section-E">
          FAQ
        </HashLink>
      </li>
      <li className="">
        <NavLink to="/docs" className="">
          DOCUMENTATION
        </NavLink>
      </li>
    </ul>
  );
}
export default ResponsiveNavbar;