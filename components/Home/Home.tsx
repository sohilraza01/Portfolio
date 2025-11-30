"use client";
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Resume from "./Reaume/Resume"
import Services from "./Services/Services"
import Skills from "./Skills/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
const Home = () => {

  useEffect(()=>{
    const initAos = async ()=>{
      await import('aos');
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:'top-bottom'
      })
    }
  initAos();
  },[])


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
