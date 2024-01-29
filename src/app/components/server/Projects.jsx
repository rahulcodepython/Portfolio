import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Data from '@/data/data'
import ProjectItem from './ProjectItem'

const Projects = async () => {
    return (
        <section className='bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10' id='projects'>
            <h1 className='text-2xl md:text-4xl font-boldfont'>Portfolio</h1>
            <div className="container flex flex-col gap-5 sm:gap-10">
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="w-full gap-10 mb-10">
                        <TabsTrigger value="all" className="font-semibold font-xl">All</TabsTrigger>
                        <TabsTrigger value="backend" className="font-semibold font-xl">Backend</TabsTrigger>
                        <TabsTrigger value="frontend" className="font-semibold font-xl">Frontend</TabsTrigger>
                        <TabsTrigger value="fullstack" className="font-semibold font-xl">Full Stack</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                            {
                                Data.projects.map((item, index) => {
                                    return <ProjectItem item={item} key={index} />
                                })
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="backend">
                        {
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                                {
                                    Data.projects.map((item, index) => {
                                        return item.category.toLowerCase() === 'backend' && <ProjectItem item={item} key={index} />
                                    })
                                }
                            </div>
                        }
                    </TabsContent>
                    <TabsContent value="frontend">
                        {
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                                {
                                    Data.projects.map((item, index) => {
                                        return item.category.toLowerCase() === 'frontend' && <ProjectItem item={item} key={index} />
                                    })
                                }
                            </div>
                        }
                    </TabsContent>
                    <TabsContent value="fullstack">
                        {
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                                {
                                    Data.projects.map((item, index) => {
                                        return item.category.split(" ").join("").toLowerCase() === 'fullstack' && <ProjectItem item={item} key={index} />
                                    })
                                }
                            </div>
                        }
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Projects