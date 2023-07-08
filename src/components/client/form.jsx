"use client"
import SendButton from '@/components/base/sendButton';
import React from 'react'

const Form = ({ textareaPlaceholder }) => {
    const handleForm = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={(e) => handleForm(e)} className='flex flex-col gap-5 justify-center items-center px-0 lg:px-10 w-full lg:w-2/3'>
            <div className='flex gap-4 items-center justify-center w-full'>
                <input type='text' name='name' placeholder='Your Name' className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm h-10 py-1 px-3 text-sm placeholder:text-primary placeholder:text-sm w-1/2' />
                <input type='email' name='email' placeholder='@gmail.com' className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm h-10 py-1 px-3 text-sm placeholder:text-primary placeholder:text-sm w-1/2' />
            </div>
            <input type='text' name='subject' placeholder='Subject' className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm w-full p-3 text-sm placeholder:text-primary placeholder:text-sm' />
            <textarea rows={5} name='message' placeholder={textareaPlaceholder} className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm w-full h-full py-3 px-5 text-sm placeholder:text-primary placeholder:text-sm'></textarea>
            <SendButton />
        </form>
    )
}

export default Form