import React from 'react'
import { useState} from "react"
import  search from '../assets/img/search 1.svg';
import filterImg from '../assets/img/filter-list.svg';
import Home from '../pages/Home';

export const SearchBar = () => {
    const [FoodSearch, setFoodSearch] = useState('');
    const [filter, setFilter] = useState('');


  // const handleChangeFilter = event => {
  //   setFilter(event.target.value);
  // }

  const OnSearch = e => {
    setFoodSearch(e.target.searchWord.value);
    setFilter(e.target.select.value);
    e.preventDefault(); // to prevent page reload on submit
  }

  return (
    <div>
     <div className="search">
        <form className='form' onSubmit={OnSearch}>
          <img src={search} alt="search_icon" />
          <input type="text" placeholder="Search" id='searchWord'/>
         
          <img src={filterImg} alt="filter_icon" id='line' />
        
          <select
                name="filter"
                id='select'
            >
                <option value="">Filter</option>
                <option value="soup">Soup</option>
                <option value="sushi">Rice</option>
                <option value="other">Others</option>
            </select>
           
      
          <button type="submit" className="submit_btn">
           Search
          </button>
        </form>
        </div>
        <Home p = {FoodSearch} f= {filter}/>

        </div>
  )
}

