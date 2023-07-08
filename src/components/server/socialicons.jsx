import data from '../../../data/data'
import Link from 'next/link'
import React from 'react'

const SocialIcons = () => {
    return (
        <p className='text-white font-bold text-md md:text-lg mt-5 flex items-center gap-5 cursor-pointer absolute right-5'>
            {
                data.socialicons.map((item, index) => {
                    return <Link href={item[1]} key={index}>
                        {item[0]}
                    </Link>
                })
            }
        </p>
    )
}

export default SocialIcons