import { useState } from "react"
import { GoCodeReview, GoTools, GoFlame } from "react-icons/go"

import Reveal from "@components/Reveal"
import { techSkills, tools } from "@constants/constants"
import { styles } from "@constants/styles"
import Card from "@components/Card"

const Skills = () => {
  const [items, setItems] = useState(techSkills)

  const handleTechButton = () => {
    setItems(techSkills)
  }
  const handleToolButton = () => {
    setItems(tools)
  }

  return (
    <section id="skills" className={`${styles.padding} ${styles.paddingY} h-[800px] border-r-2`}>
      <span className="absolute right-0 text-[20px] sm:text-[30px] dark:text-white mr-10 mt-5">
            <GoCodeReview/>
        </span>
      <div className="flex">
        <Reveal>
          <h3 className="flex font-outfit text-5xl sm:text-6xl font-black dark:text-white">
            Skills
          </h3>
        </Reveal>
      </div>
      <div className="flex">
        <Reveal>
          <p className="border-l-2 font-outfit text-xl pl-5 dark:text-white mt-5">
            <span className="text-[#FF2E63] dark:text-green-600">
              Tech Stack and Tools
            </span> <br /> 
            i&apos;ve learned & experienced
          </p>
        </Reveal>
      </div>
      
      <div className="flex flex-col mt-10 justify-center items-center gap-2 ">
        <div className="flex gap-5 dark:text-white">
          <button
          onClick={handleTechButton}
          className="flex items-center gap-2 p-2 border-2 font-poppins">
            Tech <GoFlame/>
          </button>
          <button 
          onClick={handleToolButton}
          className="flex items-center gap-2 p-2 border-2 font-poppins">
            Tools <GoTools/>
          </button>
        </div>

        <Card items={items} />
      </div>
    </section>
  )
}

export default Skills