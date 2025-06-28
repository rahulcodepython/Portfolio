import About from "@/app/(portfolio)/about"
import Contact from "@/app/(portfolio)/contact"
import Hero from "@/app/(portfolio)/hero"
import Services from "@/app/(portfolio)/services"
import Skills from "@/app/(portfolio)/skill"
import SocialIcons from "@/app/(portfolio)/social-icons"
import Navbar from "@/components/navbar"
import { getBaseUrl } from "@/utils/GetBaseUrl"
import Blogs from "./blogs"
import Projects from "./projects"

const Home = async () => {
    const baseurl = await getBaseUrl();

    const response = await fetch(`${baseurl}/api/landing`, {
        cache: 'force-cache',
        next: { revalidate: 120 },
    });

    const { blogs, projects, resume } = await response.json();

    return (
        <section>
            <SocialIcons />
            <Hero resume={resume.resume} />
            <Navbar />
            <section className="flex flex-col gap-12 my-16">
                <About />
                <Skills />
                <Services />
                <Projects projects={projects} />
                <Blogs blogs={blogs} />
                <Contact />
            </section>
        </section>
    )
}

export default Home