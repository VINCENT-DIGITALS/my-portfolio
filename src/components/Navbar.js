import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">VincentDigitals</div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li className={location.pathname === '/Projects' ? 'active' : ''}>
          <Link to="/Projects" onClick={toggleMenu}>Projects</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
