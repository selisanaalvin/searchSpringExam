import React, { useRef } from 'react';
import '../styling/header-style.css';
import SearchBar from "./SearchBar";
import Logo from '../assets/img/searchSpringlogo.png';
import 'animate.css';

const Header = () => {
  const logoRef = useRef(null);

  const handleLogoClick = () => {
    if (logoRef.current) {
      logoRef.current.classList.add('animate__animated', 'animate__wobble');

      logoRef.current.addEventListener('animationend', () => {
        logoRef.current.classList.remove('animate__animated', 'animate__wobble');
      }, { once: true });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img 
          src={Logo} 
          alt="SearchSpring Logo" 
          ref={logoRef} 
          onClick={handleLogoClick} 
          style={{ cursor: 'pointer' }} 
        />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
