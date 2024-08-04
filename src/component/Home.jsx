import React, { useEffect } from 'react';
import './styles/Home.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollDown from './ScrollDown';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    console.log("home up");
    useGSAP(() => {  
        gsap.timeline({
            scrollTrigger: {
                start: "0% 0%", 
                end: "bottom top",
                pin: '.container1', 
                pinSpacing: false,
                scrub: true,
                // markers: true
            } 
        });

        const audioFiles = [
            './src/assets/audio/txtIn.mp3',
            './src/assets/audio/txtOut.mp3'
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

        const updateTexts = gsap.timeline({            
            scrollTrigger: {
                start: '50% 95%',
                end: '90% 10%',
                scrub: true,
                // markers: {startColor: "pink", endColor: "violet"},
            }
        })
        updateTexts
        .to('body', {duration: 1})
        .set('.intro-txt span', { innerHTML: "Computer Science Student"}, 0.03)
        .set('.intro-txt span', { fontSize: "8vw"}, 0.03)
        .call(() => playAudio(0), null, 0.03)
        .set('.intro-txt span', { innerHTML: 'Game Development <br> enthusiast'}, 0.14)
        .call(() => playAudio(0), null, 0.14)
        .set('.intro-txt span', { innerHTML: "Frontend Development <br> enthusiast"}, 0.25)
        .call(() => playAudio(0), null, 0.25)
        .set('.intro-txt span', { innerHTML: "Hobbyist <br> artist"}, 0.36)
        .call(() => playAudio(0), null, 0.36)
        .set('.intro-txt span', { innerHTML: "Hobbyist <br> video editor"}, 0.47)
        .call(() => playAudio(0), null, 0.47);
    }, []);

    return (
    <>
        <div className="container1">
            <div className="wrapper1">
                <h1 className="intro-txt"><span>Angela</span></h1>
                <ScrollDown/>
            </div>
        </div>
    </>
    );
};

export default Home;