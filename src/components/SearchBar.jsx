import React from 'react';
import styling from './styles/SearchBar.module.css'

export default function SearchBar({onSearch}) {
  
  function handleOnSearch() {
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
    }
  }

  return (
     <div className={styling.container}>
          <input type="text" placeholder='Ciudad...' id="search-bar-input" />
          <button onClick={handleOnSearch} className={styling.btn}>Agregar</button>
     </div>
  )
}; 