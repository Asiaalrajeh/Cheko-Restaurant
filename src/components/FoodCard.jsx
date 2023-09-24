import React from "react";
import { useState} from 'react';
import Pop from "./Pop";
import Counter from "./Counter";

export const FoodCard = ({food,counter,set}) => {

    const best = ["hill","puddle"];
    const [open,setOpen]= useState(false);
    const [v,setV]= useState(false);

    const handleButtonClick = (event) => {
        event.stopPropagation(); // Stop the click event from propagating to the parent div
      };
   
 
    return(
        <div className="back">
    <div className="foodcard" onClick={()=> {setOpen(true)}}>
        
        <div className="foodImg">
            <img src={food.image !== 'N/A' ? food.image : 'https://via.placeholder.com/400' } alt={food.name} />
        </div>

        {
            best.length > 0  ?
            best.map(item =>
                item === food.name ? 
                <div key={item.id}>
                    <div className="best">
                        best sale 
                    </div>
               </div>
                : <></>

             )
            :
            <></>
            
        }


        <div className="cardText">
            <div style={{marginBottom:50}}>
            <h3>{food.name}</h3>
            <span>{food.calorie} Cal</span>
            </div>

        <div onClick={handleButtonClick}>
            <Counter   food={food} counter={counter} set={set}/>
            </div>
        </div>
    </div>
   
    { open? <Pop close = {setOpen} food = {food} counter={counter} set={set} best={best}/>: <></>}

    </div>
   
    );
}

