"use client"
import { BiMap, BiEnvelope, BiPhoneCall } from 'react-icons/bi'
import React from 'react'

const Contact = () => {
    const handleForm = (e) => {
        e.preventDefault();
    }
    const icons = [
        [<BiMap key={1} />, 'Location', 'Lorem ipsum dolor sit amet.'],
        [<BiEnvelope key={1} />, 'Email', 'Lorem ipsum dolor sit amet.'],
        [<BiPhoneCall key={1} />, 'Call', 'Lorem ipsum dolor sit amet.'],
    ]
    return (
        <section className='bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10' id='contact'>
            <h1 className='text-xl md:text-3xl font-semibold'>Contact Me</h1>
            <div className='flex flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-5 w-full'>
                <form onSubmit={(e) => handleForm(e)} className='flex flex-col gap-5 justify-center items-center px-0 lg:px-10 w-full lg:w-2/3'>
                    <div className='flex gap-4 items-center justify-center w-full'>
                        <input type='text' name='name' placeholder='Your Name' className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm h-10 py-1 px-3 text-sm placeholder:text-primary placeholder:text-sm w-1/2' />
                        <input type='email' name='email' placeholder='@gmail.com' className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm  h-10 py-1 px-3 text-sm placeholder:text-primary placeholder:text-sm w-1/2' />
                    </div>
                    <input type='text' name='subject' placeholder='Subject' className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm w-full h-20 py-1 px-3 text-sm placeholder:text-primary placeholder:text-sm' />
                    <textarea rows={5} name='message' placeholder='Your Message' className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm w-full h-full py-3 px-5 text-sm placeholder:text-primary placeholder:text-sm'></textarea>
                    <button className='send-button'>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                </form>
                <div className='w-full lg:w-1/3 flex flex-col gap-7 justify-start items-center'>
                    {
                        icons.map((icon, index) => {
                            return <div className='w-full flex items-center gap-4 group/icon shadow-lg hover:shadow-2xl rounded-lg p-8 transition-all ease-in-out duration-300' key={index}>
                                <div className='bg-slate-100 text-primary group-hover/icon:bg-primary group-hover/icon:text-white transition-colors ease-in-out duration-300 p-2 text-2xl rounded-full'>
                                    {icon[0]}
                                </div>
                                <div className='flex flex-col items-start justify-center gap-1'>
                                    <div className='font-semibold text-md md:text-lg lg:text-xl'>
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