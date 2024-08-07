import React, { useState } from 'react';
import './styles/Works.css';
import { Tooltip } from 'react-tooltip'
import './styles/Tooltip.css'
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import PixelArtSlider from './PixelArtSlider';
import BlenderSlider from './BlenderSlider';
import useSound from 'use-sound';
import hoverPop from '/src/assets/audio/menuPop.mp3';
import boopLink from '/src/assets/audio/boopLink.mp3';
import buttonClick from '/src/assets/audio/txtOut.mp3';
import githubLogo from '/src/assets/svg/github-mark.svg';
import siteLogo from '/src/assets/svg/external-link.svg';

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

  const { rive, RiveComponent } = useRive({
    src: import.meta.env.BASE_URL +  '/multimedia/ap-char.riv',
    stateMachines: "State Machine",
    layout: new Layout({
      fit: Fit.Cover, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  const menuPopSrc = hoverPop;
  const boopLinkSrc = boopLink;
  const btnClickSrc = buttonClick;
  const [play] = useSound(menuPopSrc);
  const [playBoop] = useSound(boopLinkSrc);
  const [playBtnHover] = useSound(menuPopSrc);
  const [playBtnClick] = useSound(btnClickSrc);

  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  function openVid() {
    const videoUrl = import.meta.env.BASE_URL + "/thumbnails/capture.mp4";
    window.open(videoUrl, '_blank');
  }

  function openTimelapse() {
    const timelapseUrl = import.meta.env.BASE_URL + "/thumbnails/clip-studio-paint.mp4";
    window.open(timelapseUrl, '_blank');
  }

  function openAnim() {
    const psAnimUrl = import.meta.env.BASE_URL + "/thumbnails/animation.mp4";
    window.open(psAnimUrl, '_blank');
  }

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
                    <a href="https://github.com/angelapaco/Life-Flow" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="github repo" onMouseEnter={playBoop} ><img className="link-icons" src={githubLogo} alt="github logo"/></a>
                  </div>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(0)} >
                  <video autoPlay muted playsInline loop preload="true" onContextMenu={e => e.preventDefault()} className="thumbnail">
                    <source src={import.meta.env.BASE_URL + "/thumbnails/life-flow.mp4"} type="video/mp4"/>
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
                    <a href="https://github.com/angelapaco/SweetsDistrict" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="github repo" onMouseEnter={playBoop} ><img className="link-icons" src={githubLogo} alt="github logo"/></a>
                    <a href="https://angelapaco.github.io/SweetsDistrict/" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="site" onMouseEnter={playBoop} ><img className="link-icons" src={siteLogo} alt="visit site icon"/></a>
                  </div>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(1)}>
                  <video autoPlay muted playsInline loop preload="true" onContextMenu={e => e.preventDefault()} className="thumbnail">
                    <source src={import.meta.env.BASE_URL + "/thumbnails/sweets-district.mp4"} type="video/mp4"/>
                  </video>
                  <div className="site-about" id="site-about-1">
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">Sweets District is a frontend-focused website project for a bakeshop during our first year in college.</p>
                    <h3 className="site-about-header about-header">Role</h3>
                    <p className="site-about-txt">My responsibilities included the frontend development of the home page, about page, contact, and the navigation bar using HTML, CSS, and JavaScript. <br/><br/> P.S. The photos on the home and about pages are sourced from the internet.</p>
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
                    <a href="https://github.com/angelapaco/Income-Statement-and-Log-Mangement-System" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="github repo" onMouseEnter={playBoop} ><img className="link-icons" src={githubLogo} alt="github logo"/></a>
                  </div>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(2)}>
                  <video autoPlay muted playsInline loop preload="true" onContextMenu={e => e.preventDefault()} className="thumbnail">
                    <source src={import.meta.env.BASE_URL + "/thumbnails/southside.mp4"} type="video/mp4"/>
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
                    <a href="https://github.com/angelapaco/Bubble-Sort-Javascript" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="github repo" onMouseEnter={playBoop} ><img className="link-icons" src={githubLogo} alt="github logo"/></a>
                    <a href="https://angelapaco.github.io/Bubble-Sort-Javascript/" target="_blank" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="site" onMouseEnter={playBoop} ><img className="link-icons" src={siteLogo} alt="visit site icon"/></a>
                  </div>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(3)}>
                  <video autoPlay muted playsInline loop preload="true" onContextMenu={e => e.preventDefault()} className="thumbnail">
                    <source src={import.meta.env.BASE_URL + "/thumbnails/bubble-sort.mp4"} type="video/mp4"/>
                  </video>
                  <div className="site-about" id="site-about-3">
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">This site is a project made during our third year to demonstrate the bubble sort algorithm using Javascript.</p>
                    <h3 className="site-about-header about-header">Role</h3>
                    <p className="site-about-txt">My responsibilities included designing the site and implementing user input sorting using the bubble sort algorithm with JavaScript.<br/><br/> P.S. the photos (background and bubble) are sourced from the internet.</p>
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
            <div className="display-header">game</div>
            <section className="display-window">
            <section className="site">
                <div className="site-header">
                  <h2 className="site-title">Capture</h2>
                </div>
                <div className="site-thumbnail">
                  <button onClick={toggleMute} className='mute-btn watch-btn' onMouseEnter={playBtnHover}>
                    {isMuted ? 'Unmute' : 'Mute'}
                  </button>
                  <button onClick={openVid} onMouseEnter={playBtnHover} className='watch-btn anim-full'>Full Screen</button>
                  <video autoPlay muted={isMuted} playsInline loop preload="true" className="thumbnail" onClick={() => openAboutCard(0)}>
                    <source src={import.meta.env.BASE_URL + "/thumbnails/capture.mp4"} type="video/mp4"/>
                  </video>
                  <div className="site-about game-about" id="site-about-0"  onClick={() => openAboutCard(0)}>
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">"Capture" is a 3D horror game developed in Unity for our game development course in third-year computer science. Players are equipped with a polaroid camera that can temporarily stun a chasing entity when photographed. Limited polaroid films are scattered throughout the area for players to find and use strategically. The objective is to gather items and escape without being captured.</p>
                    <h3 className="site-about-header about-header">Role</h3>
                    <p className="site-about-txt">My responsibilities included coming up with the game concept, designing, planning the layout of the environment, and programming the entire game, excluding the main menu UI. <br/><br/> P.S. The models are from sketchfab, the character and its animations are from mixamo, and the sfx are sourced from the internet.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">Game Design</p>
                      <p className="footer-txt">3D</p>
                      <p className="footer-txt">Unity</p>
                    </Marquee>
                  </div>
                </div> 
              </section>
            </section>
          </>
        );
      case '/works/multimedia':
        return (
          <>
          <div className="display-header">Multimedia</div>
            <section className="display-window">
              <section className="site rive-animation">
                <div className="site-header">
                  <h2 className="site-title">Animation with Rive</h2>
                </div>
                <div className="site-thumbnail rive-window">
                  <RiveComponent/>
                  <button onClick={() => {playBtnClick(), openAboutCard(0)}} onMouseEnter={playBtnHover}>about</button>
                  <div className="site-about" id="site-about-0" onClick={() => openAboutCard(0)} >
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">My animated character in Rive. The first project made to explore Rive and it's use with React.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">Design</p>
                      <p className="footer-txt">Illustration</p>
                      <p className="footer-txt">Animation</p>
                      <p className="footer-txt">Rive</p>
                      <p className="footer-txt">React</p>
                      <p className="footer-txt">2D</p>
                      <p className="footer-txt">Interactive</p>
                    </Marquee>
                  </div>
                </div> 
              </section>

              <section className="site Pixel Art">
                <div className="site-header">
                  <h2 className="site-title">Pixel art with Pixilart</h2>
                </div>
                <div className="site-thumbnail pixel-art-window">
                <button onClick={() => {playBtnClick(), openAboutCard(1)}} onMouseEnter={playBtnHover}>about</button>
                  <PixelArtSlider/>
                  <div className="site-about" id="site-about-1" onClick={() => openAboutCard(1)} >
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">These are pixel arts I've done in pixilart. These were used for the game projects done in Scratch MIT for familiarization with game design in our game development course in third-year computer science.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">Sprite</p>
                      <p className="footer-txt">Pixel art</p>
                      <p className="footer-txt">Animation</p>
                      <p className="footer-txt">pixilart</p>
                      <p className="footer-txt">2D</p>
                    </Marquee>
                  </div>
                </div> 
              </section>

              <section className="site">
                <div className="site-header">
                  <h2 className="site-title">Aseprite</h2>
                </div>
                <div className="site-thumbnail aseprite-window" onClick={() => openAboutCard(2)}>
                  <div className="aseprites">
                    <img src={import.meta.env.BASE_URL + "/multimedia/stationary.png"} className='aseprite' />
                    <img src={import.meta.env.BASE_URL + "/multimedia/hero_run.gif"} className='aseprite' />
                    <img src={import.meta.env.BASE_URL + "/multimedia/obstacle.gif"} className='aseprite' id='obstacle'/>
                  </div>
                  <div className="site-about" id="site-about-2">
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">These are sprites I've made in Aseprite for an unfinished chrome dino game clone with javascript.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">Sprite</p>
                      <p className="footer-txt">Pixel art</p>
                      <p className="footer-txt">Animation</p>
                      <p className="footer-txt">Aseprite</p>
                      <p className="footer-txt">2D</p>
                    </Marquee>
                  </div>
                </div> 
              </section>

              <section className="site">
                <div className="site-header">
                  <h2 className="site-title">Blender</h2>
                </div>
                <div className="site-thumbnail">
                <button onClick={() => {playBtnClick(), openAboutCard(3)}} onMouseEnter={playBtnHover}>about</button>
                  <BlenderSlider/>
                  <div className="site-about" id="site-about-3" onClick={() => openAboutCard(3)}>
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">3D models made with Blender. The donut, space bottle, and cyberpunk building were all modeled before the steampunk lamp to familiarize myself with Blender. The steampunk lamp is referenced from SteveGallagherLamps' Steampunk Lamp.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">3D Modeling</p>
                      <p className="footer-txt">Blender</p>
                    </Marquee>
                  </div>
                </div> 
              </section>

              <section className="site">
                <div className="site-header">
                  <h2 className="site-title">Clip Studio Paint</h2>
                </div>
                <div className="site-thumbnail" onClick={() => openAboutCard(4)} >
                  <button onClick={openTimelapse} onMouseEnter={playBtnHover} className='watch-btn'>Full Screen</button>
                  <video autoPlay muted playsInline loop preload="true" className="thumbnail">
                    <source src={import.meta.env.BASE_URL + "/thumbnails/clip-studio-paint.mp4"} type="video/mp4"/>
                  </video>
                  <div className="site-about game-about" id="site-about-4">
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">An unfinished reimagined version of Kaveh, a playable character from the game Genshin Impact, set in modern times. Drawn in Clip Studio Paint.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">2D</p>
                      <p className="footer-txt">Clip Studio Paint</p>
                      <p className="footer-txt">Digital Drawing</p>
                      <p className="footer-txt">WIP</p>
                    </Marquee>
                  </div>
                </div> 
              </section>

              <section className="site">
                <div className="site-header">
                  <h2 className="site-title">Animation</h2>
                </div>
                <div className="site-thumbnail">
                  <button onClick={toggleMute} className='mute-btn watch-btn' onMouseEnter={playBtnHover}>
                    {isMuted ? 'Unmute' : 'Mute'}
                  </button>
                  <button onClick={openAnim} onMouseEnter={playBtnHover} className='watch-btn anim-full'>Full Screen</button>
                  <video autoPlay muted={isMuted} playsInline loop preload="true" className="thumbnail" onClick={() => openAboutCard(5)} >
                    <source src={import.meta.env.BASE_URL + "/thumbnails/animation.mp4"} type="video/mp4"/>
                  </video>
                  <div className="site-about game-about" id="site-about-5" onClick={() => openAboutCard(5)} >
                    <h3 className="site-about-header">About</h3>
                    <p className="site-about-txt">This animation is a project from one of our courses, where we were tasked with creating an animation in Photoshop. Filters were applied to each frame to achieve the comic book effect, while the rest of the animation elements were hand-drawn and animated frame by frame.</p>
                  </div>
                </div>
                <div className="site-footer">
                  <div className="footer-part">
                    <Marquee pauseOnHover="true" autoFill="true">
                      <p className="footer-txt">Animation</p>
                      <p className="footer-txt">Photoshop</p>
                      <p className="footer-txt">Sony Vegas Pro</p>
                    </Marquee>
                  </div>
                </div> 
              </section>
            </section>
          </>
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
              <li className="works-list" onMouseEnter={play}>
                <NavLink to="/works/site" className={({ isActive }) => (isActive ? 'active' : '')}>[1] site</NavLink>
              </li>
              <li className="works-list" onMouseEnter={play}>
                <NavLink to="/works/game" className={({ isActive }) => (isActive ? 'active' : '')}>[2] game</NavLink>
              </li>
              <li className="works-list" onMouseEnter={play}>
                <NavLink to="/works/multimedia" className={({ isActive }) => (isActive ? 'active' : '')}>[3] Multimedia</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <section className="works-display">
          {renderContent()}
        </section>
      </div>
      <Tooltip id="tooltip" />
    </section>
  )
}

export default Works