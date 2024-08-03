import React from 'react';
import './styles/Works.css';
import { Tooltip } from 'react-tooltip'
import './styles/Tooltip.css'
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';

const Works = () => {
  let visibilityState = [false];

  function openAboutCard(index) {
    const aboutSection = document.getElementById(`site-about-${index}`);
    visibilityState[index] = !visibilityState[index];
    aboutSection.style.visibility = visibilityState[index] ? 'visible' : 'visible';
  
    if (visibilityState[index]) {
      gsap.fromTo(
        aboutSection,
        { opacity: 0 },
        { duration: 0.15, opacity: 1, ease: 'power2.easeOut' }
      );
      
      gsap.fromTo(
        `#site-about-${index} p, #site-about-${index} h3`,
        { y: 50, opacity: 0 },
        {
          delay: 0.1,
          duration: 0.7,
          y: 0,
          opacity: 1,
          ease: 'power2.easeOut',
          stagger: {
            from: 'start',
            amount: 0.32,
          },
        }
      );
    } else {
      gsap.to(aboutSection, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.easeOut',
        onComplete: () => {
          aboutSection.style.visibility = 'hidden';
        },
      });
  
      gsap.to(`#site-about-${index} p, #site-about-${index} h3`, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.easeOut',
      });
    }
  }
  
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case '/works/site':
        return (
          <>
            <div className="display-header">site</div>
            <section className="display-window">
              <section className="site life-flow">
                <div className="site-header">
                  <h2 className="site-title">Life Flow</h2>
                  <div className="links">
                    <a href="https://github.com/angelapaco/Life-Flow" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="github repo" ><img className="link-icons" src="/svg/github-mark.svg" alt="github logo"/></a>
                  </div>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(0)} >
                  <video autoPlay muted playsInline loop preload="true" onContextMenu={e => e.preventDefault()} className="thumbnail">
                    <source src="/thumbnails/life-flow.mp4" type="video/mp4"/>
                  </video>
                  <div className="site-about" id="site-about-0">
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">Life Flow is a project developed during my second year in college. It focuses on designing and implementing a comprehensive database management system centered around organ donation</p>
                    <h3 className="site-about-header about-header">Role</h3>
                    <p className="site-about-txt">My responsibilities included UI/UX design and prototyping with Figma, frontend development using HTML, SASS, and JavaScript for the landing page and donor side of the site, as well as backend development with PHP and MySQL.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">UI/UX Design</p>
                      <p className="footer-txt">Prototyping</p>
                      <p className="footer-txt">Frontend Development</p>
                      <p className="footer-txt">Backend Development</p>
                      <p className="footer-txt">Landing Page</p>
                      <p className="footer-txt">Donor Side</p>
                      <p className="footer-txt">Sign up</p>
                      <p className="footer-txt">Sign in</p>
                      <p className="footer-txt">PHP</p>
                      <p className="footer-txt">SASS</p>
                      <p className="footer-txt">HTML</p>
                      <p className="footer-txt">JS</p>
                      <p className="footer-txt">MySQL</p>
                      <p className="footer-txt">Figma</p>
                    </Marquee>
                  </div>
                </div> 
              </section>

              <section className="site sweets-district">
                <div className="site-header">
                  <h2 className="site-title">Sweets District</h2>
                  <div className="links">
                    <a href="https://github.com/angelapaco/SweetsDistrict" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="github repo" ><img className="link-icons" src="/svg/github-mark.svg" alt="github logo"/></a>
                    <a href="https://angelapaco.github.io/SweetsDistrict/" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="site" ><img className="link-icons" src="/svg/external-link.svg" alt="visit site icon"/></a>
                  </div>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(1)}>
                  <video autoPlay muted playsInline loop preload="true" onContextMenu={e => e.preventDefault()} className="thumbnail">
                    <source src="/thumbnails/sweets-district.mp4" type="video/mp4"/>
                  </video>
                  <div className="site-about" id="site-about-1">
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">Sweets District is a frontend-focused website project for a bakeshop during our first year in college.</p>
                    <h3 className="site-about-header about-header">Role</h3>
                    <p className="site-about-txt">My responsibilities included the frontend development of the home page, about page, contact, and the navigation bar using HTML, CSS, and JavaScript. <br/><br/> PS: The photos on the home and about pages were sourced from the internet.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">Frontend Development</p>
                      <p className="footer-txt">Home</p>
                      <p className="footer-txt">About</p>
                      <p className="footer-txt">Contact</p>
                      <p className="footer-txt">Navigation Bar</p>
                      <p className="footer-txt">HTML</p>
                      <p className="footer-txt">CSS</p>
                      <p className="footer-txt">JS</p>
                    </Marquee>
                  </div>
                </div> 
              </section>

              <section className="site southside">
                <div className="site-header">
                  <h2 className="site-title southside-title">Income Statement and Log Management System</h2>
                  <div className="links">
                    <a href="https://github.com/angelapaco/Income-Statement-and-Log-Mangement-System" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="github repo" ><img className="link-icons" src="/svg/github-mark.svg" alt="github logo"/></a>
                  </div>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(2)}>
                  <video autoPlay muted playsInline loop preload="true" onContextMenu={e => e.preventDefault()} className="thumbnail">
                    <source src="/thumbnails/southside.mp4" type="video/mp4"/>
                  </video>
                  <div className="site-about" id="site-about-2">
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">This system was developed for Southside Car Wash and Detailing, a company that provides car washing and detailing services. It aims to automate and streamline the processes of generating income statements and managing logs for the company.</p>
                    <h3 className="site-about-header about-header">Role</h3>
                    <p className="site-about-txt">My responsibilities included UI/UX design and prototyping using Figma, as well as frontend and backend development for the Income Statement page. We used Tailwind CSS and JavaScript for the frontend, and JavaScript and MySQL for the backend. The system was built using Vite and React.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">UI/UX Design</p>
                      <p className="footer-txt">Prototyping</p>
                      <p className="footer-txt">Frontend Development</p>
                      <p className="footer-txt">Backend Development</p>
                      <p className="footer-txt">Income Statement (Log)</p>
                      <p className="footer-txt">JS</p>
                      <p className="footer-txt">Tailwind CSS</p>
                      <p className="footer-txt">React</p>
                      <p className="footer-txt">Vite</p>
                      <p className="footer-txt">Figma</p>
                    </Marquee>
                  </div>
                </div> 
              </section>

              <section className="site bubble-sort">
                <div className="site-header">
                  <h2 className="site-title southside-title">Bubble Sort with JavaScript</h2>
                  <div className="links">
                    <a href="https://github.com/angelapaco/Bubble-Sort-Javascript" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="github repo" ><img className="link-icons" src="/svg/github-mark.svg" alt="github logo"/></a>
                    <a href="https://angelapaco.github.io/Bubble-Sort-Javascript/" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="site" ><img className="link-icons" src="/svg/external-link.svg" alt="visit site icon"/></a>
                  </div>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(3)}>
                  <video autoPlay muted playsInline loop preload="true" onContextMenu={e => e.preventDefault()} className="thumbnail">
                    <source src="/thumbnails/bubble-sort.mp4" type="video/mp4"/>
                  </video>
                  <div className="site-about" id="site-about-3">
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">This site is a project made during our third year to demonstrate the bubble sort algorithm using Javascript.</p>
                    <h3 className="site-about-header about-header">Role</h3>
                    <p className="site-about-txt">My responsibilities included designing the site and implementing user input sorting using the bubble sort algorithm with JavaScript.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">UI/UX Design</p>
                      <p className="footer-txt">Frontend Development</p>
                      <p className="footer-txt">HTML</p>
                      <p className="footer-txt">CSS</p>
                      <p className="footer-txt">JS</p>
                    </Marquee>
                  </div>
                </div> 
              </section>
            </section>
          </>
        );
      case '/works/game':
        return (
          <>
          </>
        );
      case '/works/multimedia':
        return (
          <div className="display-multimedia-window">
            <div className="display-header">multimedia</div>
            {/* Content for the multimedia section */}
          </div>
        );
      default:
        return (
          <div className="display-default-window">
            <div className="display-header">Select a section</div>
          </div>
        );
    }
  };
  
  return (
    <section className="works-container">
      <div className="works-wrapper">
        <section className="works-menu">
          <div className="works-header">menu</div>
          <div className="works-option">
            <ul className="works-ul">
              <li className="works-list">
                <NavLink to="/works/site" className={({ isActive }) => (isActive ? 'active' : '')}>[1] site</NavLink>
              </li>
              <li className="works-list">
                <NavLink to="/works/game" className={({ isActive }) => (isActive ? 'active' : '')}>[2] game</NavLink>
              </li>
              <li className="works-list">
                <NavLink to="/works/multimedia" className={({ isActive }) => (isActive ? 'active' : '')}>[3] multimedia</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <section className="works-display">
          {renderContent()}
        </section>
      </div>
    </section>
  )
}

export default Works