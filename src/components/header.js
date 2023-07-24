import React from "react";
import Navbar from "../components/navbar";
import logo from "../images/logo-dark.png";
import Hamburger from "hamburger-react";
import { useState ,useEffect} from "react";
import ResponsiveNavbar from "./responsive_navbar";
function Header(params) {
    const [isOpen, setOpen] = useState(false);
    const [addNavClass, setAddNavClass] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        // Replace 'your-scroll-threshold' with the scroll position where you want the class to be added
        setAddNavClass(scrollY > 5);
      };
  
      // Attach the scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 
    return(
        <div className={`${addNavClass? 'on-scroll-header':''}`}>
          <div className="navbar">
          <nav className="navbar-wrapper d-flex justify-between w-100 align-items-center">
            <img className="logo" height="40px" src={logo}></img>

            <Navbar />
            <button className="sign-in-btn">SIGN-IN NOW</button>

            <span className="hamburger-button">
              <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </span>
           
            
          </nav>
          {<div className={`${isOpen? "navbar-dropdown":"mob-nav"}`}> <ResponsiveNavbar/> </div>}          
      
      </div>
      </div>
    )
}
export default Header