import React from 'react'
import SocialIcons from './components/server/SocialIcons'
import Hero from './components/server/Hero'
import Navbar from './components/client/Navbar'
import About from './components/server/About'
import Resume from './components/server/Resume'
import Services from './components/server/Services'
import Contact from './components/server/Contact'
import Footer from './components/server/Footer'
import Projects from './components/server/Projects'
import ScrollUp from './components/client/ScrollUp'
import Skills from './components/client/Skills'

const Home = () => {
    return (
        <main>
            <SocialIcons />
            <Hero />
            <Navbar />
            <About />
            <Resume />
            <Skills />
            <Services />
            <Projects />
            <Contact />
            <Footer />
            <ScrollUp />
        </main>
    )
}

export default Home