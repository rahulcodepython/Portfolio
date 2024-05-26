import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col gap-4 items-center justify-center h-screen text-2xl text-white font-bold'>
            <h2>Page Not Found</h2>
            <Link href="/">Return Home</Link>
        </div>
    )
}