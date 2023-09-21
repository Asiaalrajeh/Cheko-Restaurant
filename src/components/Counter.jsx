import React from 'react'
import { useState,useEffect } from 'react';

// var data = [{id:"1",count:0},{id:"2",count:0},{id:"3",count:0}];

function Counter({close,food,counter,set}) {

    // const data = [{id:"1",count:0},{id:"2",count:0},{id:"3",count:0}];
    // const [counter,setCounter]= useState(data);

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
    
    <div className='popPrice'onClick={() => {close(false)}}>
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
  )
}

export default Counter