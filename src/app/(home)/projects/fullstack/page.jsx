import React from 'react'
import ProjectItem from '../components/server/projectItem'

const Page = async () => {
    const response = await fetch(`${process.env.DOMAIN_NAME}api/projects/`)
    const projects = await response.json()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {
                projects.map((item, index) => {
                    return item.category.split(" ").join("").toLowerCase() === 'fullstack' ? <ProjectItem item={item} key={index} /> : null
                })
            }
        </div>
    )
}

export default Page