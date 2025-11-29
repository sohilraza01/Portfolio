import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Resume from "./Reaume/Resume"
import Services from "./Services/Services"
import Skills from "./Skills/Skills"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Services/>
      <Resume/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
