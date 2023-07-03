"use client"
import { BiHome, BiUser, BiFile, BiServer, BiIdCard, BiBookOpen, BiGitBranch, BiEnvelope, BiMenu } from "react-icons/bi";
import React from 'react'
import Link from "next/link";
import '../../../public/css/navicons.css'

const Navbar = () => {
    const [menu, setmenu] = React.useState(false)

    const links = [
        ['/', <BiHome />, 'Home'],
        ['/', <BiUser />, 'About'],
        ['/', <BiFile />, 'Resume'],
        ['/', <BiServer />, 'Services'],
        ['/', <BiIdCard />, 'Portfolio'],
        ['/', <BiBookOpen />, 'Blogs'],
        ['/', <BiGitBranch />, 'Repositories'],
        ['/', <BiEnvelope />, 'Contact'],
    ]

    return (
        <>
            <nav className="bg-white hidden lg:block sticky top-0">
                <ul className="flex justify-around items-center">
                    {
                        links.map((item, index) => {
                            return <Link href={item[0]} key={index}>
                                <li class="btn flex gap-1 items-center">
                                    <span className="text-xl">
                                        {item[1]}
                                    </span>
                                    <span className="font-semibold text-md">
                                        {item[2]}
                                    </span>
                                </li>
                            </Link>
                        })
                    }
                </ul>
            </nav>

            <nav className="bg-white text-primary flex justify-end mx-auto lg:hidden sticky top-0 px-5 py-3">
                <button className="flex items-center justify-center text-2xl" onClick={() => setmenu((pre) => !pre)}>
                    <BiMenu />
                </button>
            </nav>
            <div className={`${menu ? 'block' : 'hidden'} lg:hidden w-full sticky top-12 border`}>
                <ul className="flex flex-col bg-white">
                    {
                        links.map((item, index) => {
                            return <Link href={item[0]} key={index} onClick={() => setmenu(false)}>
                                <li class="btn flex gap-1 items-center">
                                    <span className="text-lg">
                                        {item[1]}
                                    </span>
                                    <span className="font-semibold text-sm">
                                        {item[2]}
                                    </span>
                                </li>
                            </Link>
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default Navbar