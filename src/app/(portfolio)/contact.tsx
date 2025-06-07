import ContactForm from '@/app/(portfolio)/contact-form'
import Heading from '@/components/heading'
import Section from '@/components/section'
import { LocateIcon, Mail, Phone } from 'lucide-react'

const Contact = () => {
	const contactIcons = [
		{
			icon: LocateIcon,
			label: 'Location',
			value: 'West Bengal, India',
		},
		{
			icon: Mail,
			label: 'Email',
			value: 'rahulcodepython@gmail.com',
		},
		{
			icon: Phone,
			label: 'Call',
			value: '+919775150082',
		},
	]

	return (
		<Section id='contact' className='max-w-7xl'>
			<Heading title='Contact' />
			<div className='flex flex-col lg:flex-row-reverse gap-10 lg:gap-5 w-full'>
				<div className='w-full lg:w-2/3 flex-1'>
					<ContactForm />
				</div>
				<div className='w-full lg:w-1/3 flex flex-col gap-2'>
					{
						contactIcons.map((icon, index) => {
							return <div className='w-full flex items-center gap-4 group/icon shadow-sm hover:shadow-2xl border rounded-lg px-5 py-3 transition-all ease-in-out duration-300 dark:bg-bg-dark' key={index}>
								<div className='bg-slate-100 text-sky-500 group-hover/icon:bg-sky-500 group-hover/icon:text-white transition-colors ease-in-out duration-300 p-2 text-2xl rounded-full'>
									<icon.icon size={20} />
								</div>
								<div className='flex flex-col items-start justify-center gap-1'>
									<div className='font-boldfont text-lg md:text-xl lg:text-2xl'>
										{icon.label}
									</div>
									<div className='text-sm'>
										{icon.value}
									</div>
								</div>
							</div>
						})
					}
				</div>
			</div>
		</Section>
	)
}

export default Contact