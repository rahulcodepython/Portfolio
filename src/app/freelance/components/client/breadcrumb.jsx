"use client"
import { BiHome, BiSolidChevronRight } from 'react-icons/bi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const Breadcrumb = () => {
    const pathname = usePathname()
    const [link, setlink] = React.useState([])

    React.useEffect(() => {
        setlink(() => {
            if (pathname === '/freelance/pricing') {
                return [['Pricing', '#']]
            }
            else if (pathname === '/freelance/project/basic') {
                return [['Pricing', '/freelance/pricing'], ['Basic', '#']]
            }
            else if (pathname === '/freelance/project/intermediate') {
                return [['Pricing', '/freelance/pricing'], ['Intermediate', '#']]
            }
            else if (pathname === '/freelance/project/advance') {
                return [['Pricing', '/freelance/pricing'], ['Advance', '#']]
            }
        })
    }, [pathname])

    return (
        <ol className="flex items-center bg-white p-5 my-4 mx-4 sm:mx-8 lg:mx-12 rounded-lg sticky top-4 shadow-2xl">
            <li>
                <Link href="/" className="flex items-center text-xs sm:text-sm font-semibold gap-1 hover:text-primary">
                    <BiHome />
                    Home
                </Link>
            </li>
            {
                link ? link.map((item, index) => {
                    return <li key={index}>
                        <Link href={item[1]} className="flex items-center" as={item[0]}>
                            <BiSolidChevronRight />
                            <span className={`text-xs sm:text-sm font-semibold ${item[1] === '#' ? 'cursor-default' : 'hover:text-primary'}`}>
                                {item[0]}
                            </span>
                        </Link>
                    </li>
                }) : null
            }
        </ol>
    )
}

export default Breadcrumb