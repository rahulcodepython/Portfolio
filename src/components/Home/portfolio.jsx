"use client"
import Image from "next/image";
import React from "react";

const Portfolio = () => {
    const [showCategory, setshowCategory] = React.useState("all")

    const tabs = [
        ['All Project', 'all'],
        ['Branding', 'branding'],
        ['Design', 'design'],
        ['Marketing', 'marketing'],
        ['Development', 'development'],
    ]

    const projects = [
        {
            image: "/image/background.png",
            category: "Branding",
            title: "Creative Agency",
        },
        {
            image: "/image/background.png",
            category: "Branding",
            title: "Creative Agency",
        },
        {
            image: "/image/background.png",
            category: "Design",
            title: "Creative Agency",
        },
        {
            image: "/image/background.png",
            category: "Design",
            title: "Creative Agency",
        },
        {
            image: "/image/background.png",
            category: "development",
            title: "Creative Agency",
        },
        {
            image: "/image/background.png",
            category: "development",
            title: "Creative Agency",
        },
        {
            image: "/image/background.png",
            category: "development",
            title: "Creative Agency",
        },
    ]

    return (
        <section className='bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10' id='portfolio'>
            <h1 className='text-xl md:text-3xl font-semibold'>Portfolio</h1>
            <div className="container flex flex-col gap-5 sm:gap-10">
                <ul className="w-full flex items-center flex-wrap justify-center gap-4">
                    {
                        tabs.map((item, index) => {
                            return <li key={index} onClick={() => setshowCategory(item[1])} className={`py-2 px-5  md:py-3 lg:px-8 text-center font-semibold transition-all ease-in-out duration-300 ${showCategory === item[1] ? "bg-primary text-white" : null} cursor-pointer`}>
                                {item[0]}
                            </li>
                        })
                    }
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {
                        projects.map((item, index) => {
                            return <div className={`w-full ${showCategory === "all" || showCategory === item.category.toLowerCase() ? "block" : "hidden"}`} key={index}>
                                <Image src={item.image} alt="portfolio" className="w-full rounded-md" width={6000} height={4000} />
                                <div className="flex items-center flex-col gap-2 relative z-10 -mt-20 bg-white rounded-md shadow-lg mx-10 py-9">
                                    <span className="font-semibold text-primary">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;