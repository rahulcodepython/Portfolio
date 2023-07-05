import { BiCheck, BiX } from 'react-icons/bi'
import React from 'react'
import Link from 'next/link'

const Pricing = () => {
    const pricing = [
        {
            heading: "Basic",
            desc: "Best option for personal use & for your next project.",
            price: "29",
            pack: "/month",
            check: ["Unlimited projects", "Personal Attendent", "With hosting"],
            uncheck: ["Source Code", "Maintainence", "Backend"]
        },
        {
            heading: "Basic",
            desc: "Best option for personal use & for your next project.",
            price: "29",
            pack: "/month",
            check: ["Unlimited projects", "Personal Attendent", "With hosting"],
            uncheck: ["Source Code", "Maintainence", "Backend"]
        },
        {
            heading: "Basic",
            desc: "Best option for personal use & for your next project.",
            price: "29",
            pack: "/month",
            check: ["Unlimited projects", "Personal Attendent", "With hosting"],
            // uncheck: ["Source Code", "Maintainence", "Backend"]
        },
    ]
    return (
        <section className="bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10 -my-1" id='pricing'>
            <h1 className='text-xl md:text-3xl font-semibold'>Pricing</h1>
            <div className="flex flex-col lg:flex-row gap-10 w-full justify-around">
                {
                    pricing.map((item, index) => {
                        return <div className="flex flex-col gap-10 justify-between p-6 md:p-8 lg:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300" key={index}>
                            <div className='flex flex-col gap-5 justify-center items-center'>
                                <h3 className="text-lg md:2xl font-semibold">
                                    {item.heading}
                                </h3>
                                <p className="text-sm text-center">
                                    {item.desc}
                                </p>
                                <div className="flex justify-center items-baseline">
                                    <span className="mr-2 text-xl md:text-3xl font-extrabold text-primary">
                                        ₹ {item.price}
                                    </span>
                                    <span className="">
                                        {item.pack}
                                    </span>
                                </div>
                            </div>
                            <ul role="list" className="flex flex-col items-start gap-3">
                                {
                                    item.check ? item.check.map((item, index) => {
                                        return <li className="flex items-center gap-3" key={index}>
                                            <BiCheck className="text-primary" />
                                            <span>{item}</span>
                                        </li>
                                    }) : null
                                }
                                {
                                    item.uncheck ? item.uncheck.map((item, index) => {
                                        return <li className="flex items-center gap-3" key={index}>
                                            <BiX className="text-red-500" />
                                            <span>{item}</span>
                                        </li>
                                    }) : null
                                }
                            </ul>

                            <Link href="#" className="text-white bg-primary hover:bg-primaryHover font-semibold rounded-lg text-sm px-5 py-3 text-center">
                                Hire Me
                            </Link>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Pricing