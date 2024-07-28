import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Works from './component/Works';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Cursor from './component/Cursor';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './component/PageTransition';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function App() {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "app-container",
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
      <div className="app-container">
        <nav>
          <Navbar />
        </nav>
        <div className="content-container">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

/*
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}


function AppWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/works" element={<PageTransition><Works /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App; */
