import Data from '@/data/data';
import Link from 'next/link';
import React from 'react'
import TypeWritter from '../client/TypeWritter';

const Hero = () => {
    return (
        <section className='container mx-auto flex flex-col md:flex-row justify-around items-center h-screen' id='hero'>
            <div className="flex flex-col justify-center items-center text-center space-y-5">
                <p className="text-white font-bold text-md sm:text-lg md:text-xl lg:text-4xl mb-2 md:mb-1">
                    Hello, It{`'`}s me
                </p>
                <p className="uppercase text-white font-boldfont text-7xl">
                    Rahul Das
                </p>
                <p className="text-white font-regularfonts text-md sm:text-lg md:text-xl lg:text-2xl">
                    I am <TypeWritter />
                </p>
                <p className="text-white font-italicfont text-md sm:text-base md:text-xl lg:text-3xl">
                    Welcome to Rahul Das{`'`}s web space! Join me on a journey of innovation and excellence in the world of Full Stack Web Development. Let{`'`}s explore together!
                </p>
                <p className='pt-10 flex flex-col sm:flex-row justify-center items-center gap-5'>
                    {
                        Data.hero.button.map((item, index) => {
                            return <Link href={item[0]} key={index} target={item[3]} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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