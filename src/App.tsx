import About from "@container/About"
import Navbar from "./components/Navbar"
import { useState } from "react"
import Hero from "@container/Hero"
import Skills from "@container/Skills"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <section className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-[#252A34] w-full">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Hero/>
        <About/>
        <Skills/>
      </div>
    </section>
  )
}

export default App
