import React, { useEffect } from 'react';
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
import ScrollToTop from './component/ScrollToTop';

gsap.registerPlugin(ScrollTrigger);

const useScrollTriggers = (path) => {
  useEffect(() => {
    let contentPinner;

    if (path !== '/about') {
      contentPinner = gsap.timeline({
        scrollTrigger: {
          start: "0% 0%", 
          end: "bottom top",
          pin: '.content-container', 
          pinSpacing: false,
          scrub: true, 
          // markers: true
        } 
      });
    }

    return () => {
      if (contentPinner) contentPinner.scrollTrigger.kill();
    };
  }, [path]);
};

function ScrollTriggerManager() {
  const location = useLocation();
  useScrollTriggers(location.pathname);
  return null;
}

function App() {
  useGSAP(() => {
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
  });

  return (
    <Router>
      <ScrollTriggerManager />
      <ScrollToTop />
      <div className="app-container">
        <nav>
          <Navbar />
        </nav>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Transitions><Home /></Transitions>} />
            <Route path="/about" element={<Transitions><About /></Transitions>} />
            <Route path="/works" element={<Transitions><Works /></Transitions>} />
            <Route path="/contact" element={<Transitions><Contact /></Transitions>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
