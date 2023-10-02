import FormComponent from '@/app/components/client/form'
import React from 'react'

const FreelanceProjectLayout = ({ children }) => {
    return (
        <main className='bg-white py-4 mx-4 sm:mx-8 lg:mx-12 sm:p-10 rounded-xl shadow-2xl flex flex-col items-center gap-10'>
            <h1 className='text-xl md:text-3xl font-semibold'>Request For a Project</h1>
            <div className='flex flex-col lg:flex-row-reverse gap-10 lg:gap-5 w-full'>
                <div className='w-full lg:w-2/3'>
                    <FormComponent type={'freelance'} />
                </div>
                <div className='w-full lg:w-1/3'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default FreelanceProjectLayout