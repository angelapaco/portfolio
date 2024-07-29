import React from 'react'
import './styles/About.css'


const About = () => {
  return (
    <>
      <section className='about-container'>
        <div className="about-wrapper">
          <section className="about-me">
            <div className="photo">
              <img className="onex1" src="public/audio/1x1.png" alt="1x1"/>
            </div>
            <div className="texts">
              <div className="name-txt">
                <h2 className="name-abt">Angela Paco</h2>
              </div>
              <div className="about-txt-wrapper">
                <p className='about-txt'>I’m a third-year computer science student with a strong passion for frontend and game development. My interest in these fields is driven by my love for the arts and the immense satisfaction I get from bringing my creative ideas to life and overcoming challenges.</p>
              </div>
            </div>
          </section>
          <section className="stack">
            <div className="stack-header">   
              <h2 className="stack-txt">stack</h2>
            </div>
            <div className="stack-icons">
             <img className="stack-icon" src="public/icons/css.png" alt=""/>
             <img className="stack-icon" src="public/icons/github.png" alt=""/>
             <img className="stack-icon" src="public/icons/GSAP.png" alt=""/>
             <img className="stack-icon" src="public/icons/html.png" alt=""/>
             <img className="stack-icon" src="public/icons/js.png" alt=""/>
             <img className="stack-icon" src="public/icons/jsx.png" alt=""/>
             <img className="stack-icon" src="public/icons/MySQL.png" alt=""/>
             <img className="stack-icon" src="public/icons/php.png" alt=""/>
             <img className="stack-icon" src="public/icons/react.png" alt=""/>
             <img className="stack-icon" src="public/icons/scss.png" alt=""/>
             <img className="stack-icon" src="public/icons/tailwind-css.png" alt=""/>
             <img className="stack-icon" src="public/icons/unity.png" alt=""/>
             <img className="stack-icon" src="public/icons/vscode.png" alt=""/>
             <img className="stack-icon" src="public/icons/vite.png" alt=""/>
            </div>
          </section>
          <section className="multimedia">
            <h2 className="multimedia-txt">multimedia</h2>
            <div className="multimedia-icons">

            </div>
          </section>
        </div>
      </section>
    </>

    /*
    <div className="about-container">
      <div className="about-wrapper">
        <div className="header">
          <div className="photo">
            <img className="onex1" src="public/audio/1x1.png" alt="my 1x1"/>
          </div>
          <div className="name">Angela Paco</div>
        </div>
        <div className="texts">
          <p>I’m a third-year computer science student with a strong passion for frontend and game development. My interest in these fields is driven by my love for the arts and the immense satisfaction I get from bringing my creative ideas to life. </p>
        </div>
      </div>
    </div> */
    
  )
}

export default About;