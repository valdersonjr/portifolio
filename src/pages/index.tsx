import { Hero, Header, About, WorkExperience, Skills, Projects, ContactMe } from "@/components";
import { IAbout, IExperienceCard, IHeader, IHero, IProjects } from "@/model/DataView";
import { useEffect, useState } from "react";

export default function Home() {
  const [header, setHeader] = useState<IHeader>();
  const [hero, setHero] = useState<IHero>();
  const [aboutMe, setAboutMe] = useState<IAbout>();
  const [experiences, setExperiences] = useState<IExperienceCard[]>([]);
  const [projects, setProjects] = useState<IProjects[]>();

  useEffect(() => {
    fetch('/api/v1/header').then((response) => response.json()).then((data) => setHeader(data.header)).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch('/api/v1/hero').then((response) => response.json()).then((data) => setHero(data.hero)).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch('/api/v1/about').then((response) => response.json()).then((data) => setAboutMe(data.aboutMe)).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch('/api/v1/experience').then((response) => response.json()).then((data) => setExperiences(data.experienceArray)).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch('/api/v1/projects').then((response) => response.json()).then((data) => setProjects(data.projects)).catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header header={header} />

      <section id="hero" className="snap-start">
        <Hero hero={hero} />
      </section>

      <section id="about" className="snap-center">
        <About aboutMe={aboutMe} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </main>
  )
}
