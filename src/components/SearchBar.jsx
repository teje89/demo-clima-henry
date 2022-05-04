import React from 'react';
import styling from './styles/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return ( <div className={styling.container}>
                <input type="text" placeholder='Ciudad...' />
                <button onClick={() =>props.onSearch('Buscando Ciudad')} className={styling.btn}>Agregar</button>
          </div>
  )
}; 