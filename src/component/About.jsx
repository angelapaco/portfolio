import React from 'react'
import './styles/About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  /*
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        start: "0% 0%", 
        end: "bottom top",
        pin: '.about-container', 
        pinSpacing: false,
        scrub: true,
        markers: true
      } 
    });
  }); */

  return (
    <>
      {/* <div className="nav-space"></div> */}
      <section className='about-container'>
        <div className="about-wrapper">
          <section className="about-me">
            <div className="photo">
              <img className="onex1" src="/1x1.png" alt="1x1"/>
            </div>
            <div className="texts">
              <div className="name-txt">
                <h2 className="name-abt">Angela Paco</h2>
              </div>
              <div className="about-txt-wrapper">
                <p className='about-txt'>I’m a third-year computer science student with a strong passion for frontend and game development. My interest in these fields is driven by my love for the arts and the immense satisfaction I get from bringing my creative ideas to life.</p>
              </div>
            </div>
          </section>
          <section className="stack">
            <div className="header-abt">   
              <h2 className="txt">stack</h2>
            </div>
            <div className="icons">
             <img className="icon" src="/icons/stack/css.png" alt=""/>
             <img className="icon" src="/icons/stack/github.png" alt=""/>
             <img className="icon" src="/icons/stack/GSAP.png" alt=""/>
             <img className="icon" src="/icons/stack/html.png" alt=""/>
             <img className="icon" src="/icons/stack/js.png" alt=""/>
             <img className="icon" src="/icons/stack/jsx.png" alt=""/>
             <img className="icon" src="/icons/stack/MySQL.png" alt=""/>
             <img className="icon" src="/icons/stack/php.png" alt=""/>
             <img className="icon" src="/icons/stack/react.png" alt=""/>
             <img className="icon" src="/icons/stack/scss.png" alt=""/>
             <img className="icon" src="/icons/stack/tailwind-css.png" alt=""/>
             <img className="icon" src="/icons/stack/unity.png" alt=""/>
             <img className="icon" src="/icons/stack/vscode.png" alt=""/>
             <img className="icon" src="/icons/stack/vite.png" alt=""/>
            </div>
          </section>
          <section className="multimedia">
            <div className="header-abt">
              <h2 className="txt">multimedia</h2>
            </div>
            <div className="icons">
              <img className="icon" src="/icons/multimedia/after-effects.png" alt=""/>
              <img className="icon" src="/icons/multimedia/blender.png" alt=""/>
              <img className="icon" src="/icons/multimedia/figma.png" alt=""/>
              <img className="icon" src="/icons/multimedia/photoshop.png" alt=""/>
              <img className="icon" src="/icons/multimedia/rive.png" alt=""/>
              <img className="icon" src="/icons/multimedia/svp.png" alt=""/>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default About;