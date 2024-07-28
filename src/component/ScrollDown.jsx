import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import './styles/ScrollDown.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollDown = () => {
    useGSAP(() => {
        let fadeTimeline = gsap.timeline({
            repeat: -1, 
            repeatDelay: 0.5,
            ease: "power4.inOut",
            paused: true 
        });

        fadeTimeline.fromTo(
            ".scroll", 
            { opacity: 0, ease: "power4.out",  }, 
            { opacity: 1, duration: 0.5 }) 
        .to(".scroll", { opacity: 0, duration: 0.5, delay: 0.3}); 
    
        fadeTimeline.play();
    
        gsap.timeline({
            scrollTrigger: {
                start: '40% 75%', 
                end: '100% 0%',
                // markers: true,
                toggleActions: 'play none none reverse',
                onEnter: () => {
                    fadeTimeline.pause();
                    gsap.to('.scroll', { opacity: 0 });
                },
                onLeaveBack: () => {
                    fadeTimeline.play();
                    gsap.to('.scroll', { opacity: 1 }); 
                }
            }
        });
    });
    
    return (
        <div className="scroll">please scroll down</div>
    )
}

export default ScrollDown