import Data from '@/data/data'
import React from 'react'

const Services = () => {
    const possibleBG = [
        'group-hover/item:bg-sky-500',
        'group-hover/item:bg-orange-500',
        'group-hover/item:bg-pink-500',
        'group-hover/item:bg-lime-500',
        'group-hover/item:bg-yellow-500',
        'group-hover/item:bg-purple-500',
    ]

    const possibleText = [
        'text-sky-500',
        'text-orange-500',
        'text-pink-500',
        'text-lime-500',
        'text-yellow-500',
        'text-purple-500',
        'group-hover/item:text-sky-500',
        'group-hover/item:text-orange-500',
        'group-hover/item:text-pink-500',
        'group-hover/item:text-lime-500',
        'group-hover/item:text-yellow-500',
        'group-hover/item:text-purple-500',
    ]

    return (
        <section className='bg-white dark:bg-black py-10 -mt-1 px-10 md:px-32 lg:px-40 flex flex-col items-center gap-5 sm:gap-10' id='services'>
            <h1 className='text-2xl md:text-4xl font-boldfont'>My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                {
                    Data.services.map((item, index) => {
                        return <div className='group/item shadow-lg cursor-default hover:shadow-2xl transition-all ease-in-out duration-300 p-5 flex flex-col items-center justify-center gap-3' key={index}>
                            <div className={`text-${item[3]}-500 bg-slate-100 rounded-full p-4 text-center group-hover/item:text-white group-hover/item:bg-${item[3]}-500 text-xl md:text-3xl`}>
                                {item[0]}
                            </div>
                            <div className={`text-lg tracking-wide md:text-xl font-boldfont mb-2 group-hover/item:text-${item[3]}-500`}>
                                {item[1]}
                            </div>
                            <div className='text-sm px-4 text-justify'>
                                {item[2]}
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Services