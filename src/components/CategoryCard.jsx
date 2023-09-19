import React from 'react'

 const CategoryCard = ({item}) => {
  return (
        <div className='card'>
            <div className='circle' style={{backgroundColor:item.color}}>
                <img src = {item.img} alt= "category img"/>
            </div>
            <p>{item.label}</p>
            <p>{item.count}</p>
        </div>
        
    
  )
}

export default CategoryCard;