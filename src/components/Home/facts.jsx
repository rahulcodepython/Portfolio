import { BiNews, BiSupport, BiTimeFive } from 'react-icons/bi'
import React from 'react'

const Facts = () => {
    const facts = [
        [<BiNews />, 520, 'Projects'],
        [<BiTimeFive />, 520, 'Year Of Experience'],
        [<BiSupport />, '24x7', 'Support'],
    ]
    return (
        <section className='backdrop-brightness-75 py-10 -mt-1 px-10 flex flex-col items-center gap-10'>
            <h1 className='text-xl md:text-3xl text-white font-semibold'>Facts</h1>
            <div className='flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-around w-full'>
                {
                    facts.map((item, index) => {
                        return <div key={index} className='flex flex-col items-center text-white gap-4'>
                            <div className='bg-primary text-xl md:text-3xl p-2 rounded-full flex items-center'>
                                {item[0]}
                            </div>
                            <div className='text-lg md:text-2xl font-semibold'>
                                {item[1]}
                            </div>
                            <div className='font-bold text-md md:text-xl'>
                                {item[2]}
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Facts