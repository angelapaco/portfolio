import React from 'react'
import './styles/Contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="github-wrapper">
          <p>My Github profile</p>
          <a href="https://github.com/angelapaco" target="_blank" className='email'>
            <img src="/svg/github-mark.svg" alt="email svg icon"/>
            <p>angelapaco</p>
          </a>
        </div>
        <div className="email-wrapper">
          <p>You can send me an email here!</p>
          <a href="mailto:janice.paco@gmail.com" className='email'>
            <img src="/svg/email.svg" alt="email svg icon"/>
            <p>janice.paco@gmail.com</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact