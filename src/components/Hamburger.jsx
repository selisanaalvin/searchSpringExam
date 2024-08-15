import React, { useState,useContext } from 'react';
import '../styling/HamburgerMenu.css';
import { SearchContext } from '../context/SearchContext';
import config from '../config';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavigationList = config.NavigationList;
  const { setSearchQuery, setCurrentPage } = useContext(SearchContext);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setCurrentPage(1);
    setSearchQuery(newValue);
    console.log('Tab changed to:', newValue);
    toggleMenu();
  };

  return (
    
    <div className={`hamburger-header ${isOpen ? 'nav-open' : ''}`}>
      <button 
        id="navToggle" 
        className="nav-toggle" 
        aria-label="toggle navigator"
        onClick={toggleMenu}
      >
        <span className="my-hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
        {NavigationList.map((item, index) => (
            <li key={index} className="nav__item"><a href="/" onClick={e => handleChange(e, item.value)} className="nav__link">{item.value}</a></li>
        ))}
          
 
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
