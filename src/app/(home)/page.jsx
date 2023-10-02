import About from '@/app/(home)/components/server/about'
import Resume from '@/app/(home)/components/server/resume'
import Services from '@/app/(home)/components/server/services'
import Freelancing from '@/app/(home)/components/server/freelancing'
import Repositories from '@/app/(home)/components/server/repositories'
import Contact from '@/app/(home)/components/server/contact'
import Facts from '@/app/(home)/components/server/facts'
// import Portfolio from '@/app/(home)/components/client/portfolio'
import React from 'react'

const HomePage = () => {
    return (
        <main>
            <About />
            <Resume />
            <Services />
            <Facts />
            {/* <Portfolio /> */}
            <Freelancing />
            <Repositories />
            <Contact />
        </main>
    )
}

export default HomePage