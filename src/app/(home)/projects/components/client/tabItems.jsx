"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const TabItems = ({ item }) => {
    const pathname = usePathname()
    return (
        <Link href={`/projects/${item[1]}`} className={`py-2 px-5  md:py-3 lg:px-8 text-center font-semibold transition-all ease-in-out duration-300 ${pathname === `/projects/${item[1]}` ? "bg-primary text-white" : null} cursor-pointer`}>
            {item[0]}
        </Link>
    )
}

export default TabItems