"use client"
import { BiHome, BiUser, BiFile, BiServer, BiIdCard, BiBookOpen, BiGitBranch, BiEnvelope, BiMenu } from "react-icons/bi";
import React from 'react'
import Link from "next/link";

const Navbar = () => {
    const [menu, setmenu] = React.useState(false)

    const links = [
        ['/#hero', <BiHome key={1} />, 'Home'],
        ['/#about', <BiUser key={1} />, 'About'],
        ['/#resume', <BiFile key={1} />, 'Resume'],
        ['/#services', <BiServer key={1} />, 'Services'],
        ['/#portfolio', <BiIdCard key={1} />, 'Portfolio'],
        ['/#repositiories', <BiGitBranch key={1} />, 'Repositories'],
        ['/#contact', <BiEnvelope key={1} />, 'Contact'],
    ]

    return (
        <>
            <nav className="bg-white hidden lg:block sticky top-0 py-3 shadow-2xl z-20">
                <ul className="flex justify-around items-center">
                    {
                        links.map((item, index) => {
                            return <Link href={item[0]} key={index} prefetch={false} scroll={false}>
                                <li className="nav-button flex gap-1 items-center justify-center">
                                    <span className="text-md">
                                        {item[1]}
                                    </span>
                                    <span className="font-semibold text-[0.8rem]">
                                        {item[2]}
                                    </span>
                                </li>
                            </Link>
                        })
                    }
                </ul>
            </nav>

            <nav className="bg-white text-primary flex justify-end mx-auto lg:hidden sticky top-0 px-5 py-4 shadow-2xl z-20">
                <button className="flex items-center justify-center text-2xl" onClick={() => setmenu((pre) => !pre)}>
                    <BiMenu />
                </button>
            </nav>
            <div className={`${menu ? 'sticky' : 'hidden'} lg:hidden w-full sticky top-12 border -mb-1 bg-white z-20`}>
                <ul className="flex flex-col">
                    {
                        links.map((item, index) => {
                            return <Link href={item[0]} key={index} onClick={(e) => { setmenu(false) }} prefetch={false} scroll={false}>
                                <li className="nav-button flex gap-1 items-center">
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