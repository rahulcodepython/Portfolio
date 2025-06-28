import { ProjectItemType } from '@/types'
import { ExternalLinkIcon, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedCard from './animated-card'
import { Button } from './ui/button'

const ProjectItem = ({ children, item }: { children?: React.ReactNode; item: ProjectItemType }) => {
	return (
		<AnimatedCard className="bg-white dark:bg-bg-dark rounded-xl overflow-hidden relative flex flex-col min-w-sm max-w-sm w-full">
			<div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
				{item.category}
			</div>

			<div className="h-48 overflow-hidden relative">
				<Image
					src={item.image || '/images/random-image.jpg'}
					alt="Random Alt"
					className="object-cover transition-transform duration-500 hover:scale-105 w-full h-full"
					width={500}
					height={300}
				/>
			</div>

			<div className="p-6 flex flex-col justify-between flex-1 gap-4">
				<h3 className="text-xl font-bold text-gray-800 dark:text-white">
					{item.title}
				</h3>
				<p className="text-gray-600 dark:text-gray-300">{item.description}</p>

				<div className="flex flex-wrap gap-2">
					{item.technologies.map((tech, index) => (
						<span key={index} className="bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs px-2 py-1 rounded">
							{tech}
						</span>
					))}
				</div>

				<div className={`grid ${!item.live || !item.github ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
					{
						item.live && <Link href={item.live} target="_blank" rel="noopener noreferrer">
							<Button className="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors duration-300 w-full cursor-pointer">
								<ExternalLinkIcon className="mr-2 h-4 w-4" />
								Try Demo
							</Button>
						</Link>
					}
					{
						item.github && <Link href={item.github} target="_blank" rel="noopener noreferrer">
							<Button className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-800/80 dark:hover:bg-gray-800/50 transition-colors duration-300 w-full cursor-pointer">
								<Github className="mr-2 h-4 w-4" />
								GitHub
							</Button>
						</Link>
					}
				</div>

				{children}
			</div>
		</AnimatedCard>
	)
}

export default ProjectItem