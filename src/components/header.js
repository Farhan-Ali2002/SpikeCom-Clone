import React from "react";
import Navbar from "../components/navbar";
import logo from "../images/logo-dark.png";
import Hamburger from "hamburger-react";
import { useState } from "react";
function Header(params) {
    const [isOpen, setOpen] = useState(false);
    return(
        <header className="App-header">
        <div className="navbar-wrapper">
          <nav className="navbar">
            <img className="logo" height="40px" src={logo}></img>

            <Navbar />
            <button className="sign-in-btn">SIGN-IN NOW</button>

            <span className="hamburger-button">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </span>
          </nav>
        </div>
      </header>
    )
}
export default Header