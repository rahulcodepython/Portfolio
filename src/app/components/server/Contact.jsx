import Data from '@/data/data'
import React from 'react'
import FormComponent from '../client/FormComponent'

const Contact = () => {
    return (
        <section className='bg-white dark:bg-black p-5 sm:p-10 flex flex-col items-center gap-10' id='contact'>
            <h1 className='text-2xl md:text-4xl font-boldfont'>Contact Us</h1>
            <div className='flex flex-col lg:flex-row-reverse gap-10 lg:gap-5 w-full'>
                <div className='w-full lg:w-2/3'>
                    <FormComponent />
                </div>
                <div className='w-full lg:w-1/3'>
                    {
                        Data.contacticons.map((icon, index) => {
                            return <div className='w-full flex items-center gap-4 group/icon shadow-lg hover:shadow-2xl rounded-lg p-8 transition-all ease-in-out duration-300' key={index}>
                                <div className='bg-slate-100 text-primary group-hover/icon:bg-primary group-hover/icon:text-white transition-colors ease-in-out duration-300 p-2 text-2xl rounded-full'>
                                    {icon[0]}
                                </div>
                                <div className='flex flex-col items-start justify-center gap-1'>
                                    <div className='font-boldfont text-lg md:text-xl lg:text-2xl'>
                                        {icon[1]}
                                    </div>
                                    <div className='text-sm'>
                                        {icon[2]}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Contact