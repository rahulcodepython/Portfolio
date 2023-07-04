import SocialIcons from '@/components/Home/socialicons'
import Navbar from '@/components/base/navbar'
import Hero from '@/components/Home/hero'
import React from 'react'
import About from '@/components/Home/about'
import Resume from '@/components/Home/resume'
import Services from '@/components/Home/services'
import Pricing from '@/components/Home/pricing'
import Freelancing from '@/components/Home/freelancing'
import Contact from '@/components/Home/contact'
import Footer from '@/components/base/footer'

const Home = () => {
    return (
        <main>
            <SocialIcons />
            <Hero />
            <Navbar />
            <About />
            <Resume />
            <Services />
            <Pricing />
            <Freelancing />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home