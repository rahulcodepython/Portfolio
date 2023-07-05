import { BiRightArrowAlt } from 'react-icons/bi'
import React from 'react'
import Link from 'next/link'

const Blogs = () => {
    const blogs = [
        {
            category: 'Tech',
            date: '14 days ago',
            title: "How to create your own blog with Gatsby and Netlify CMS",
            description: "Learn how you can build an engaging, user-friendly blog using the latest web",
            link: '/'
        },
        {
            category: 'Tech',
            date: '14 days ago',
            title: "How to create your own blog with Gatsby and Netlify CMS",
            description: "Learn how you can build an engaging, user-friendly blog using the latest web",
            link: '/'
        },
        {
            category: 'Tech',
            date: '14 days ago',
            title: "How to create your own blog with Gatsby and Netlify CMS",
            description: "Learn how you can build an engaging, user-friendly blog using the latest web",
            link: '/'
        },
    ]
    return (
        <section className="bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10 -my-1" id='blogs'>
            <h1 className='text-xl md:text-3xl font-semibold'>Blogs</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                {
                    blogs.map((item, index) => {
                        return <article className="group/item flex flex-col gap-2 p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 cursor-pointer" key={index}>
                            <div className="flex justify-between items-center">
                                <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-lg">
                                    {item.category}
                                </span>
                                <span className="text-xs">
                                    {item.date}
                                </span>
                            </div>
                            <Link href={item.link} className="text-md font-semibold">
                                {item.title}
                            </Link>
                            <p className="text-sm">
                                {item.description}
                            </p>
                            <Link href={item.link} className="flex justify-end items-center gap-2 font-semibold text-sm group-hover/item:text-primary">
                                Read more
                                <BiRightArrowAlt className='mt-1' />
                            </Link>
                        </article>
                    })
                }
            </div>
        </section>
    )
}

export default Blogs