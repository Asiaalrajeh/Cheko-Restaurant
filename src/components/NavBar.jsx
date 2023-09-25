 import React from "react";
 import { useContext } from "react";
 import { Link } from "react-router-dom";
 import sun from '../assets/img/sunny.svg';
 import sunDark from '../assets/img/sunny-dark.svg';
 import moonDark from '../assets/img/moon-dark.svg';
 import moon from '../assets/img/moon.svg';
 import { ThemeContext } from "../Theme";

export const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
    <div className="nav">
        <div className="headerImg"></div>
        <div className="navButtons">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Map">Map</Link></li>
        </div>
       
        {/* mode toggle */}
        <div className="mode">
            <img src={theme === "light-theme" ? sun :sunDark} alt="sun"/>
            {/* <button className={`mode-btn ${theme}`} onClick={() => toggleTheme()}></button> */}
            <div className={`mode-btn ${theme}`} onClick={() => toggleTheme()}>
                <button className="btn"></button>
            </div>
            <img src={theme === "light-theme" ? moon : moonDark} alt="moon" style={{width:"60%"}}/>
        </div>
        
        </div>
 
    
    )
}