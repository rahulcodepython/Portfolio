"use client"

import Heading from "@/components/heading"
import ProjectItem from "@/components/project-item"
import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projectsTabs } from "@/constant"
import { Project, ProjectItemType } from "@/types"
import Link from "next/link"
import React from "react"

const Projects = ({ projects }: { projects: ProjectItemType[] }) => {
	const [tab, setTab] = React.useState<Project>('all')
	const [filteredProjects, setFilteredProjects] = React.useState<ProjectItemType[] | null>(projects ?? null)

	const changeTab = (value: Project) => {
		setTab(value)
		if (value === 'all') {
			setFilteredProjects(projects)
		} else {
			setFilteredProjects(projects?.filter((item) => item.category.replace(/\s+/g, '').toLowerCase() === value.toLowerCase()) || null)
		}
	}

	return (
		<Section id='projects' className="max-w-7xl">
			<Heading title="Project" />
			<div className="container flex flex-col gap-5 sm:gap-10">
				{
					!projects && <div className="w-full text-center">No projects available</div>
				}
				{
					projects && <Tabs defaultValue="all" className="w-full">
						<div className='w-full flex justify-center container mx-auto'>
							<TabsList className="gap-1 md:gap-3 mb-5 dark:bg-bg-dark">
								{
									projectsTabs.map((item, index) => {
										return <TabsTrigger value={item.value} className="font-sm sm:font-base md:font-xl cursor-pointer" key={index} onClick={() => changeTab(item.value)}>
											{item.name}
										</TabsTrigger>
									})
								}
							</TabsList>
						</div>
						<TabsContent value={tab}>
							<div className="flex flex-wrap gap-6 justify-center">
								{
									(!filteredProjects || filteredProjects.length === 0) && (
										<p className="w-full text-center">No projects found</p>
									)
								}
								{
									filteredProjects && filteredProjects.map((item, index) => {
										return <ProjectItem item={item} key={index} />
									})
								}
							</div>
						</TabsContent>
					</Tabs>
				}
				<div className="w-full flex justify-center">
					<Link href="/projects">
						<Button variant="outline" className="">Show All</Button>
					</Link>
				</div>
			</div>
		</Section>
	)
}

export default Projects