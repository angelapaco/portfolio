import React from 'react';
import './styles/Intro2.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const Intro2 = () => {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container1",
                start: "top top", 
                pin: true, 
                pinSpacing: false,
                scrub: true,
                // markers: true
            }
        });

        const audioFiles = [
            '/audio/txtIn.mp3',
            '/audio/txtOut.mp3'
        ]

        function playAudio(index) {
            const audio = new Audio(audioFiles[index]);
            audio.play();
        }

        const updateIntro = gsap.timeline({
            scrollTrigger: {
                trigger: '.trigger',
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
            <nav>
                <Navbar/>
            </nav>
            <div className="wrapper1">
                <h1 className="intro-txt"><span>ANGELA PACO</span></h1>
                <div id="trigger"></div>
            </div>
        </div>
    </>
    
    );
};

export default Intro2;
