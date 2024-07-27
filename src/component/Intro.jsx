import React, { useEffect } from 'react';
import './styles/Intro.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';


gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  useGSAP(() => {
    const splitName = new SplitType('#name-txt', { types: 'chars' });

    function splitText(elements, splitOptions) {
      elements.forEach(id => {
        const splitInstance = new SplitType(id, splitOptions);
        const splitTextAnimation = gsap.fromTo(
          `${id} .word`,
          { 
            opacity: 0,
            y: 30,
          },
          { 
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            delay: 1,
            ease: "power4.back",
            paused: true // Start paused so it only plays when triggered
          }
        );
    
        // store the animation instance on the element for later use
        document.querySelector(id).animation = splitTextAnimation;
      });
    }

    // Initialize the split text and animation
    splitText(['#course-txt', '#passion-txt', '#hobby-txt'], { types: 'words' });

    // load in name animation after page loads
    gsap.fromTo(
      "#name-txt .char",
      { 
        opacity: 0,
        // x: 30,
      },
      { 
        opacity: 1,
        // x: 0,
        stagger: 0.07,
        duration: 0.7,
        ease: "power4.back"
      }
    );

    // pin texts to center while scrolling
    gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: "top top", 
        pin: true, 
        pinSpacing: false,
        markers: true
      }
    });

    // name load in animation using .char
    function nameIn() {
      gsap.fromTo(
        "#name-txt .char",
        { 
          opacity: 0,
          // x: 30,
        },
        { 
          opacity: 1,
          // x: 0,
          stagger: 0.07,
          duration: 0.7,
          ease: "power4.back"
        }
      );
    }
    
    // name out animation
    function nameOut() {
      const nameOutAnim = gsap.fromTo(
        `#name-txt .char`,
        { 
          opacity: 1,
          // y: 0,
        },
        { 
          opacity: 0,
          // y: -30,
          stagger: 0.07,
          duration: 0.3,
          ease: "power4.back",
          paused: true // Start paused so it only plays when triggered
        }
      );
      nameOutAnim.play();
    }

    // text in animations
    function textIn(textID) {
      const element = document.querySelector(textID);
      if (element && element.animation) {
        element.animation.play();
      }
    }

    // text out animations
    function textOut(textID) {
      const element = document.querySelector(textID);
      if (element && element.animation) {
        element.animation.reverse();
      }
    }

    // animate course in
    const courseIn = gsap.timeline();
    courseIn.fromTo(
      ".course",
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '#trigger',
          start: "bottom 80%",
          end: "bottom 65%",
          markers: { startColor: "black", endColor: "red" },
          scrub: 1.5,
          toggleActions: "play reverse play reverse", 
          onEnter: () => {
            nameOut();
            textIn('#course-txt');
          },
          onLeaveBack: () => {
            textOut('#course-txt');
            nameIn();
          }
        }
      }
    );

    // animate passion in
    const passionIn = gsap.timeline();
    passionIn.fromTo(
      ".passion",
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '#trigger',
          start: "bottom 50%",
          end: "bottom 35%",
          markers: { startColor: "orange", endColor: "blue" },
          scrub: 1,
          toggleActions: "play reverse play reverse", 
          onEnter: () => {
            textOut('#course-txt');
            textIn('#passion-txt');
          },
          onLeaveBack: () => {
            textOut('#passion-txt');
            textIn('#course-txt');
          }
        }
      }
    );

    // animate hobby in
    const hobbyIn = gsap.timeline();
    hobbyIn.fromTo(
      ".hobby",
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '#trigger',
          start: "top 15%",
          end: "top 0px",
          markers: {startColor: "pink", endColor: "violet"},
          scrub: 1,
          toggleActions: "play reverse play reverse", 
          onEnter: () => {
            textOut('#passion-txt');
            textIn('#hobby-txt');
          },
          onLeaveBack: () => {
            textOut('#hobby-txt');
            textIn('#passion-txt');
          }
        }
      }
    );

    // TODO change passion
    passionIn
    .to('body', {duration: 1})
    .set('.passion span', { innerHTML: "Frontend"}, 0.33);
  
    // TODO change hobby
    hobbyIn
    .to('body', {duration: 1})
    .set('.hobby span', { innerHTML: "Video Editor"}, 0.77);
  }, []); 

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div id="name-txt" className="texts">
            <h1>Name</h1> 
          </div>
          <div id="course-txt" className="second-txt texts">
            <h1 className="course">Computer Science Student</h1> 
          </div>
          <div id="passion-txt" className="change-passion texts">
            <h1 className="passion">
              Passionate about <br/> <span className="newTxt">Game Development</span> 
            </h1>
          </div>
          <div id="hobby-txt" className="change-hobby texts">
            <h1 className="hobby">
              Hobbyist <br/> <span className="newTxt">artist</span> 
            </h1>
          </div>
          <div id="trigger">bugsh</div>
        </div>
      </div>
    </>
  );
}

export default Intro;
