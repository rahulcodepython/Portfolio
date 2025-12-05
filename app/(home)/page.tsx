import { getFeaturedProjects } from "@/lib/database/queries/projects.queries";
import { getSettings } from "@/lib/database/queries/settings.queries";
import { getAllSkills } from "@/lib/database/queries/skills.queries";
import { Project, Settings, Skill } from "@/lib/database/schema";
import { unstable_cache } from "next/cache";
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

// At the top of your page.tsx
export const dynamic = 'force-static'; // or 'error' to throw if dynamic

// Enable static generation with ISR (Incremental Static Regeneration)

interface HomeData {
    settings: Settings | null;
    skills: Skill[];
    projects: Project[];
}

const getHomeData = unstable_cache(
    async () => {
        console.log('🔥 HIT NEON DB - CACHE MISS IN ', process.env.NODE_ENV);

        try {
            const settings = await getSettings();
            const skills = await getAllSkills();
            const projects = await getFeaturedProjects();

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
    },
    ['home-data'],
    {
        tags: ['home-data'],
        revalidate: false, // Only revalidate when tag is explicitly revalidated
    }
);

export default async function Home() {
    const { settings, skills, projects } = await getHomeData();

    return (
        <div className="min-h-screen bg-background">
            {settings && <Hero settings={settings} />}
            <About />
            <Education />
            <Experience />
            <Skills skills={skills} />
            <Services />
            <Projects projects={projects} />
            <Contact />
            {settings && <Footer settings={settings} />}
            <ScrollToTop />
        </div>
    );
}