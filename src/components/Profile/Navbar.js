// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li className="dropdown" onClick={toggleDropdown}>
          <a href="/">Dropdown</a>
          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><a href="/">Option 1</a></li>
              <li><a href="/">Option 2</a></li>
              <li><a href="/">Option 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
