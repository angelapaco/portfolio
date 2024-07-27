import React from 'react'
import './styles/Navbar.css';

const Navbar = () => {



  return (
    <ul>
        <li class="list"><a href="home" class="active">Home</a></li>
        <li class="list"><a href="about">About</a></li>
        <li class="list"><a href="works">Works</a></li>
        <li class="list"><a href="contact">Contact</a></li>
    </ul>
  )
}

export default Navbar