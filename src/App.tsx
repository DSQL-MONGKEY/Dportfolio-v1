import About from "@container/About"
import Navbar from "./components/Navbar"
import { useState } from "react"
import Hero from "@container/Hero"
import Skills from "@container/Skills"
import Educations from "@container/Educations"
import Experiences from "@container/Experiences"
import Projects from "@container/Projects"
import Footer from "@components/Footer"
import Contact from "@container/Contact"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <section className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-[#252A34] transition-colors duration-300 w-full h-full">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Hero/>
        <About/>
        <Skills/>
        <Educations/>
        <Experiences/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </section>
  )
}

export default App
