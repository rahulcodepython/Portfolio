import { getProjects, getSettings, getSkills } from "@/lib/data";
import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Footer from "./footer";
import Hero from "./hero";
import Projects from "./projects";
import ScrollToTop from "./scroll-to-top";
import Services from "./services";
import Skills from "./skills";


export default async function Home() {
    const projects = getProjects;
    const settings = getSettings
    const skills = getSkills


    return (
        <div className="min-h-screen bg-background">
            <Hero settings={settings} />
            <About />
            <Education />
            <Experience />
            <Skills skills={skills} />
            <Services />
            <Projects projects={projects} />
            <Contact />
            <Footer settings={settings} />
            <ScrollToTop />
        </div>
    );
}