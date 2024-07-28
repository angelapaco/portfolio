// components/PageTransition.js
import React from 'react';
import { motion } from 'framer-motion';
import './styles/transition.css';

const transition = {
  duration: 1,
  ease: [0.63, 0.02, 0.27, 0.97]
};

const transition1 = {
  duration: 1,
  ease: [.63, .02, .66, .99]
};



const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        className="slideIn"
        initial={{ scaleY: 0, scaleX: 0}}
        animate={{ scaleY: 1, scaleX: 1}}
        exit={{ scaleY: 0, scaleX: 0}}
        transition={transition1}
      />
      <motion.div
        className="slideOut"
        initial={{scaleY: 0, scaleX: 0}}
        animate={{scaleY: 1, scaleX: 1}}
        exit={{scaleY: 0, scaleX: 0}}
        transition={transition}
      >
      {/*
      <motion.div
        className="slideOut2"
        initial={{scaleY: 0, scaleX: 0}}
        animate={{scaleY: 1, scaleX: 1}}
        exit={{scaleY: 0, scaleX: 0}}
        transition={transition} 
      >
      </motion.div> */}
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
