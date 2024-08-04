import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import useSound from 'use-sound';
import hoverPop from '/src/assets/audio/txtOut.mp3';

const Navbar = () => {
  const popSound = hoverPop;
  const [play] = useSound(popSound)


  return (
    <div className="navbar">
      <ul className='nav-ul'>
        <li className="nav-list" onMouseEnter={play}>
          <NavLink to="" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li className="nav-list" onMouseEnter={play}>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </li>
        <li className="nav-list" onMouseEnter={play}>
          <NavLink to="/works/site" className={({ isActive }) => isActive ? 'active' : ''}>Works</NavLink>
        </li>
        <li className="nav-list" onMouseEnter={play}>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;