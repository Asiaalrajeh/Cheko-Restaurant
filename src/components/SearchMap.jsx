import React from 'react';
import { useState} from "react"
import  search from '../assets/img/search 1.svg';
import filterImg from '../assets/img/filter-list.svg';
import  { useContext } from "react";
import { ThemeContext } from "../Theme";



function SearchMap() {
    const [MarkSearch, setMarkSearch] = useState('');
    const [filter, setFilter] = useState('');
    const { theme } = useContext(ThemeContext);

    const OnSearch = e => {
        setMarkSearch(e.target.searchWord.value);
        setFilter(e.target.select.value);
        e.preventDefault();
      }


  return (
    <div>
    <div className={`search ${theme}`}>
       <form className='form' onSubmit={OnSearch}>
         <img src={search} alt="search_icon" />
         <input type="text" placeholder="Search" id='searchWord' className={`${theme}`}/>

         <img src={filterImg} alt="filter_icon" />
       
         <select
               name="filter"
               id='select'
               className={`${theme}`}
           >
               <option value="">Filter</option>
               <option value="">..</option>
               <option value="">..</option>
               <option value="">Others</option>
           </select>
          
     
         <button type="submit" className="submit_btn">
          Search
         </button>
       </form>
       </div>
     

       </div>
   
  )
}

export default SearchMap