import React from 'react';
import './styles/Home.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useGSAP(() => {
        // pinning of container
        gsap.timeline({
            scrollTrigger: {
                trigger: "app-container",
                start: "0% top", 
                end: "bottom top",
                pin: '.container1', 
                pinSpacing: false,
                scrub: true,
                // markers: {startColor: "pink", endColor: "violet"}
            }
        }); 

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
        
        // scroll down indicator animation
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

        const audioFiles = [
            '/audio/txtIn.mp3',
            '/audio/txtOut.mp3'
        ]

        function playAudio(index) {
            const audio = new Audio(audioFiles[index]);
            audio.play().catch((error) => {
                if (error.name === 'NotAllowedError' || error.name === 'DOMException') {
                    console.warn('Autoplay is disabled. User interaction with the page is required to play audio. https://goo.gl/xX8pDD');
                } else {
                    console.error('An error occurred while trying to play the audio:', error);
                }
            });
        }

        const updateIntro = gsap.timeline({
            scrollTrigger: {
                start: '50% 95%',
                end: '90% 10%',
                scrub: true,
                // markers: {startColor: "pink", endColor: "violet"},
            }
            })
            
        updateIntro
        .to('body', {duration: 1})
        .set('.intro-txt span', { innerHTML: "Computer Science Student"}, 0.03)
        .set('.intro-txt span', { style: "font-size: 8vw;"}, 0.03)
        .call(() => playAudio(0), null, 0.03)

        .set('.intro-txt span', { innerHTML: 'Passionate about <br> <span class="change">Game Development</span>'}, 0.14)
        .call(() => playAudio(0), null, 0.14)

        .set('.intro-txt span', { innerHTML: "Passionate about <br> Frontend Development"}, 0.25)
        .call(() => playAudio(0), null, 0.25)

        .set('.intro-txt span', { innerHTML: "Hobbyist <br> artist"}, 0.36)
        .call(() => playAudio(0), null, 0.36)

        .set('.intro-txt span', { innerHTML: "Hobbyist <br> video editor"}, 0.47)
        .call(() => playAudio(0), null, 0.47)
    }, []);

    return (
    <>
        <div className="container1">
            <div className="wrapper1">
                <h1 className="intro-txt"><span>Angela</span></h1>
                <div className="scroll">please scroll down</div>
            </div>
        </div>
    </>
    );
};

export default Home;