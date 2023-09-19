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

const Category = ({items}) => {
 const [BreakfastCount, setBCount]= useState();
 const [DrinksCount, setDCount]= useState();
 const [SoupCount, setSCount]= useState();
 const [SushiCount, setSushiCount]= useState();


 useEffect(() => { 
    setBCount(items.filter(obj => obj.category === 'quod').length)
    setDCount(items.filter(obj => obj.category === 'quo').length)
    setSCount(items.filter(obj => obj.category === 'sequi').length)
    setSushiCount(items.filter(obj => obj.category === 'corrupti').length)

    console.log(BreakfastCount)
    {arr.map(item => {
        if(item.label === 'Breakfast'){
            console.log(BreakfastCount)
            return item.count= BreakfastCount;
        }
        if(item.label === 'Drinks'){
            return item.count= DrinksCount;
        }
        if(item.label === 'Soups'){
            return item.count= SoupCount;
        }
        if(item.label === 'Sushi'){
            return item.count= SushiCount;
        }

        return item;
    })}
      
 },[items,BreakfastCount,DrinksCount,SoupCount,SushiCount]);


  return (
    <div className='container'>
        {arr.map(item => (
            <CategoryCard item = {item}/>
        ))}

    </div>
  )
}

export default Category