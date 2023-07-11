import React from 'react';
import { HashLink } from 'react-router-hash-link';
function Navbar() {
    return (
<div className="nav-list" >

   
    <HashLink className='nav-child' smooth to="/#section-A">HOME</HashLink>
    <HashLink className='nav-child'  smooth to="/#section-B">SOLUTIONS</HashLink>
    <HashLink className='nav-child'  smooth to="/#section-C">OUR NETWORK</HashLink>
    <HashLink className='nav-child' smooth to="/#section-D">DISCOVER</HashLink>
    <HashLink className='nav-child' smooth to="/#section-E">FAQ</HashLink>
    <HashLink className='nav-child' >DOCUMENTATION</HashLink>
  



</div>
    );
    
}
export default Navbar