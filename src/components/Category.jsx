import React from 'react'
import { useState ,useEffect} from 'react';
import breakfastIcon from '../assets/img/breakfast.svg';
import soupIcon from '../assets/img/food-soup 1.svg';
import ordersIcon from '../assets/img/orders.svg';
import sushIcon from '../assets/img/food-sushi.svg';
import coffeIcon from '../assets/img/coffee-cup.svg';
import CategoryCard from './CategoryCard';


const arr = [
    {
        label : 'Breakfast',
        img: breakfastIcon,
        count: 0,
        color: '#F4CBDF'
    },
    {
        label : 'Drinks',
        img: coffeIcon,
        count: 0,
        color: '#CDDFEC'
    },
    {
        label : 'Soups',
        img: soupIcon,
        count: 0,
        color: '#E7DEE3'
    },
    {
        label : 'Sushi',
        img: sushIcon,
        count: 0,
        color: '#D1D1EF'
    },
    {
        label : 'Orders',
        img: ordersIcon,
        count: 0,
        color: '#D0EAE3'
    },
    
] 

const Category = ({items,Breakfast,Drink,Soup,Sushi,orders}) => {
 const [BreakfastCount, setBCount]= useState();
 const [DrinksCount, setDCount]= useState();
 const [SoupCount, setSCount]= useState();
 const [SushiCount, setSushiCount]= useState();
 const [OrdersCount, setOrdersCount]= useState();


const countOrders = () => {
    
   const t = orders.reduce((total,item)=> total + item.count,0);
//    console.log(t)
   setOrdersCount(t);

   arr.map(item => {
    if(item.label === 'Orders'){
        return item.count= t;
    }
    return item;
   })


}


 useEffect(() => { 
    countOrders();

    setBCount(Breakfast.length)
    setDCount(Drink.length)
    setSCount(Soup.length)
    setSushiCount(Sushi.length)

    
    {arr.map(item => {
        if(item.label === 'Breakfast'){
            return item.count= Breakfast.length;
        }
        if(item.label === 'Drinks'){
            return item.count= Drink.length;
        }
        if(item.label === 'Soups'){
            return item.count= Soup.length;
        }
        if(item.label === 'Sushi'){
            return item.count= Sushi.length;
        }
        // if(item.label === 'Orders'){
        //     return item.count= OrdersCount;
        // }

        return item;
    })}
      
 },[Breakfast,Drink,Soup,Sushi,orders,OrdersCount,BreakfastCount,DrinksCount,SoupCount,SushiCount]);

  return (
    <div className='container'>
        {arr.map((item, index) => (
             <div key={index}>
            <CategoryCard item = {item}/>
            </div>
        ))}

    </div>
  )
}

export default Category