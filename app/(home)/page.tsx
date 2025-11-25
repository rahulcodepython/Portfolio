import { getFeaturedProjects } from "@/lib/database/queries/projects.queries";
import { getSettings } from "@/lib/database/queries/settings.queries";
import { getAllSkills } from "@/lib/database/queries/skills.queries";
import { Project, Settings, Skill } from "@/lib/database/schema";
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

// Enable static generation with ISR (Incremental Static Regeneration)
export const revalidate = 200; // Revalidate every 200 seconds

interface HomeData {
    settings: Settings | null;
    skills: Skill[];
    projects: Project[];
}

async function getHomeData(): Promise<HomeData> {
    try {
        // Directly access database instead of HTTP fetch
        // This works during build time since we're using SQLite
        const settings = getSettings();
        const skills = getAllSkills();
        const projects = getFeaturedProjects();

        return {
            settings: settings || null,
            skills,
            projects,
        };
    } catch (error) {
        console.error('Error fetching home data:', error);
        return {
            settings: null,
            skills: [],
            projects: [],
        };
    }
}

export default async function Home() {
    const { settings, skills, projects } = await getHomeData();

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