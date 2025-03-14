import { BiSolidChevronRight } from 'react-icons/bi'
import Data from '@/data/data'
import React from 'react'

const Resume = () => {
	return (
		<section className='container mx-auto flex flex-col items-center gap-5 sm:gap-10' id='resume'>
			<h1 className='text-2xl md:text-4xl font-boldfont'>My Resume</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
				<div className='shadow-sm hover:shadow-2xl border transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col w-full lg:col-span-2'>
					<span className='text-lg md:text-xl lg:text-2xl font-boldfont mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
						Education
					</span>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 divide-y lg:divide-x lg:divide-y-0 pt-2'>
						{
							Data.resume.education.map((item, index) => {
								return <div className='first:pt-0 pt-4 lg:first:pl-0 lg:pl-4' key={index}>
									<div className='text-primary font-bold text-md md:text-lg lg:text-xl'>
										{item[0]}
									</div>
									<div className='text-lg tracking-wider font-boldfont mb-4'>
										{item[1]}
									</div>
									<div className='text-sm text-justify'>
										{item[2]}
									</div>
								</div>
							})
						}
					</div>
				</div>
				<div className='shadow-sm hover:shadow-2xl border hover:border-none transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col gap-5 w-full'>
					<span className='text-lg md:text-xl lg:text-2xl font-boldfont mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
						Skills
					</span>
					<ul className="divide-y flex flex-col w-full">
						{
							Data.resume.skills.map((item, index) => {
								return <li className="py-2 first:pt-0 last:pb-0 flex items-center" key={index}>
									<BiSolidChevronRight className='text-primary' />
									<p className="text-xs md:text-sm font-semibold">{item}</p>
								</li>
							})
						}
					</ul>
				</div>
				<div className='shadow-sm hover:shadow-2xl border hover:border-none transition-all duration-500 ease-in-out rounded-lg p-10 flex flex-col w-full'>
					<span className='text-lg md:text-xl lg:text-2xl font-boldfont mb-7 first-letter:underline first-letter:underline-offset-[20px] first-letter:decoration-primary'>
						Experience
					</span>
					<div className='flex flex-col gap-5 divide-y pt-2'>
						{
							Data.resume.experience.map((item, index) => {
								return <div className='first:pt-0 pt-4' key={index}>
									<div className='text-primary font-bold text-md md:text-lg lg:text-xl'>
										{item[0]}
									</div>
									<div className='text-lg tracking-wider font-boldfont mb-4'>
										{item[1]}
									</div>
									<div className='text-sm text-justify'>
										{item[2]}
									</div>
								</div>
							})
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Resume