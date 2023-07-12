import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
<div className="nav-list" >

   
    <HashLink className='nav-child' smooth to="/#section-A">HOME</HashLink>
    <HashLink className='nav-child'  smooth to="/#section-B">SOLUTIONS</HashLink>
    <HashLink className='nav-child'  smooth to="/#section-C">OUR NETWORK</HashLink>
    <HashLink className='nav-child' smooth to="/#section-D">DISCOVER</HashLink>
    <HashLink className='nav-child' smooth to="/#section-E">FAQ</HashLink>
    
    <NavLink to="/documentation" className='nav-child' >DOCUMENTATION</NavLink>
  



</div>
    );
    
}
export default Navbar