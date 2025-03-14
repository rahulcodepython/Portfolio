import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Data from '@/data/data'
import ProjectItem from './ProjectItem'

const Projects = async () => {
	return (
		<section className='container mx-auto flex flex-col items-center gap-5 sm:gap-10' id='projects'>
			<h1 className='text-2xl md:text-4xl font-boldfont'>Portfolio</h1>
			<div className="container flex flex-col gap-5 sm:gap-10">
				<Tabs defaultValue="all" className="w-full">
					<div className='w-full flex justify-center container mx-auto'>
						<TabsList className="gap-0 md:gap-3 lg:gap-5 mb-10">
							{
								Data.projectsTabs.map((item, index) => {
									return <TabsTrigger value={item.value} className="font-semibold font-sm sm:font-base md:font-xl" key={index}>
										{item.name}
									</TabsTrigger>
								})
							}
						</TabsList>
					</div>
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