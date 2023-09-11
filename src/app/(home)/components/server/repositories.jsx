import React from 'react'
import Link from 'next/link'

const Repositories = async () => {
    const response = await fetch(`${process.env.DOMAIN_NAME}api/repositories/`, { method: 'GET', cache: 'no-cache' })
    const repositories = await response.json()
    return (
        <section className="bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10 -my-1" id='repositiories'>
            <h1 className='text-xl md:text-3xl font-semibold'>Repositories</h1>
            <div className="w-full flex flex-col gap-5">
                {
                    repositories.map((item, index) => {
                        return <Link href={item.link} className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-around rounded-lg shadow-lg hover:shadow-2xl w-full py-8" key={index}>
                            <div className="flex flex-col items-center justify-center w-1/4">
                                <span className="font-semibold text-md text-primary">{item.category}</span>
                                <span className="mt-1 text-xs">{item.date}</span>
                            </div>
                            <div className="flex flex-col justify-center w-3/4 gap-2 px-0 lg:px-4">
                                <h2 className="font-semibold text-lg text-primary">
                                    {item.title}
                                </h2>
                                <p className="text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    })
                }
            </div >
        </section >
    )
}

export default Repositories