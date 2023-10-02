import React from 'react'
import SocialIcons from './components/server/socialicons'
import Hero from './components/server/hero'
import Navbar from './components/client/navbar'
import Footer from './components/server/footer'

const HomeLayout = ({ children }) => {
    return (
        <div>
            <SocialIcons />
            <Hero />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout