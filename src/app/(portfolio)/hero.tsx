import { TypingAnimation } from '@/components/magicui/typing-animation';
import TypeWritter from '@/components/type-writter';
import { DownloadCloud, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ resume }: { resume: string }) => {
    return (
        <section className='flex flex-col'>
            <div className='relative h-screen flex justify-normal items-center mx-auto container w-full bg-none'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4' id='hero'>
                    <div className="flex flex-col justify-center items-center text-center gap-4 lg:gap-8 px-2 md:px-6">
                        <div className="text-md sm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-1 flex flex-col lg:flex-row items-center gap-4">
                            Hello, Myself
                            <span className="uppercase font-boldfont text-5xl text-primary">
                                <TypingAnimation>
                                    Rahul Das
                                </TypingAnimation>
                            </span>
                        </div>
                        <p className="font-regularfonts text-md sm:text-lg md:text-xl lg:text-2xl">
                            I am <TypeWritter />
                        </p>
                        <p className="font-italicfont text-md sm:text-base md:text-xl lg:text-3xl">
                            Welcome to Rahul Das{`'`}s web space! Join me on a journey of innovation and excellence in the world of Full Stack Web Development. Let{`'`}s explore together!
                        </p>
                        <p className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                            <Link href={"/#contact"} target={""} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-900 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12 text-primary">
                                    <PlusCircle className='w-4 h-4' />
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 text-white">
                                    <PlusCircle className='w-4 h-4' />
                                </span>
                                <span className="relative text-xs sm:text-sm lg:text-md w-full text-left transition-colors duration-200 ease-in-out text-primary group-hover:text-white">
                                    Contact Me
                                </span>
                            </Link>
                            <Link href={resume || '#'} target={"_blank"} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-900 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12 text-primary">
                                    <DownloadCloud className='w-4 h-4' />
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 text-white">
                                    <DownloadCloud className='w-4 h-4' />
                                </span>
                                <span className="relative text-xs sm:text-sm lg:text-md w-full text-left transition-colors duration-200 ease-in-out text-primary group-hover:text-white">
                                    Download CV
                                </span>
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center space-y-5">
                        <div className='relative w-[250px] h-[250px] lg:w-[550px] lg:h-[550px] bg-none rounded-full overflow-hidden'>
                            <Image
                                src="/01.webp"
                                alt="My Image"
                                layout="fill"
                                objectFit="contain" // Optional:  Use 'cover', 'contain', or 'fill'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero