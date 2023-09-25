 import React from "react";
 import { Link } from "react-router-dom";
 import sun from '../assets/img/sunny.svg';
 import moon from '../assets/img/moon.svg';
 

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
            <img src={sun} alt="sun"/>
            <button className="mode-btn"></button>
            <img src={moon} alt="moon" style={{width:"60%"}}/>
        </div>
        
        </div>
 
    
    )
}