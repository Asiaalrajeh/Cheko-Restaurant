import React from 'react'
import { useState } from "react"
import  search from '../assets/img/search 1.svg';
import filterImg from '../assets/img/filter-list.svg';

export const SearchBar = () => {
    const [FoodSearch, setFoodSearch] = useState();
    const [filter, setFilter] = useState('');

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  }

  return (
     <div className="search">
        <form>
          <img src={search} alt="search_icon" />
          <input type="url" placeholder="Search" value={FoodSearch} onChange={(e) => setFoodSearch(e.target.value)} />

          <img src={filterImg} alt="filter_icon" />
          <select
                name="filter"
                value={filter}
                onChange={handleChangeFilter}
                className="filter"
            >
        <option value="">Filter</option>
        <option value="name">Name</option>
        <option value="date">Date</option>
        <option value="category">Category</option>
      </select>
      
          <button type="submit" className="submit_btn">
           Search
          </button>
        </form>
        </div> 
  )
}

