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
                        {
                            Data.projectsTabs.map((item, index) => {
                                return <TabsTrigger value={item.value} className="font-semibold font-xl" key={index}>{item.name}</TabsTrigger>
                            })
                        }
                    </TabsList>
                    {
                        Data.projectsTabs.map((tab, index) => {
                            return <TabsContent value={tab.value} key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                                    {
                                        Data.projects.map((item, index) => {
                                            return (tab.value === 'all' || item.category === tab.name) && <ProjectItem item={item} key={index} />
                                        })
                                    }
                                </div>
                            </TabsContent>
                        })
                    }
                </Tabs>
            </div>
        </section>
    )
}

export default Projects