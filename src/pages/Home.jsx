import React from 'react'
import { useState,useEffect } from 'react';
import {FoodCard} from '../components/FoodCard';
import Category from '../components/Category';

const data = [{id:"1",count:0},{id:"2",count:0},{id:"3",count:0},{id:"4",count:0},{id:"5",count:0},
{id:"6",count:0},{id:"7",count:0},{id:"8",count:0},{id:"9",count:0},{id:"10",count:0}];

const Home = (prop) => {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    const [counter,setCounter]= useState(data);

    const Breakfast = ["hill","spectrograph","smog","puddle","money","parade"];
    const Drinks = ["notation","spectrograph","ashram"];
    const Soups = ["dagger","newsstand","flax"];
    const Sushi =["deposition","apparel","profit"];


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

    // const filterd = items.filter((item)=>{
    //   if(item.category.toLowerCase().includes(prop.f) && (item.name.toLowerCase().includes(prop.p) || item.description.toLowerCase().includes(prop.p))) 
    //    return item;
    //   });

      const Barr = items.filter(item1 => {
        if(item1.category.toLowerCase().includes(prop.f) && (item1.name.toLowerCase().includes(prop.p) || item1.description.toLowerCase().includes(prop.p))) 
            return Breakfast.some(item2 => item2 === item1.name);
      });

      const Darr = items.filter(item1 => {
        if(item1.category.toLowerCase().includes(prop.f) && (item1.name.toLowerCase().includes(prop.p) || item1.description.toLowerCase().includes(prop.p))) 
          return Drinks.some(item2 => item2 === item1.name);
      });

      const SoupArr = items.filter(item1 => {
        if( (prop.f === 'soup' || prop.f === '') && (item1.name.toLowerCase().includes(prop.p) || item1.description.toLowerCase().includes(prop.p))) 
          return Soups.some(item2 => item2 === item1.name);
      });

      const SushiArr = items.filter(item1 => {
        if( (prop.f === 'sushi' || prop.f === '') && (item1.name.toLowerCase().includes(prop.p) || item1.description.toLowerCase().includes(prop.p))) 
          return Sushi.some(item2 => item2 === item1.name);
      })

      const Others = items.filter(item1 => {
        if( (prop.f === 'other' || prop.f === '') && (item1.name.toLowerCase().includes(prop.p) || item1.description.toLowerCase().includes(prop.p))) 
          return !Sushi.some(item2 => item2 === item1.name) && !Soups.some(item2 => item2 === item1.name) && !Drinks.some(item2 => item2 === item1.name) && !Breakfast.some(item2 => item2 === item1.name);

      })



    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
   
        return (
          <div>
            <Category items={items} Breakfast={Barr} Drink={Darr} Soup={SoupArr} Sushi={SushiArr} orders={counter}/>

           {/* { filterd.length > 0 ?
            filterd.map(item => (
              <div key={item.id}>
                <FoodCard food ={item} counter={counter} set={setCounter}/>
              </div>
            )) :
            <div className='noResult'>
              no result found
            </div>
          } */}

          {
            Barr.length > 0 ?
            (
              <div>
              <div className='title' id='breakfast'>
                <h2 className='hr-lines'>Breakfast</h2>
              </div>
              <div className='container' id='noMargin'>
              {
                Barr.map(item => (
                  <div key={item.id}>
                    <FoodCard food ={item} counter={counter} set={setCounter}/>
                  </div>
                ))

              }
              </div>
              </div>
            ): <></>
            }
          
          {
            Darr.length > 0 ?
            (
              <div>
              <div className='title' id='breakfast'>
              <h2 className='hr-lines'>Drinks</h2>
              </div>
              <div className='container' id='noMargin'>
              {
                 Darr.map(item => (
                  <div key={item.id}>
                    <FoodCard food ={item} counter={counter} set={setCounter}/>
                  </div>
                ))

              }
              </div>
              </div>
            ): <></>
            }

            {
            SoupArr.length > 0?
            (
              <div>
              <div className='title' id='breakfast'>
              <h2 className='hr-lines'>Soups</h2>
              </div>
              <div className='container' id='noMargin'>
              {
                 SoupArr.map(item => (
                  <div key={item.id}>
                    <FoodCard food ={item} counter={counter} set={setCounter}/>
                  </div>
                ))

              }
              </div>
              </div>
            ): <></>
            }

          {
            SushiArr.length > 0 ?
            (
             
              <div>
              <div className='title' id='breakfast'>
              <h2 className='hr-lines'>Sushi</h2>
              </div>
              <div className='container' id='noMargin'>
              {
                  SushiArr.map(item => (
                    <div key={item.id}>
                      <FoodCard food ={item} counter={counter} set={setCounter}/>
                    </div>
                  ))

              }
              </div>
              </div>
            ): <></>
            }

          {
            Others.length > 0 ?
            (
             
              <div>
              <div className='title' id='breakfast'>
              <h2 className='hr-lines'>Others</h2>
              </div>
              <div className='container' id='noMargin'>
              {
                  Others.map(item => (
                    <div key={item.id}>
                      <FoodCard food ={item} counter={counter} set={setCounter}/>
                    </div>
                  ))

              }
              </div>
              </div>
            ): <></>
            }


          </div>
        );
      }
    }


export default Home;