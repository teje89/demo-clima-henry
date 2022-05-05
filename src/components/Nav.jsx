import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './styles/Nav.css';

function Nav({onSearch}) {
  return (
    <div>
        <img src={Logo} alt="logo" />
        <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
