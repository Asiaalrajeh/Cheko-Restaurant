import React from 'react';
import  { useContext } from "react";
import { ThemeContext } from "../Theme";

 const CategoryCard = ({item}) => {
    const { theme} = useContext(ThemeContext);
  return (
        <div className='card' style={theme === "dark-theme" ?{backgroundColor:item.color}: {backgroundColor:'#fff'}}>
            <div className='circle' style={{backgroundColor:item.color}}>
                <img src = {item.img} alt= "category img"/>
            </div>
            <p>{item.label}</p>
            <p>{item.count}</p>
        </div>
        
    
  )
}

export default CategoryCard;