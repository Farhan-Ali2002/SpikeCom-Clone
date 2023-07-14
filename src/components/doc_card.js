import React from "react";
import { NavLink } from "react-router-dom";
function DocCard(params) {
    return (
        <div className="doc-card">
        <NavLink to={params.to}>
            <div className="doc-head">
            <span className="doc-icon"><params.doc_icon/></span>
            
            <h4>{params.title}</h4>
            </div>
            <div className="doc-body">
            <p>{params.desc}</p>
            </div>
        </NavLink>
        </div>
    )
    
}

export default DocCard