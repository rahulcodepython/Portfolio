import { BiSolidChevronRight } from 'react-icons/bi'
import Data from '@/data/data'
import React from 'react'

const Resume = () => {
    return (
        <section className='bg-white p-5 sm:p-10 -mt-1 flex flex-col items-center gap-5 sm:gap-10' id='resume'>
            <h1 className='text-2xl md:text-4xl font-boldfont'>My Resume</h1>
            <div className='flex justify-around gap-4 flex-col lg:flex-row w-full'>
                <div className='shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col w-full lg:w-1/3'>
                    <span className='text-lg md:text-xl lg:text-2xl font-boldfont mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                        Education
                    </span>
                    <div className='flex flex-col gap-5 divide-y pt-2'>
                        {
                            Data.resume.education.map((item, index) => {
                                return <div className='first:pt-0 pt-4' key={index}>
                                    <div className='text-primary font-bold text-md md:text-lg lg:text-xl'>
                                        {item[0]}
                                    </div>
                                    <div className='text-lg tracking-wider font-boldfont mb-4'>
                                        {item[1]}
                                    </div>
                                    <div className='text-sm text-justify'>
                                        {item[2]}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col gap-5 w-full lg:w-1/3'>
                    <span className='text-lg md:text-xl lg:text-2xl font-boldfont mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                        Skills
                    </span>
                    <ul className="divide-y divide-primary flex flex-col w-full">
                        {
                            Data.resume.skills.map((item, index) => {
                                return <li className="py-2 first:pt-0 last:pb-0 flex items-center" key={index}>
                                    <BiSolidChevronRight className='text-primary' />
                                    <p className="text-xs md:text-sm font-semibold">{item}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col gap-5 w-full lg:w-1/3'>
                    <span className='text-lg md:text-xl lg:text-2xl font-boldfont mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                        Technologies
                    </span>
                    <div className='flex flex-wrap gap-5'>
                        {
                            Data.resume.tech.map((item, index) => {
                                return <div className='w-full' key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs md:text-sm font-semibold">{item[0]}</span>
                                        {/* <span className="text-xs md:text-sm font-medium">{item[1]}</span> */}
                                    </div>
                                    <div className="w-full rounded-full h-2.5">
                                        <div className="bg-primary h-1 rounded-full" style={{ "width": item[1] }}></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume