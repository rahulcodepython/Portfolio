import Heading from "@/components/heading"
import Section from "@/components/section"
import { BriefcaseIcon, CheckIcon, GraduationCap, School2Icon } from "lucide-react"

const About = () => {
	return (
		<Section id="about">
			<Heading title="About Me" />

			<div className="relative w-full bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
				<div className="absolute -top-6 left-2 text-primary text-8xl font-serif select-none">"</div>
				<div className="relative z-10">
					<p className="text-lg text-gray-700 dark:text-white italic mb-4">
						Hello, my name is Rahul Das. I am a Full Stack Web Developer with a passion for technology and innovation. I bring adaptability, a commitment to continuous learning, adept problem-solving skills, and a keen awareness of leading market technologies. With excellent communication and a suite of essential soft skills, I am poised for success in corporate environments.
					</p>
				</div>
				<div className="absolute -bottom-6 right-2 text-primary text-8xl font-serif select-none rotate-180">"</div>
			</div>


			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
				<div className="flex flex-col gap-4">
					<h3 className="text-2xl font-semibold text-primary">Education</h3>
					<div className="flex flex-col gap-6 justify-between h-full">
						<div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
							<div className="flex items-center gap-4 mb-2">
								<div className="p-3 bg-primary/10 rounded-full">
									<GraduationCap className="w-6 h-6" />
								</div>
								<h4 className="text-xl font-medium">Bachelor's in Computer Application</h4>
							</div>
							<p className="text-gray-600 dark:text-gray-300">Brainware University • 2023 - 2026</p>
							<p className="mt-2">Graduated with specialization in Web Development and Algorithms.</p>
						</div>

						<div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
							<div className="flex items-center gap-4 mb-2">
								<div className="p-3 bg-primary/10 rounded-full">
									<School2Icon className="w-6 h-6" />
								</div>
								<h4 className="text-xl font-medium">Higher Secondary Education</h4>
							</div>
							<p className="text-gray-600 dark:text-gray-300">Kalyangarh Vidyamandir (H.S) • 2021 - 2023</p>
							<p className="mt-2">Completed with focus on Science and Mathematics, laid foundation for programming.</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-4 flex-1">
					<h3 className="text-2xl font-semibold text-primary">Experience</h3>
					<div className="flex flex-col items-center justify-center flex-1">
						<div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col justify-between">
							<div className="flex items-center gap-4 mb-2">
								<div className="p-3 bg-primary/10 rounded-full">
									<BriefcaseIcon className="w-6 h-6" />
								</div>
								<h4 className="text-xl font-medium">Full Stack Developer</h4>
							</div>
							<p className="text-gray-600 dark:text-gray-300">GraspGross • 2023 - 24</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start gap-2">
									<CheckIcon className="w-5 h-5 text-green-400 mt-1" />
									<span>Developed and maintained responsive web applications using React.js.</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckIcon className="w-5 h-5 text-green-400 mt-1" />
									<span>Contribute to develop a large scale backend system using Django.</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckIcon className="w-5 h-5 text-green-400 mt-1" />
									<span>Collaborated with UX designers to implement pixel-perfect UI components.</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckIcon className="w-5 h-5 text-green-400 mt-1" />
									<span>Optimized performance, reducing page load time by 40%.</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckIcon className="w-5 h-5 text-green-400 mt-1" />
									<span>Experienced in delivering solutions for customers.</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default About