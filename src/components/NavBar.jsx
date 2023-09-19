 import React from "react";
 import { Link } from "react-router-dom";
 import {SearchBar} from './SearchBar';
 

export const NavBar = () => {

    return(
    <div className="nav">
        <div className="headerImg"></div>
        <div className="navButtons">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Map">Map</Link></li>
        </div>
       
        {/* mode toggle */}
        <div className="mode">
            <button>light</button>
        </div>
            {/* <SearchBar/> */}
        </div>
 
    
    )
}