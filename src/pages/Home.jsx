import React from 'react'
import { useState,useEffect } from 'react';
import {FoodCard} from '../components/FoodCard';
import Category from '../components/Category';

var data = [{id:"1",count:0},{id:"2",count:0},{id:"3",count:0},{id:"4",count:0},{id:"5",count:0},
{id:"6",count:0},{id:"7",count:0},{id:"8",count:0},{id:"9",count:0},{id:"10",count:0}];

const Home = (prop) => {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // const [fitems, setFItems] = useState([]);
    const [counter,setCounter]= useState(data);
 
     console.log(prop);
    
    useEffect(() => {
      fetch("https://6506a5173a38daf4803e8f5c.mockapi.io/api/cheko/restaurants")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
         
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )

        
    }, [])

    const filterd = items.filter((item)=>{
      if(item.category.toLowerCase().includes(prop.f) && (item.name.toLowerCase().includes(prop.p) || item.description.toLowerCase().includes(prop.p))) 
       return item;
      });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
   
        return (
          <div>
            <Category items={items} orders={counter}/>
           
          <div className='container'>
           { filterd.length > 0 ?
            filterd.map(item => (
              <div key={item.id}>
                <FoodCard food ={item} counter={counter} set={setCounter}/>
              </div>
            )) :
            <div className='noResult'>
              no result found
            </div>
          }
          </div>
          </div>
        );
      }
    }


export default Home;