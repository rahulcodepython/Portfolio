import ScrollToTop from '@/components/base/scrollToTop'
import React from 'react'
import './globals.css'

export const metadata = {
    title: 'Rahul Das | Home',
    description: 'This is a personal portfolio website to describe Rahul Das.',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="h-screen bg-[url('/image/background.png')] bg-cover bg-fixed">
                {children}
                <ScrollToTop />
            </body>
        </html>
    )
}

export default RootLayout