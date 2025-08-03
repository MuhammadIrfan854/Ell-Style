import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <h2>Elle<span>'</span>Style</h2>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="#" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="#" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="#" onClick={() => setMenuOpen(false)}>About</Link></li>
        </ul>

        <div className="right">
          <div className="icon"><FaSearch /></div>
          <div className="icon"><FaShoppingBag /></div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
