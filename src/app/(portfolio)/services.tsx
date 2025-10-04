import AnimatedCard from '@/components/animated-card'
import Heading from '@/components/heading'
import Section from '@/components/section'
import { SkillsImage } from '@/utils/SkillImage'
import Image from 'next/image'
import React from 'react'

const Services = () => {

	type Service = {
		icon: React.ElementType
		title: string
		description: string[]
		color: string
		bg: string
		hover: string
	}

	const services: Service[] = [
		{
			icon: () => <Image src={SkillsImage('react')} alt='React' width={28} height={28} className='rounded-lg' />,
			title: 'Landing Page',
			description: [
				"Skilled web developer",
				"Crafts stunning landing pages",
				"Responsive and mobile-friendly design",
				"SEO-friendly for better search rankings",
				"Interactive and engaging user experience",
				"Showcases business with professionalism",
				"Creativity in design and functionality"
			]
			,
			color: 'text-sky-500',
			bg: 'bg-sky-500',
			hover: 'group-hover:bg-sky-400'
		},
		{
			icon: () => <Image src={SkillsImage('nodejs')} alt='Node.js' width={28} height={28} className='rounded-lg' />,
			title: 'Multipage Website',
			description: [
				"Specializes in crafting multipage websites",
				"Responsive and mobile-friendly design",
				"SEO-friendly for better visibility",
				"Beautiful and visually appealing layouts",
				"Professional and polished user experience",
				"Creative design and innovative features",
				"Interactive frontend development for businesses"
			],
			color: 'text-orange-500',
			bg: 'bg-orange-500',
			hover: 'group-hover:bg-orange-400'
		},
		{
			icon: () => <Image src={SkillsImage('django')} alt='Django' width={28} height={28} className='rounded-lg' />,
			title: 'Full Stack Website',
			description: [
				"Specializes in custom full-stack website development",
				"Tailored to specific business requirements",
				"Seamless database functionality",
				"Robust security measures for protection",
				"Highly customizable to exact preferences",
				"Optimized for flawless performance"
			],
			color: 'text-pink-500',
			bg: 'bg-pink-500',
			hover: 'group-hover:bg-pink-400'
		},
		{
			icon: () => <Image src={SkillsImage('api')} alt='API Development' width={28} height={28} className='rounded-lg' />,
			title: 'API Development',
			description: [
				"Provides secure APIs for enhanced frontend capabilities.",
				"Custom and flexible API solutions tailored to specific needs.",
				"Streamlines data communication for seamless integration.",
				"Optimizes performance for a smooth and efficient workflow."
			],
			color: 'text-lime-500',
			bg: 'bg-lime-500',
			hover: 'group-hover:bg-lime-400'
		},
		{
			icon: () => <Image src={SkillsImage('support')} alt='Support' width={28} height={28} className='rounded-lg' />,
			title: 'Update and Maintenance',
			description: [
				"Guarantees extended support for a year or more.",
				"Maintains and updates your site as per contract.",
				"Ensures your site aligns with evolving requirements.",
				"Adapts to your business goals for long-term success."
			],
			color: 'text-yellow-500',
			bg: 'bg-yellow-500',
			hover: 'group-hover:bg-yellow-400'
		},
		{
			icon: () => <Image src={SkillsImage('cloud')} alt='Node.js' width={28} height={28} className='rounded-lg' />,
			title: 'Deployment',
			description: [
				"Specializes in seamless website deployment.",
				"Handles both frontend and backend deployment on any server.",
				"Expert in Docker for efficient and reliable deployment.",
				"Ensures flawless performance and optimized functionality.",
				"Implements maximum security measures for project protection."
			],
			color: 'text-purple-500',
			bg: 'bg-purple-500',
			hover: 'group-hover:bg-purple-400'
		},
	]

	return (
		<Section id='services' className='max-w-8xl'>
			<Heading title='Services' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full place-items-center'>
				{
					services.map((item, index) => {
						const Icon = item.icon;
						return <AnimatedCard className='group bg-white dark:bg-bg-dark border rounded-md cursor-default p-5 pb-6 flex flex-col items-center justify-center gap-3 max-w-sm lg:max-w-full w-full h-full' key={index}>
							<div className={`${item.color} w-[60px] h-[60px] flex items-center justify-center bg-slate-100 rounded-full p-4 text-center group-hover:text-white text-xl md:text-3xl`}>
								<Icon />
							</div>
							<div className={`text-lg md:text-xl font-boldfont mb-2`}>
								{item.title}
							</div>
							<div className='text-sm px-4 text-left'>
								<ul className='list-disc'>
									{
										item.description.map((desc, idx) => (
											<li key={idx}>{desc}</li>
										))
									}
								</ul>
							</div>
						</AnimatedCard>
					})
				}
			</div>
		</Section>
	)
}

export default Services