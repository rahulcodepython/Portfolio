import { BiSolidChevronRight } from 'react-icons/bi'
import Image from 'next/image'
import React from 'react'

const About = () => {

    const experties = [
        'Backend Developer',
        'Frontend Developer',
        'Database',
        'Server Management',
        'Project Manager',
        'Full Stack Developer',
        'Cloud Management',
    ]

    return (
        <section className='bg-white flex flex-col lg:flex-row justify-around gap-2 sm:gap-5 p-5 sm:p-10' id='about'>
            <div className='p-10 flex flex-col items-start justify-start gap-5 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg w-full lg:w-1/3'>
                <div className='text-lg md:text-xl lg:text-2xl font-extrabold mb-10 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                    Who am I ?
                </div>
                <div className='text-sm md:text-md lg:text-lg font-semibold first-letter:text-primary'>
                    A Web Designer / Developer Located In Our Lovely Earth
                </div>
                <div className='indent-4 text-sm font-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?
                </div>
            </div>
            <div className="shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg px-10 w-full lg:w-1/3 flex flex-col items-center justify-center">
                <div className="photo-wrapper p-2">
                    <Image className="rounded-full mx-auto" width={128} height={128} src="/image/me.png" alt="Rahul Das" />
                </div>
                <div className="p-2">
                    <h3 className="text-center text-2xl text-primary font-semibold leading-8">Rahul Das</h3>
                    <div className="text-center text-sm font-semibold">
                        <p>Web Developer</p>
                    </div>
                    <table className="text-sm my-3">
                        <tbody>
                            <tr>
                                <td className="px-2 py-2 font-semibold">Address</td>
                                <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 font-semibold">Phone</td>
                                <td className="px-2 py-2">+977 9955221114</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 font-semibold">Email</td>
                                <td className="px-2 py-2">john@exmaple.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='p-10 flex flex-col items-start justify-start gap-5 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg w-full lg:w-1/3'>
                <div className='text-lg md:text-xl lg:text-2xl font-extrabold mb-10 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                    My Experties
                </div>
                <ul className="divide-y divide-primary flex flex-col w-full">
                    {
                        experties.map((item, index) => {
                            return <li className="py-2 first:pt-0 last:pb-0 flex items-center" key={index}>
                                <BiSolidChevronRight className='text-primary' />
                                <p className="text-sm font-medium">{item}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default About