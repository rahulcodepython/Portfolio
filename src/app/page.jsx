import React from 'react'
import SocialIcons from './components/server/SocialIcons'
import Hero from './components/server/Hero'
import Resume from './components/server/Resume'
import Services from './components/server/Services'
import Contact from './components/server/Contact'
import Footer from './components/server/Footer'
import Projects from './components/server/Projects'
import ScrollUp from './components/client/ScrollUp'
import Skills from './components/client/Skills'
import Navbar from './components/client/Navbar'
import About from './components/server/About'

const Home = () => {
	return (
		<main>
			<SocialIcons />
			<Hero />
			<Navbar />
			<div className='flex flex-col gap-14'>
				<About />
				<Resume />
				<Skills />
				<Services />
				<Projects />
				<Contact />
				<Footer />
			</div>
			<ScrollUp />
		</main>
	)
}

export default Home