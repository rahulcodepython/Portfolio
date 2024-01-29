import { BiSolidChevronRight } from '@/data/icons'
import Image from 'next/image'
import React from 'react'
import Data from '@/data/data'

const About = () => {
    return (
        <section className='bg-white flex flex-col lg:flex-row justify-around gap-2 sm:gap-5 p-5 sm:p-10' id='about'>
            <div className='p-10 flex flex-col items-start justify-center gap-5 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg w-full lg:w-1/3'>
                <div className='text-lg md:text-xl lg:text-2xl font-boldfont mb-10 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                    Who am I ?
                </div>
                <div className='indent-4 text-sm font-medium text-justify'>
                    {Data.about.aboutMe}
                </div>
            </div>
            <div className="shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg px-10 w-full lg:w-1/3 flex flex-col items-center justify-center">
                <div className="photo-wrapper p-2">
                    <Image className="rounded-full mx-auto" width={128} height={128} src="https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2Fme.png?alt=media&token=aa8ed29d-8ce1-47f4-898c-2706b9885374" alt="Rahul Das" />
                </div>
                <div className="p-2">
                    <h3 className="text-center text-2xl text-primary font-semibold leading-8">Rahul Das</h3>
                    <div className="text-center text-xs font-semibold">
                        Full Stack Web Developer
                    </div>
                    <table className="text-sm my-3">
                        <tbody>
                            {
                                Data.about.myDetails.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="px-2 py-2 font-boldfont text-xl">{item[0]}</td>
                                        <td className="px-2 py-2">{item[1]}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='p-10 flex flex-col items-start justify-start gap-5 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg w-full lg:w-1/3'>
                <div className='text-lg md:text-xl lg:text-2xl font-boldfont mb-10 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                    My Experties
                </div>
                <ul className="divide-y divide-primary flex flex-col w-full">
                    {
                        Data.about.experties.map((item, index) => {
                            return <li className="py-2 first:pt-0 last:pb-0 flex items-center" key={index}>
                                <BiSolidChevronRight className='text-primary' />
                                <p className="text-sm font-semibold">{item}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default About