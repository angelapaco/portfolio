import React, { useRef, useState, useEffect } from 'react';
import { Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
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
  const [refreshHome, setRefreshHome] = useState(false);

  useGSAP(() => {
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

    if (location.pathname === '/portfolio/' || location.pathname === '/portfolio' || location.pathname === '/') {
      console.log("200vh height");
      gsap.set(contentCon.current, { height: '200vh' });
      setRefreshHome(true); 
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
      console.log("100vh height");
      gsap.set(contentCon.current, { height: '100vh' });
      setRefreshHome(false);
    }
  }, [location.pathname]); 

  useEffect(() => {
    if (refreshHome) {
      setRefreshHome(false);
    }
  }, [refreshHome]);

  return (
    <div className="app-container">
      <nav>
        <Navbar />
      </nav>
      <div ref={contentCon} className="content-container">
        <Routes>
          <Route path="/" element={<Transitions><Home key={refreshHome} /></Transitions>} />
          <Route path="/about" element={<Transitions><About /></Transitions>} />
          <Route path="/works/site" element={<Transitions><Works /></Transitions>} />
          <Route path="/works/game" element={<Works />} />
          <Route path="/works/multimedia" element={<Works />} />
          <Route path="/contact" element={<Transitions><Contact /></Transitions>} />
        </Routes>
      </div>
    </div>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
