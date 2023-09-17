 import React from "react";
 import { Link } from "react-router-dom";
 import  search from '../assets/img/search 1.svg';
 import { useState } from "react"


export const NavBar = () => {

    const [FoodSearch, setFoodSearch] = useState();

    return(
    <div>
    <div className="nav">
        <div className="headerImg"></div>
        <div className="navButtons">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Map">Map</Link></li>
        </div>
       
        {/* mode toggle */}
        <div className="mode">
            <h5>heli</h5>
            <button>light</button>
        </div>

        {/* <div className="search">
        <form className="relative flex justify-center items-center" >
          <img src={search} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5"/>
          <input type="url" placeholder="Enter a URL" value={FoodSearch} onChange={(e) => setFoodSearch(e.target.value)} required className="url_input peer" />

          <button type="submit" className="submit_btn">
           Submit
          </button>
        </form>
        </div> */}
    </div>
    {/* <div className="search">
        <form className="" >
          <img src={search} alt="link_icon" className=""/>
          <input type="url" placeholder="Enter a URL" value={FoodSearch} onChange={(e) => setFoodSearch(e.target.value)} required className="url_input" />

          <button type="submit" className="submit_btn">
           Submit
          </button>
        </form>
        </div> */}
    </div>
    
    )
}