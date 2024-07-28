import React, { useEffect } from 'react'
import './styles/Cursor.css';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Cursor = () => {
    let cursor = document.querySelector('.cursor')
    let mouseX = 0
    let mouseY = 0

    useGSAP(() => {
        gsap.to({}, 0.01, {
            repeat: -1,
            onRepeat: function followMouse() {
                gsap.set(cursor, {
                    css: {
                        left: mouseX + 10,
                        top: mouseY - 20,
                    }
                })
            }
        });
        window.addEventListener('mousemove', (e)=> {
            mouseX = e.clientX;
            mouseY = e.clientY;
        })
    });

    

    return (
     <div className="cursor">scroll</div>
    )
}

export default Cursor