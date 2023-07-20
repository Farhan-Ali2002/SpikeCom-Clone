import React from "react";
import logo from '../../../images/logo-dark.png'
import { NavLink } from "react-router-dom";
function DocTopSection(params) {
    return(
        <div className='doc-top-section'>
        <header className="doc-header">
        <div className="navbar-wrapper">
        <nav className="navbar">
        
        <img className = "logo" height="40px"  src={logo}></img>
      
        {/* <Navbar/> */}

        <button className="sign-in-btn">SIGN-IN NOW</button>
        </nav>
        </div>
      </header>    
        <section className='search-banner d-flex justify-center'>
            <div className='wrapper text-center p-3'>
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