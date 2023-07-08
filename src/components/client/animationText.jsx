"use client"
import Typed from "typed.js";
import React from 'react'

const AnimationText = () => {
    const typing = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(typing.current, {
            strings: [
                "Full Stack Web Developer",
                "Frontend Developer",
                "Backend Developer",
            ],
            startDelay: 300,
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <span ref={typing}></span>
    )
}

export default AnimationText