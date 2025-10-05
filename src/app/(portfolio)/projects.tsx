import Heading from "@/components/heading"
import ProjectItem from "@/components/project-item"
import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import { ProjectItemType } from "@/types"
import Link from "next/link"

const Projects = ({ projects }: { projects: ProjectItemType[] }) => {
	return (
		<Section id='projects' className="max-w-7xl">
			<Heading title="Project" />
			<div className="container flex flex-col gap-5 sm:gap-10">
				{
					!projects && <div className="w-full text-center">No projects available</div>
				}
				<div className='w-full flex flex-col lg:flex-row justify-center items-center container mx-auto gap-8'>
					{
						projects && projects.map((item, index) => {
							return <ProjectItem item={item} key={index} />
						})
					}
				</div>
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