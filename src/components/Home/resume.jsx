import React from 'react'

const Resume = () => {
    const education = [
        ['2015-2021', 'Secondary School', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, reprehenderit?'],
        ['2021-2023', 'Higher Secondary School', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, reprehenderit?'],
        ['2023-Present', 'BCA Degree', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, reprehenderit?'],
    ]

    const skills = [
        ['HTML', '97%',],
        ['CSS', '85%',],
        ['JS', '90%',],
        ['Python', '95%',],
        ['Django', '90%',],
        ['React JS', '93%',],
        ['Next JS', '88%',],
        ['OOP', '70%',],
    ]

    const language = [
        ['English', '80%'],
        ['Hindi', '70%'],
        ['Bengali', '90%'],
    ]

    return (
        <section className='bg-white py-10 -mt-1 px-10 flex flex-col items-center gap-10' id='resume'>
            <h1 className='text-xl md:text-3xl font-semibold'>My Resume</h1>
            <div className='flex justify-around gap-4 flex-col lg:flex-row'>
                <div className='shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col w-full lg:w-1/3'>
                    <span className='text-md md:text-lg lg:text-xl font-extrabold mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                        Education
                    </span>
                    <div className='flex flex-col gap-5 divide-y pt-2'>
                        {
                            education.map((item, index) => {
                                return <div className='first:pt-0 pt-4' key={index}>
                                    <div className='text-primary font-bold text-md md:text-lg lg:text-xl'>
                                        {item[0]}
                                    </div>
                                    <div className='text-sm font-semibold mb-4'>
                                        {item[1]}
                                    </div>
                                    <div className='text-sm'>
                                        {item[2]}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col flex-wrap gap-5 w-full lg:w-1/3'>
                    <span className='text-md md:text-lg lg:text-xl font-extrabold mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                        Skills
                    </span>
                    <div className='flex flex-wrap gap-5'>
                        {
                            skills.map((item, index) => {
                                return <div className='w-full' key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-semibold">{item[0]}</span>
                                        <span className="text-sm font-medium">{item[1]}</span>
                                    </div>
                                    <div className="w-full rounded-full h-2.5">
                                        <div className="bg-primary h-1 rounded-full" style={{ "width": item[1] }}></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col flex-wrap gap-5 w-full lg:w-1/3'>
                    <span className='text-md md:text-lg lg:text-xl font-extrabold mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
                        Language
                    </span>
                    <div className='flex flex-wrap gap-5'>
                        {
                            language.map((item, index) => {
                                return <div className='w-full' key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-semibold">{item[0]}</span>
                                        <span className="text-sm font-medium">{item[1]}</span>
                                    </div>
                                    <div className="w-full rounded-full h-2.5">
                                        <div className="bg-primary h-1 rounded-full" style={{ "width": item[1] }}></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume