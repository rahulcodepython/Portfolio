import SocialIcons from '@/app/(home)/components/server/socialicons'
import Navbar from '@/app/(home)/components/client/navbar'
import Hero from '@/app/(home)/components/server/hero'
import About from '@/app/(home)/components/server/about'
import Resume from '@/app/(home)/components/server/resume'
import Services from '@/app/(home)/components/server/services'
import Freelancing from '@/app/(home)/components/server/freelancing'
import Repositories from '@/app/(home)/components/server/repositories'
import Contact from '@/app/(home)/components/server/contact'
import Footer from '@/app/(home)/components/server/footer'
import Facts from '@/app/(home)/components/server/facts'
import Portfolio from '@/app/(home)/components/client/portfolio'
import React from 'react'

const HomePage = () => {
    return (
        <main>
            <SocialIcons />
            <Hero />
            <Navbar />
            <About />
            <Resume />
            <Services />
            <Facts />
            <Portfolio />
            <Freelancing />
            <Repositories />
            <Contact />
            <Footer />
        </main>
    )
}

export default HomePage