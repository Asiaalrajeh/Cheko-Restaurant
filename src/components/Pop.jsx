import React from 'react';
import Counter from './Counter';
import  { useContext } from "react";
import { ThemeContext } from "../Theme";

function Pop({close,food,counter,set,best}) {
    const { theme} = useContext(ThemeContext);
  return (
    <div className="window">
        <div className={`popcard ${theme}`}>
            <div className="closeBtn">
            <button onClick={() => {close(false)}}>x</button>
            </div>
        <div className="cardText">
            <div style={{display:"flex", alignItems:"center"}}>
            <h2>{food.name}</h2> 
            {
            best.length > 0  ?
            best.map(item =>
                item === food.name ? 
                <div key={item.id}>
                    <div className="best-pop">
                        best sale 
                    </div>
               </div>
                : <></>

             )
            :
            <></>
            
        }
            
            </div>
            <span> {food.calorie} Cal</span>
        </div>
       

        <div className="description">
                <p>
                    {food.description}
                </p>
        </div>

            <div className="popImg">
            <img src={food.image !== 'N/A' ? food.image : 'https://via.placeholder.com/400' } alt={food.name} />
            </div>

            <Counter food={food} counter={counter} set={set}/>
        </div>

    </div>
  )
}

export default Pop