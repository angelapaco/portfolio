import React from 'react'
import './styles/Contact.css'
import useSound from 'use-sound';
import boopLink from '/src/assets/audio/boopLink.mp3';

const Contact = () => {
  const boopLinkSrc = boopLink;
  const [playBoop] = useSound(boopLinkSrc);


  return (
    <>
      <div className="contact">
        <div className="github-wrapper">
          <p>My Github profile</p>
          <a href="https://github.com/angelapaco" target="_blank" className='contact-link' onMouseEnter={playBoop}>
            <img src="/src/assets/svg/github-mark.svg" alt="email svg icon"/>
            <p>angelapaco</p>
          </a>
        </div>
        <div className="email-wrapper">
          <p>You can send me an email here!</p>
          <a href="mailto:janice.paco@gmail.com" className='contact-link' onMouseEnter={playBoop}>
            <img src="/src/assets/svg/email.svg" alt="email svg icon"/>
            <p>janice.paco@gmail.com</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact