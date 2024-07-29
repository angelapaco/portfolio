import React, { useRef, useEffect, forwardRef } from 'react';
import { useLocation } from 'react-router-dom';
import { SwitchTransition, Transition } from 'react-transition-group';
import { gsap } from 'gsap';
import './styles/Transitions.css';

const PageWrapper = forwardRef(({ children }, ref) => (
  <div ref={ref} className="page">
    {children}
  </div>
));

const Transitions = ({ children }) => {
  const location = useLocation();
  const circleIn = useRef(null);
  const circleOut = useRef(null);
  const mask = useRef(null);

  const nodeRef = useRef(null);  

  return (
    <>
      <div ref={circleOut} className="circleOut"></div>
      <div ref={circleIn} className="circleIn"></div>
      

      <SwitchTransition>
        <Transition
          key={location.pathname}
          timeout={500}
          nodeRef={nodeRef}
          onEnter={() => {
            console.log("page enter");
            const node = nodeRef.current;
            gsap.set(node, { autoAlpha: 1, scale: 1 });
            gsap.set(circleIn.current, { autoAlpha: 1, scale: 0});
            gsap.set(mask.current, { clipPath: 'circle(0%)' });
            const onIn = gsap.timeline({ paused: true });
            onIn.to(circleIn.current, { scale: 1, duration: 0, ease: 'power2' }); // yellow circle covers page before new page loads
            onIn.to(node, { autoAlpha: 1, duration: 0 }); // new page loads
            onIn.to(circleOut.current, { autoAlpha: 0, duration: 0 }); // removes lilac circle
            onIn.to(circleIn.current, { autoAlpha: 1, duration: 0 }); // removes yellow circle
            onIn.to(mask.current, { clipPath: 'circle(100%)', duration: 0.7, ease: 'power1.inOut' }); // reveals page
            onIn.play();
          }}
          onExit={() => {
            console.log("page exit");
            const node = nodeRef.current;
            gsap.set(node, { autoAlpha: 1 });
            gsap.set(circleOut.current, { autoAlpha: 1, clipPath: 'circle(0%)' });

            const onOut = gsap.timeline({ paused: true }); 
            onOut.to(circleOut.current, { duration: 0.5, clipPath: 'circle(100%)', ease: 'none' }); // pink circle covers old page
            onOut.play();
          }}
        >
          <PageWrapper ref={nodeRef}>
            <div ref={mask} className="mask">
              {children}
            </div>
          </PageWrapper>
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default Transitions;