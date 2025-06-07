"use client"
import { ArrowUp } from 'lucide-react'
import React from 'react'

const ScrollUp = () => {
	const [visible, setVisible] = React.useState(false)

	const moveToTop = () => {
		if (typeof (window) !== undefined) {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}

	React.useEffect(() => {
		if (typeof (window) !== undefined) {
			window.addEventListener("scroll", () => {
				window.scrollY === 0 ? setVisible(false) : setVisible(true);
			});
		}
	}, [])

	return (
		visible ? <div className='z-50 fixed bottom-3 lg:bottom-7 right-3 lg:right-7 text-2xl bg-primary p-2 text-white rounded-md cursor-pointer'>
			<ArrowUp onClick={moveToTop} className='w-4 h-4' />
		</div> : null
	)

}

export default ScrollUp