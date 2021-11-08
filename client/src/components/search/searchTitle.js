import React from 'react';
import "./searchBar.css"
  
const SearchTitle = ({value, onChange,placeholder}) => {
    
    function handleChange(event){
        onChange(event.target.value);
    }

    return(
        <div className="search">
            <div className="searchInputs">
                <input type='text' placeholder={placeholder} a value={value} onChange={handleChange}/>
                <div className="searchIcon"></div>
        </div>
        </div>
        
    
    );
};

export default SearchTitle;