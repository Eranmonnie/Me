import Skills from "@/components/skills";
import ProfileHeader from "@/components/PortfolioHeader";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

function Portfolio() {
    return (
        <div className="w-full lg:w-[95%] mt-14 flex flex-col gap-3 md:gap-1.5 text-zinc-100 text-sm lg:text-base p-2.5 md:p-5">
            <ProfileHeader />
            <AboutMe />
            
            {/* GitHub contribution chart */}
           
            <Experience />
            
            
            <section className="w-full">
                <h2 className="font-extrabold text-lg mb-3">Skills</h2>
                <Skills />
            </section>
            
            <Projects />
            <Education />
        </div>
    );
}

export default Portfolio;