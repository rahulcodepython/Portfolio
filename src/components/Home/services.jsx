import { BiBookmark } from 'react-icons/bi'
import React from 'react'

const Services = () => {
    const services = [
        [<BiBookmark key={1} />, 'lorem', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis.', 'text-orange-500', 'group-hover/item:bg-orange-500'],
        [<BiBookmark key={1} />, 'lorem', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis.', 'text-pink-500', 'group-hover/item:bg-pink-500'],
        [<BiBookmark key={1} />, 'lorem', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis.', 'text-green-500', 'group-hover/item:bg-green-500'],
        [<BiBookmark key={1} />, 'lorem', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis.', 'text-blue-500', 'group-hover/item:bg-blue-500'],
        [<BiBookmark key={1} />, 'lorem', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis.', 'text-yellow-500', 'group-hover/item:bg-yellow-500'],
        [<BiBookmark key={1} />, 'lorem', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis.', 'text-cyan-500', 'group-hover/item:bg-cyan-500']
    ]
    return (
        <section className='bg-white py-10 -mt-1 px-10 md:px-32 lg:px-40 flex flex-col items-center gap-10' id='services'>
            <h1 className='text-xl md:text-3xl font-semibold'>My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                {
                    services.map((item, index) => {
                        return <div className='group/item shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 p-5 flex flex-col items-center justify-center gap-3' key={index}>
                            <div className={`${item[3]} bg-slate-100 rounded-full p-4 text-center ${item[4]} group-hover/item:text-white text-xl md:text-3xl`}>
                                {item[0]}
                            </div>
                            <div className='text-md md:text-lg lg:text-xl font-semibold mb-2'>
                                {item[1]}
                            </div>
                            <div className='text-sm text-center'>
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