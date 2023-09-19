import React from 'react'
import { useState,useEffect } from 'react';
import {FoodCard} from '../components/FoodCard';
import Category from '../components/Category';

const Home = (prop) => {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
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

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
   
        return (
          <div>
            <Category items={items}/>
          <ul>
          {items.filter((item)=>{
             //if(prop.p === "") return item;
             if(item.name.toLowerCase().includes(prop.p) || item.category.toLowerCase().includes(prop.p)) return item;
             if(item.category.toLowerCase().includes(prop.f)) return item;

            }).map(item => (
              <li key={item.id}>
                <FoodCard food ={item}/>
              </li>
            ))}
          </ul>
          </div>
        );
      }
    }


export default Home