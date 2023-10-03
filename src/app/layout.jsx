import Notification from '@/app/components/server/notification'
import ScrollToTop from '@/app/components/client/scrollToTop'
import React from 'react'
import './globals.css'

export const metadata = {
    title: 'Rahul Das | Home',
    description: 'This is a personal portfolio website to describe me and also my experties and specialities even my services delivered by me.',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className='scroll-smooth'>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <meta name='google-site-verification' content='r8h5jzR7gIadUgo08yu2g1rBugd24XFzS7Wa6P5tomw' />
            <body className="h-screen bg-[url('/image/background.png')] bg-cover bg-fixed">
                <Notification />
                {children}
                <ScrollToTop />
            </body>
        </html>
    )
}

export default RootLayout