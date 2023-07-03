"use client"
import { BiRightArrowAlt, BiSolidPlusCircle } from 'react-icons/bi'
import '../../../public/css/hero.css'
import Typed from "typed.js";
import React from 'react'

const Hero = () => {
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
        <section className='container mx-auto flex flex-col md:flex-row justify-around items-center h-screen'>
            <div className="flex flex-col justify-center items-center text-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-1 font-semibold text-white">
                    Hello, It's me
                </p>
                <p className="uppercase text-white font-extrabold">
                    <svg>
                        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                            Rahul Das
                        </text>
                    </svg>
                </p>
                <p className="text-white font-bold text-xl sm:text-2xl md:3xl lg:4xl">
                    I am <span ref={typing}></span>
                </p>
                <p className='mt-10 flex justify-center items-center gap-5'>
                    <a href="" className="relative inline-flex items-center justify-start text-xl py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <BiRightArrowAlt className="w-5 h-5 text-primary" />
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <BiRightArrowAlt className="w-5 h-5 text-white" />
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Hire Me</span>
                    </a>
                    <a href="" className="relative inline-flex items-center justify-start text-xl py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <BiSolidPlusCircle className="w-5 h-5 text-primary" />
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <BiSolidPlusCircle className="w-5 h-5 text-white" />
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Contact Me</span>
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Hero