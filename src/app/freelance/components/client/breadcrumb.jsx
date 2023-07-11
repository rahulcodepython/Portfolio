"use client"
import { GetBreadcrumLink } from '@/context/controller/breadcrumController'
import { BiHome, BiSolidChevronRight } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'

const Breadcrumb = () => {
    const link = GetBreadcrumLink()

    return (
        <ol className="flex items-center bg-white p-5 my-4 mx-4 sm:mx-8 lg:mx-12 rounded-lg sticky top-4 shadow-2xl">
            <li>
                <Link href="/" className="flex items-center text-xs sm:text-sm font-semibold gap-1 hover:text-primary">
                    <BiHome />
                    Home
                </Link>
            </li>
            {
                link.map((item, index) => {
                    return <li key={index}>
                        <Link href={item[1]} className="flex items-center">
                            <BiSolidChevronRight />
                            <span className={`text-xs sm:text-sm font-semibold ${item[1] === '#' ? 'cursor-default' : 'hover:text-primary'}`}>
                                {item[0]}
                            </span>
                        </Link>
                    </li>
                })
            }
        </ol>
    )
}

export default Breadcrumb