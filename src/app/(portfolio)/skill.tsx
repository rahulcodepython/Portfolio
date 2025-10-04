import Heading from '@/components/heading'
import Section from '@/components/section'
import { SkillsImage } from '@/utils/SkillImage'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const Skills = () => {
	const skillsData = [
		{ name: 'C', value: 'c' },
		{ name: 'C++', value: 'cplusplus' },
		{ name: 'Python', value: 'python' },
		{ name: 'Golang', value: 'golang' },
		{ name: 'HTML', value: 'html' },
		{ name: 'CSS', value: 'css' },
		{ name: 'Javascript', value: 'javascript' },
		{ name: 'Typescript', value: 'typescript' },
		{ name: 'Node JS', value: 'nodejs' },
		{ name: 'Express JS', value: 'express' },
		{ name: 'Socket IO', value: 'socket' },
		{ name: 'Vite JS', value: 'vitejs' },
		{ name: 'React JS', value: 'react' },
		{ name: 'Next JS', value: 'nextjs' },
		{ name: 'React Native', value: 'expo' },
		{ name: 'Django', value: 'django' },
		{ name: 'Tailwind', value: 'tailwind' },
		{ name: 'Bootstrap', value: 'bootstrap' },
		{ name: 'MongoDB', value: 'mongodb' },
		{ name: 'MySQL', value: 'mysql' },
		{ name: 'PostgreSQL', value: 'postgresql' },
		{ name: 'Git', value: 'git' },
		{ name: 'Docker', value: 'docker' },
		{ name: 'Figma', value: 'figma' },
		{ name: 'Firebase', value: 'firebase' },
		{ name: 'Canva', value: 'canva' },
		{ name: 'Ubuntu', value: 'ubuntu' },
		{ name: 'Nginx', value: 'nginx' },
		{ name: 'Wordpress', value: 'wordpress' }
	]
	return (
		<Section id='skills'>
			<Heading title='Skills' />
			<Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
				{
					skillsData.map((skill, id) => (
						<div className="w-36 min-w-fit h-fit dark:bg-bg-dark flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer border"
							key={id}>
							<div className="h-full w-full rounded-lg shadow-none transition-all duration-500">
								<div className="flex -translate-y-[1px] justify-center">
									<div className="w-3/4">
										<div className="h-[1px] w-full" />
									</div>
								</div>
								<div className="flex flex-col items-center justify-center gap-3 p-6">
									<div className="h-8 sm:h-10">
										<Image src={SkillsImage(skill.value)} alt={skill.name} width={25} height={25} className="h-full w-auto rounded-lg"
										/>
									</div>
									<p className="text-sm">
										{skill.name}
									</p>
								</div>
							</div>
						</div>
					))
				}
			</Marquee>
		</Section>
	)
}

export default Skills