import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={'#'} className="text-md md:text-lg lg:text-xl font-semibold">
                    Rahul Das
                </Link>
                <p className="text-xs text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Rahul Das —
                    <Link href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                        @rahulcodepython
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer