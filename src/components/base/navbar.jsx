import { BiHome } from "react-icons/bi";
import React from 'react'

const Navbar = () => {

    const links = [
        ['/', <BiHome />, 'Home'],
        ['/', <BiHome />, 'About'],
        ['/', <BiHome />, 'Resume'],
        ['/', <BiHome />, 'Services'],
        ['/', <BiHome />, 'Portfolio'],
        ['/', <BiHome />, 'Blogs'],
        ['/', <BiHome />, 'Repositories'],
        ['/', <BiHome />, 'Contact'],
    ]

    return (
        <nav className="fixed h-screen flex items-center pl-5">
            <ul className="flex flex-col gap-5">
                {
                    links.map((item, index) => {
                        return <a href={item[0]} key={index} className="flex justify-center items-center  gap-2 text-white bg-primary w-16 hover:w-36 h-16 rounded-full transition-all ease-in-out duration-300">
                            <span className="text-2xl">
                                {item[1]}
                            </span>
                            <span className="font-semibold">
                                {item[2]}
                            </span>
                        </a>
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar