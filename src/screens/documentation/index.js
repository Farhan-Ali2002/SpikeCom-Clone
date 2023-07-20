import React from 'react'
import './index.css'
import '../../index.css'
import DocCardsList from './components/docCardsList' 
import logo from '../../images/logo-dark.png'
import DocCard from './components/doc_card'
import { NavLink } from 'react-router-dom'
import DocTopSection from './components/doc_top_section'
function Documentation(params) {
    return (
    <div className='documentation'>
       
       
       <DocTopSection/>
        
        
        <section id='doc-items'>
            <div className='doc-wrapper d-flex flex-wrap justify-between'>
               <DocCardsList/>
            </div>
        </section>
        
    </div>)
    
}
export default Documentation