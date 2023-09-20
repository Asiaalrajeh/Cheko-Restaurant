import React from 'react'
import { useState,useEffect } from 'react';
import {FoodCard} from '../components/FoodCard';
import Category from '../components/Category';

const Home = (prop) => {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // const [fitems, setFItems] = useState([]);
 
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
            <Category items={items}/>
            {/* <div>
              <div>

              </div>
            </div> */}
          <div className='container'>
           { filterd.length > 0 ?
            filterd.map(item => (
              <div key={item.id}>
                <FoodCard food ={item}/>
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