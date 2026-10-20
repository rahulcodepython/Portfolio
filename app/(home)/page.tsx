import Navbar from "@/components/site/navbar";
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

export default function Home() {
    return (
        <div className="min-h-screen bg-background overflow-x-clip">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Services />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
