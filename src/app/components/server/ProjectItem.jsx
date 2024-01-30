import Image from 'next/image'
import React from 'react'

const ProjectItem = ({ item }) => {
    return (
        <div className="w-full">
            <Image src={item.image} alt="portfolio" className="mx-auto w-[408px] h-[200px] object-cover rounded-md" width={408} height={200} />
            <div className="flex items-center justify-center flex-col gap-2 -mt-20 rounded-md shadow-lg py-9 w-3/5 bg-white relative mx-auto">
                <span className="font-semibold text-primary font-italicfont text-2xl">
                    {item.category}
                </span>
                <span className="text-2xl font-boldfont">{item.title}</span>
            </div>
        </div>
    )
}

export default ProjectItem