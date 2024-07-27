// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <ul>
      <li className="list">
        <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      </li>
      <li className="list">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      </li>
      <li className="list">
        <NavLink to="/works" className={({ isActive }) => isActive ? 'active' : ''}>Works</NavLink>
      </li>
      <li className="list">
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
