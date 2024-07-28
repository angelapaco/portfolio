import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SwitchTransition, Transition } from 'react-transition-group';
import { gsap } from 'gsap';
import './styles/Transitions.css'

const Transitions = ({ children }) => {
  const location = useLocation();
  const loadOutCircle = useRef(null);
  const loadInCircle = useRef(null);
  const pages = useRef(null);

  useEffect(() => {
    gsap.set(loadOutCircle.current, { scale: 0, autoAlpha: 0 });
    gsap.set(loadInCircle.current, { scale: 0, autoAlpha: 0 });
    gsap.set(pages.current, { scale: 1, autoAlpha: 0.5 });

    const handleExit = () => {
      console.log("page exit");
      const loadOut = gsap.timeline({ paused: true });
      loadOut.to(loadOutCircle.current, { scale: 1, duration: 0.3, autoAlpha: 1});
      loadOut.play();
    };

    const handleEnter = () => {
      console.log("page enter");
      const loadIn = gsap.timeline({ paused: true });
      loadIn.set(pages.current, { autoAlpha: 0 });
      loadIn.to(pages.current, { autoAlpha: 1, duration: 0.5 });
      loadIn.to(loadInCircle.current, { scale: 1, duration: 0.5, autoAlpha: 1});
      loadIn.play();
    };

    handleExit();
    handleEnter();
  }, [location]);

  return (
    <>
      <div ref={loadOutCircle} className="circleOut" />
      <div ref={loadInCircle} className="circleIn" />
      <div className="circleMask">
        <div ref={pages}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Transitions;