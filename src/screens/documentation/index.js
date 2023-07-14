import React from 'react'
import './index.css'
import '../../index.css'
import DocCardsList from '../../components/docCardsList' 
import logo from '../../images/logo-dark.png'
import DocCard from '../../components/doc_card'
function Documentation(params) {
    return (
    <div className='documentation'>
        <section className='doc-top-section'>
        <header className="doc-header">
        <div className="navbar-wrapper">
        <nav className="navbar">
        
        <img className = "logo" height="40px"  src={logo}></img>
      
        {/* <Navbar/> */}

        <button className="sign-in-btn">SIGN-IN NOW</button>
        </nav>
        </div>
      </header>    
        <div className='search-banner d-flex justify-center'>
            <div className='wrapper text-center p-3'>
                <h1>SpikeCom Knowledge Base</h1>
                <p class="fs-16">Everything you need to know about SpikeCom</p>
                <form autocomplete="off" action="/documentation">
                <div class="autocomplete ">
                    <input id="docSearch" type="text" name="docSearch" placeholder="What are you looking for?">
                    
                    </input>
                    <button type="submit">search</button>
                    
                </div>
                <p className='text-center'>Document Release Notes</p>
                
            </form>


            </div>
        </div>
        </section>
        
        <section id='doc-items'>
            <div className='doc-wrapper d-flex flex-wrap justify-between'>
               <DocCardsList/>
            </div>
        </section>
        
    </div>)
    
}
export default Documentation