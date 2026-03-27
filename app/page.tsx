import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
//import Skills from "@/components/Skills"
//import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ProjectsSection from "@/components/Projects/ProjectsSection"
import SkillsSection from "@/components/Skills/SkillsSection"
import '@/styles/globals.css'


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  )
}
