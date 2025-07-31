import React from 'react';
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='left'>
          <div className='logo'>
            <h2>Elle<span>'</span>Style</h2>
          </div>
          <ul className='nav-links'>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">Shop</Link></li>
            <li><Link to="#">About</Link></li>
          </ul>
        </div>
        <div className='right'>
          <div className='icon'><FaSearch /></div>
          <div className='icon'><FaShoppingBag /></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
