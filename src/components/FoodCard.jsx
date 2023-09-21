import React from "react";
import { useState} from 'react';
import Pop from "./Pop";

export const FoodCard = ({food}) => {

    const data = [{id:"1",count:0},{id:"2",count:0},{id:"3",count:0}];
    const best = ["hill","puddle"];
    const [open,setOpen]= useState(false);
    const [counter,setCounter]= useState(data);
    const [val,setVal]= useState();
    
    const  increasing = () => {
       const newCounter = counter.map(item => {
            if(item.id === food.id){
                return {...item,count: item.count +1}
            }
            return item;
        })

        setCounter(newCounter);
        
    }

    const decreasing = () => {
        const newCounter = counter.map(item => {
            if(item.id === food.id){
                return {...item,count: item.count -1}
            }
            return item;
        })

        setCounter(newCounter);

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


            <button onClick={decreasing}>-</button>
            <div style={{padding:5}}>
                {
                    counter.map(item => {
                       if(item.id === food.id) {
                        return item.count;
                       }
                      
                        })
                        
                }
                </div>
            <button onClick={increasing} >+</button>
           
            </div>
        </div>
    </div>
   
    { open? <Pop close = {setOpen} food = {food} />: <></>}

    </div>
   
   

    );
}

