import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <main className="h-screen w-screen bg-white flex flex-col md:flex-row items-center justify-center gap-10 px-5 md:px-10 py-20">
            <div className="w-full lg:w-1/2 mx-8 flex flex-col items-center justify-center">
                <div className="text-7xl text-primary font-dark font-extrabold mb-8"> 404</div>
                <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                    Sorry we couldn{`'`}t find the page you{`'`}re looking for
                </p>

                <Link href="/" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-primary active:bg-primaryHover hover:bg-primaryHover">
                    back to homepage
                </Link>
            </div>
            <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                <Image src="/image/not-found.svg" className="" width={571} height={356} alt="Page not found" />
            </div>

        </main>
    )
}

export default NotFound