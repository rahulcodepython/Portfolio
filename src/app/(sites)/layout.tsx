import Navbar from '@/components/navbar'
import React from 'react'

const SitesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='flex flex-col min-h-screen'>
            <Navbar />
            <section className='flex-1 flex'>
                {children}
            </section>
        </main>
    )
}

export default SitesLayout