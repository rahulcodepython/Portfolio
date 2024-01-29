import { Button } from '@/components/ui/button'
import Data from '@/data/data'
import Link from 'next/link'
import React from 'react'

const SocialIcons = () => {
    return (
        <div className='flex flex-col items-start justify-center gap-4 left-2 cursor-pointer absolute h-screen bg-transparent'>
            {
                Data.socialicons.map((item, index) => {
                    return <Link href={item[1]} key={index}>
                        <Button variant='outline' className="rounded-full bg-transparent border hover:bg-transparent p-0 border-none">
                            {item[0]}
                        </Button>
                    </Link>
                })
            }
        </div>
    )
}

export default SocialIcons