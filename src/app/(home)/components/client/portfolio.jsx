"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import data from "@/data/data";
import PortfolioProjects from "../server/portfolioProjects";

const Portfolio = () => {
    const [showCategory, setshowCategory] = React.useState("all")
    // const [projects, setProjects] = React.useState([])
    // const [isRendered, setIsRendered] = React.useState(false)

    // const fetchProjects = () => {
    //     fetch(`${process.env.DOMAIN_NAME}api/projects/`)
    //         .then(response => response.json())
    //         .then(response => {
    //             setProjects(pre => response)
    //             setIsRendered(pre => true)
    //         })
    //         .catch(error => console.log(error))
    // }

    // React.useEffect(() => {
    //     fetchProjects()
    // }, [])

    return (
        <section className='bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10' id='portfolio'>
            <h1 className='text-xl md:text-3xl font-semibold'>Portfolio</h1>
            <div className="container flex flex-col gap-5 sm:gap-10">
                <ul className="w-full flex items-center flex-wrap justify-center gap-4">
                    {
                        data.projects.tabs.map((item, index) => {
                            return <li key={index} onClick={() => setshowCategory(pre => item[1])} className={`py-2 px-5  md:py-3 lg:px-8 text-center font-semibold transition-all ease-in-out duration-300 ${showCategory === item[1] ? "bg-primary text-white" : null} cursor-pointer`}>
                                {item[0]}
                            </li>
                        })
                    }
                </ul>
                <PortfolioProjects showCategory={showCategory} />
                {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {
                        isRendered && projects.map((item, index) => {
                            return <div className={`w-full ${showCategory === "all" || showCategory === item.category.toLowerCase() ? "block" : "hidden"}`} key={index}>
                                <Image src={item.image} alt="portfolio" className="mx-auto w-[408px] h-[200px] object-cover rounded-md" width={408} height={200} />
                                <div className="flex items-center justify-center flex-col gap-2 -mt-20 rounded-md shadow-lg py-9 w-3/5 bg-white relative mx-auto">
                                    <span className="font-semibold text-primary">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                            </div>
                        })
                    }
                </div> */}
            </div>
        </section>
    );
};

export default Portfolio;