import React, { useRef } from 'react';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Works from './component/Works';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transitions from './component/Transitions';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const contentCon = useRef(null);

  useGSAP(() => {
    // Clear any previous ScrollTriggers to prevent duplication
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.timeline({
      scrollTrigger: {
        trigger: ".app-container",
        start: "0% 0%", 
        end: "bottom top",
        pin: 'nav', 
        pinSpacing: false,
        scrub: true,
        // markers: true
      } 
    });

    if (location.pathname === '/') {
      gsap.set(contentCon.current, { height: '200vh' });
      gsap.timeline({
        scrollTrigger: {
          trigger: ".app-container",
          start: "0% 0%", 
          end: "bottom top",
          pin: '.content-container', 
          pinSpacing: false,
          scrub: true,
          // markers: true
        } 
      });
    } else {
      gsap.set(contentCon.current, { height: '100vh' });
    }
  }, [location.pathname]); // Re-run the effect whenever the route changes

  return (
    <div className="app-container">
      <nav>
        <Navbar />
      </nav>
      <div ref={contentCon} className="content-container">
        <Routes>
          <Route path="/" element={<Transitions><Home /></Transitions>} />
          <Route path="/about" element={<Transitions><About /></Transitions>} />
          <Route path="/works" element={<Transitions><Works /></Transitions>} />
          <Route path="/contact" element={<Transitions><Contact /></Transitions>} />
        </Routes>
      </div>
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
