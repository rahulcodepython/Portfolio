import SocialIcons from '@/components/server/socialicons'
import Navbar from '@/components/base/navbar'
import Hero from '@/components/server/hero'
import React from 'react'
import About from '@/components/server/about'
import Resume from '@/components/server/resume'
import Services from '@/components/server/services'
import Freelancing from '@/components/server/freelancing'
import Repositories from '@/components/server/repositories'
import Contact from '@/components/server/contact'
import Footer from '@/components/base/footer'
import Facts from '@/components/server/facts'
import Portfolio from '@/components/server/portfolio'

const Page = () => {
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

export default Page