import React from 'react'
import  { useContext } from "react";
import { ThemeContext } from "../Theme";


function Counter({close,food,counter,set}) {

    const { theme } = useContext(ThemeContext);

    const  increasing = () => {
        const newCounter = counter.map(item => {
             if(item.id === food.id){
                 return {...item,count: item.count +1}
             }
             return item;
         })
 
        //  setCounter(newCounter);
        set(newCounter);
         
     }
 
     const decreasing = () => {
         const newCounter = counter.map(item => {
             if(item.id === food.id){
                 return {...item,count: item.count -1}
             }
             return item;
         })
 
        //  setCounter(newCounter);
        set(newCounter);
 
     }
  return (
    
    <div className='popPrice'>
    <p>{Math.floor(food.price)} SR</p>

    <button onClick={decreasing} className={`${theme}`}>-</button>
    <div style={{padding:5}}>
        {
            counter.map(item => {
               if(item.id === food.id) {
                return item.count;
               }
              
                })
                
        }
        </div>
    <button onClick={increasing} className={`${theme}`} >+</button>
   
    </div>
  )
}

export default Counter