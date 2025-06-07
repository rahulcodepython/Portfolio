import Link from 'next/link';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="pb-12 lg:pb-0">
			<div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
				<Link href={'#'} className="text-lg md:text-xl lg:text-3xl font-semibold font-italicfont">
					Rahul Das
				</Link>
				<p className="text-xs sm:ml-6 sm:mt-0 mt-4">© {currentYear} Rahul Das —
					<Link href="#" rel="noopener noreferrer" className="ml-1 text-primary" target="_blank">
						@rahulcodepython
					</Link>
				</p>
			</div>
		</footer>
	)
}

export default Footer