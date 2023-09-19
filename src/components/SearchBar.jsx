import React from 'react'
import { useState} from "react"
import  search from '../assets/img/search 1.svg';
import filterImg from '../assets/img/filter-list.svg';
import Category from './Category';
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
    // console.log(FoodSearch);
    // console.log(filter);
    e.preventDefault();
  }

  return (
    <div>
     <div className="search">
        <form className='form' onSubmit={OnSearch}>
          <img src={search} alt="search_icon" />
          <input type="text" placeholder="Search" id='searchWord'/>
          {/* value={FoodSearch} onChange={(e) => setFoodSearch(e.target.value)} */}

          <img src={filterImg} alt="filter_icon" />
        
          <select
                name="filter"
                id='select'
                // value={filter}
               // onChange={handleChangeFilter}
               
            >
                <option value="">Filter</option>
                <option value="quod">Soup</option>
                <option value="magni">Rice</option>
                <option value="">Others</option>
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

