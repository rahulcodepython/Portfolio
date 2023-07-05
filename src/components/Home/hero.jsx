"use client"
import { BiRightArrowAlt, BiSolidPlusCircle, BiSolidCloudDownload } from 'react-icons/bi'
import Typed from "typed.js";
import React from 'react'
import Link from 'next/link';

const Hero = () => {
    const typing = React.useRef(null);

    const button = [
        ['/', 'Hire Me', <BiRightArrowAlt key={1} />],
        ['/', 'Contact Me', <BiSolidPlusCircle key={1} />],
        ['/', 'Download CV', <BiSolidCloudDownload key={1} />],
    ]

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
        <section className='container mx-auto flex flex-col md:flex-row justify-around items-center h-screen' id='hero'>
            <div className="flex flex-col justify-center items-center text-center">
                <p className="text-white font-bold text-md sm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-1">
                    Hello, It{`'`}s me
                </p>
                <p className="hero-text uppercase text-white font-extrabold">
                    <svg>
                        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                            Rahul Das
                        </text>
                    </svg>
                </p>
                <p className="text-white font-bold text-md sm:text-lg md:text-xl lg:text-2xl">
                    I am <span ref={typing}></span>
                </p>
                <p className='mt-10 flex flex-col sm:flex-row justify-center items-center gap-5'>
                    {
                        button.map((item, index) => {
                            return <Link href={item[0]} key={index} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12 text-primary">
                                    {item[2]}
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 text-white">
                                    {item[2]}
                                </span>
                                <span className="relative text-xs sm:text-sm lg:text-md w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                    {item[1]}
                                </span>
                            </Link>
                        })
                    }
                </p>
            </div>
        </section>
    )
}

export default Hero