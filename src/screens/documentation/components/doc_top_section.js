import React from "react";
import logo from '../../../images/logo-dark.png'
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function DocTopSection(params) {
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
        <div className='doc-top-section'>
        <header className={`${addNavClass? 'on-scroll-header':'' }  doc-header`}>
        <div className="navbar-wrapper">
        <nav className="doc-navbar d-flex justify-between">
       <NavLink to={"/"}>
        <img className = "logo" height="40px"  src={logo}></img>
        </NavLink>
        {/* <Navbar/> */}

        <button className="btn doc-btn">SIGN-IN NOW</button>
        </nav>
        </div>
      </header>    
        <section className='search-banner'>
            <div className='search-wrapper text-center p-3'>
                <h1 className='primary-heading'>SpikeCom Knowledge Base</h1>
                <p className="text-paragraph">Everything you need to know about SpikeCom</p>
                <form autocomplete="off" action="/documentation">
                <div class="autocomplete ">
                    <input id="docSearch" type="text" name="docSearch" placeholder="What are you looking for?">
                    
                    </input>
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg></button>
                    
                </div>
                <NavLink className='text-center'>Document Release Notes</NavLink>
                
            </form>


            </div>
        </section>
        </div>
    )
    
}
export default DocTopSection