import React from 'react'
import { useState ,useEffect} from 'react';
import breakfastIcon from '../assets/img/breakfast.svg';
import soupIcon from '../assets/img/food-soup 1.svg';
import ordersIcon from '../assets/img/orders.svg';
import sushIcon from '../assets/img/food-sushi.svg';
import coffeIcon from '../assets/img/coffee-cup.svg';
import CategoryCard from './CategoryCard';


var arr = [
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

const Category = ({items,orders}) => {
 const [BreakfastCount, setBCount]= useState();
 const [DrinksCount, setDCount]= useState();
 const [SoupCount, setSCount]= useState();
 const [SushiCount, setSushiCount]= useState();
 const [OrdersCount, setOrdersCount]= useState();

 const [c1, setC1] = useState([]);

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

//  const Category1 = () => {
//     items.filter((obj) => {
//         if(obj.category === 'alias' || obj.category === 'facere' ){
//             console.log(obj)
//            // setC1(obj);
//         }
//         setC1(current => [...current, obj])
//     }
//     )

//     console.log(c1)
//     setBCount(c1.length)
//  }

 useEffect(() => { 
   // Category1();
    countOrders();
    setBCount(items.filter(obj => obj.category === 'facere').length)
    setDCount(items.filter(obj => obj.category === 'alias').length)
    setSCount(items.filter(obj => obj.category === 'placeat').length)
    setSushiCount(items.filter(obj => obj.category === 'eum').length)

    
    {arr.map(item => {
        if(item.label === 'Breakfast'){
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
        // if(item.label === 'Orders'){
        //     return item.count= OrdersCount;
        // }

        return item;
    })}
      
 },[BreakfastCount,DrinksCount,SoupCount,SushiCount,orders,OrdersCount]);

 //[items,BreakfastCount,DrinksCount,SoupCount,SushiCount]
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