import React from 'react'
import data from '@/data/data'
import TabItems from './components/client/tabItems'

const ProjectLayout = ({ children }) => {
    return (
        <section className='bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10' id='portfolio'>
            <h1 className='text-xl md:text-3xl font-semibold'>Portfolio</h1>
            <div className="container flex flex-col gap-5 sm:gap-10">
                <ul className="w-full flex items-center flex-wrap justify-center gap-4">
                    {
                        data.projects.tabs.map((item, index) => {
                            return <TabItems item={item} key={index} />
                        })
                    }
                </ul>
                {children}
            </div>
        </section>
    )
}

export default ProjectLayout