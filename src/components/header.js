import React from "react";
import Navbar from "../components/navbar";
import logo from "../images/logo-dark.png";
import Hamburger from "hamburger-react";
import { useState ,useEffect} from "react";

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
        <header className={addNavClass? 'on-scroll-header':''}>
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