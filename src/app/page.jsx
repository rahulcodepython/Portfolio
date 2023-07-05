import SocialIcons from '@/components/Home/socialicons'
import Navbar from '@/components/base/navbar'
import Hero from '@/components/Home/hero'
import React from 'react'
import About from '@/components/Home/about'
import Resume from '@/components/Home/resume'
import Services from '@/components/Home/services'
import Pricing from '@/components/Home/pricing'
import Freelancing from '@/components/Home/freelancing'
import Repositories from '@/components/Home/repositories'
import Contact from '@/components/Home/contact'
import Footer from '@/components/base/footer'
import Facts from '@/components/Home/facts'
import Portfolio from '@/components/Home/portfolio'
import Blogs from '@/components/Home/blogs'

const Home = () => {
    return (
        <main>
            <SocialIcons />
            <Hero />
            <Navbar />
            <About />
            <Resume />
            <Services />
            <Facts />
            <Pricing />
            <Portfolio />
            <Freelancing />
            <Repositories />
            <Blogs />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home