import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { SwitchTransition, Transition } from 'react-transition-group';
import { gsap } from 'gsap';
import './styles/Transitions.css';

const PageWrapper = React.forwardRef(({ children }, ref) => (
  <div ref={ref} className="page">
    {children}
  </div>
));

const Transitions = ({ children }) => {
  const location = useLocation();
  const circleIn = useRef(null);
  const circleOut = useRef(null);
  const mask = useRef(null);
  const tsWrapper = useRef(null);

  const nodeRef = useRef(null);

  return (
    <>
      <div ref={tsWrapper} className="transition-wrapper">
        <div ref={circleOut} className="circleOut"></div>
        <div ref={circleIn} className="circleIn"></div>
      </div>

      <SwitchTransition>
        <Transition
          key={location.pathname}
          timeout={550}
          nodeRef={nodeRef}
          onEnter={() => {
            const node = nodeRef.current;
            gsap.set(node, { autoAlpha: 1, scale: 1 });
            gsap.set(circleIn.current, { autoAlpha: 1, scale: 0 });
            gsap.set(mask.current, { clipPath: 'circle(0%)' });
            gsap.set(tsWrapper.current, { autoAlpha: 1, zIndex: 0 });

            const onIn = gsap.timeline({ paused: true });
            onIn.to(circleIn.current, { scale: 1, duration: 0, ease: 'power2' });
            onIn.to(node, { autoAlpha: 1, duration: 0 });
            onIn.to(circleOut.current, { autoAlpha: 0, duration: 0 }); 
            onIn.to(circleIn.current, { autoAlpha: 1, duration: 0 }); 
            onIn.to(mask.current, { clipPath: 'circle(100%)', duration: 0.7, ease: 'power1.inOut' }, 0);
            onIn.play();
          }}
          onExit={() => {
            const node = nodeRef.current;
            gsap.set(node, { autoAlpha: 1 });
            gsap.set(circleOut.current, { autoAlpha: 1, clipPath: 'circle(0%)' });
            gsap.set(tsWrapper.current, { autoAlpha: 1, zIndex: 3, clipPath: 'circle(0%)' });

            const onOut = gsap.timeline({ paused: true });
            onOut.to(tsWrapper.current, { duration: 0.5, clipPath: 'circle(100%)', ease: 'none' }, 0);
            onOut.to(circleOut.current, { duration: 0.5, clipPath: 'circle(100%)', ease: 'none' }, 0);
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