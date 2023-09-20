import React from "react";
import { useState} from 'react';
import Pop from "./Pop";

export const FoodCard = ({food}) => {

    const [open,setOpen]= useState(false);
    const best = ["hill","puddle"];

    const x = () => {
        setOpen(true);
    }

    return(
        <div className="back">
    <div className="foodcard" onClick={()=> {setOpen(true);}}>
        
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
            <div>
            <h3>{food.name}</h3>
            <span>{food.calorie} Cal</span>
            </div>

            
            <div>
            <p>{food.price} SR</p>


            <button >-</button>
            <div style={{padding:5}}>0</div>
            <button >+</button>
           
            </div>
        </div>
    </div>
   
    { open? <Pop close = {setOpen} food = {food}/>: <></>}

    </div>
   
   

    );
}

