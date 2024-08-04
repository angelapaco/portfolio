import React from 'react'
import './styles/About.css'
import './styles/Tooltip.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tooltip } from 'react-tooltip'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <>
      <section className='about-container'>
        <div className="about-wrapper">
          <section className="about-me">
            <div className="texts">
              <div className="name-txt">
                <h2 className="name">Angela Paco</h2>
              </div>
              <div className="about-txt-wrapper">
                <p className='about-txt'>I’m a third-year computer science student with a strong passion for frontend and game development. My interest in these fields is driven by my love for the arts and the satisfaction I get from bringing my ideas to life.</p>
              </div>
            </div>
          </section>
          <section className="stack">
            <div className="header-abt">   
              <h2 className="header-txt">stack</h2>
            </div>
            <div className="icons">
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="CSS3" src="icons/stack/css.png" alt="CSS logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Github" src="icons/stack/github.png" alt="Github logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="GSAP" src="icons/stack/GSAP.png" alt="GSAP logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="HTML5" src="icons/stack/html.png" alt="HTML logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="JS" src="icons/stack/js.png" alt="JS logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="JSX" src="icons/stack/jsx.png" alt="JSX logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="MySQL" src="icons/stack/MySQL.png" alt="MySQL logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="PHP" src="icons/stack/php.png" alt="PHP logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="React" src="icons/stack/react.png" alt="React logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="SASS" src="icons/stack/sass.png" alt="SASS logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Tailwind-CSS" src="icons/stack/tailwind-css.png" alt="Tailwind-CSS logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Unity" src="icons/stack/unity.png" alt="Unity logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Visual Studio Code" src="icons/stack/vscode.png" alt="Visual Studio Code logo"/>
             <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Vite" src="icons/stack/vite.png" alt="Vite logo"/>
            </div>
          </section>
          <section className="multimedia">
            <div className="header-abt">
              <h2 className="header-txt">multimedia</h2>
            </div>
            <div className="icons">
              <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="After Effects" src="icons/multimedia/after-effects.png" alt="After Effects logo"/>
              <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Blender" src="icons/multimedia/blender.png" alt="Blender logo"/>
              <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Figma" src="icons/multimedia/figma.png" alt="Figma logo"/>
              <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Photoshop" src="icons/multimedia/photoshop.png" alt="Photoshop logo"/>
              <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Rive" src="icons/multimedia/rive.png" alt="Rive logo"/>
              <img className="icon" data-tooltip-id="tooltip" data-tooltip-place="bottom" data-tooltip-content="Sone Vegas Pro" src="icons/multimedia/svp.png" alt="Sony Vegas Pro logo"/>
            </div>
            <Tooltip id="tooltip" />
          </section>
        </div>
      </section>
    </>
  )
}

export default About