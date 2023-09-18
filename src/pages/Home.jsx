import React from 'react'
import { useState,useEffect } from 'react';
import {FoodCard} from '../components/FoodCard';

function Home() {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://6506a5173a38daf4803e8f5c.mockapi.io/api/cheko/restaurants")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
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
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <FoodCard food ={item}/>
              </li>
            ))}
          </ul>
        );
      }
    }


export default Home