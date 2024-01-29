import Data from '@/data/data'
import React from 'react'

const Facts = () => {
    return (
        <section className='backdrop-brightness-50 py-10 px-10 flex flex-col items-center gap-10'>
            <h1 className='text-3xl md:text-4xl text-white font-boldfont'>Facts</h1>
            <div className='flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-around w-full'>
                {
                    Data.facts.map((item, index) => {
                        return <div key={index} className='flex flex-col items-center text-white gap-4'>
                            <div className='bg-primary text-xl md:text-3xl p-2 rounded-full flex items-center'>
                                {item[0]}
                            </div>
                            <div className='text-xl md:text-2xl font-boldfont'>
                                {item[1]}
                            </div>
                            <div className='font-boldfont text-xl md:text-2xl tracking-wide'>
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