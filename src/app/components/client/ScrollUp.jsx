"use client"
import { BiUpArrowAlt } from '@/data/icons'
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
        visible ? <div className='z-20 fixed bottom-5 right-7 text-2xl bg-primary p-1 text-white rounded-md cursor-pointer'>
            <BiUpArrowAlt onClick={moveToTop} />
        </div> : null
    )

}

export default ScrollUp