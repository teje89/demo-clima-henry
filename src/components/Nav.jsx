import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './styles/Nav.module.css';
import { Link } from 'react-router-dom';

/*function Nav({onSearch}) {
  return (
    <div>
        <img src={Logo} alt="logo" />
        <SearchBar onSearch={onSearch}/>
    </div>
  );
};*/

function Nav({onSearch}) {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
      <Link to='/'>
        <span className={styles.brand}>
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      </div>
        <SearchBar
          onSearch={onSearch}
          />
          
    </nav>
  );
};


export default Nav;