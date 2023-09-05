import About from "@container/About"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-blue-500 dark:bg-zinc-900">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <About/>
      </div>
    </div>
  )
}

export default App
