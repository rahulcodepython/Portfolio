import data from '@/data/data'
import React from 'react'

const Services = () => {
    return (
        <section className='bg-white py-10 -mt-1 px-10 md:px-32 lg:px-40 flex flex-col items-center gap-5 sm:gap-10' id='services'>
            <h1 className='text-xl md:text-3xl font-semibold'>My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                {
                    data.services.map((item, index) => {
                        return <div className='group/item shadow-lg cursor-default hover:shadow-2xl transition-all ease-in-out duration-300 p-5 flex flex-col items-center justify-center gap-3' key={index}>
                            <div className={`text-primary bg-slate-100 rounded-full p-4 text-center group-hover/item:text-white group-hover/item:bg-primary text-xl md:text-3xl`}>
                                {item[0]}
                            </div>
                            <div className='text-md md:text-lg lg:text-xl font-semibold mb-2 group-hover/item:text-primary'>
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