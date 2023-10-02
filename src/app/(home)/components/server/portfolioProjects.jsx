import Image from 'next/image'
import React from 'react'

const PortfolioProjects = async ({ showCategory }) => {
    const response = await fetch(`${process.env.DOMAIN_NAME}api/projects/`)
    const projects = await response.json()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {
                projects.map((item, index) => {
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
        </div>
    )
}

export default PortfolioProjects