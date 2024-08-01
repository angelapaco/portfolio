import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles/Works.css';

const Works = () => {
  return (
    <section className="works-container">
      <div className="works-wrapper">
        <section className="works-menu">
          <div className="works-header">menu</div>
          <div className="works-option">
            <ul className='works-ul'>
              <li className="works-list">
                <NavLink to="/works/site" className={({ isActive }) => isActive ? 'active' : ''}>[1] site</NavLink>
              </li>
              <li className="works-list">
                <NavLink to="/works/game" className={({ isActive }) => isActive ? 'active' : ''}>[2] game</NavLink>
              </li>
              <li className="works-list">
                <NavLink to="/works/multimedia" className={({ isActive }) => isActive ? 'active' : ''}>[3] multimedia</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <section className="works-display">
          <div className="works-header">site</div>
          <div className="works-display-window">
            stuff here
          </div>
        </section>
      </div>
    </section>
  )
}

export default Works