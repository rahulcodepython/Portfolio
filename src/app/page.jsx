import React from 'react'
import SocialIcons from './components/server/SocialIcons'
import Hero from './components/server/Hero'
import Navbar from './components/client/Navbar'
import About from './components/server/About'
import Resume from './components/server/Resume'
import Services from './components/server/Services'
import Facts from './components/server/Facts'
import Freelancing from './components/server/Freelancing'
import Repositories from './components/server/Repositories'
import Contact from './components/server/Contact'
import Footer from './components/server/Footer'
import Projects from './components/server/Projects'
import ScrollToTop from './components/client/ScrollToTop'

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
            <Freelancing />
            <Projects />
            <Repositories />
            <Contact />
            <Footer />
            <ScrollToTop />
        </main>
    )
}

export default Home