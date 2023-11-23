import Reveal from "@components/Reveal"
import UnderConstruct from "@components/UnderConstruct"
import { styles } from "@constants/styles"
import { GoWorkflow } from "react-icons/go"

const Projects = () => {
   return (
      <section id="projects" className={`${styles.padding} ${styles.paddingY} h-full dark:text-white mt-10 sm:mt-0`}>
         <span className="absolute my-5 right-0 text-[20px] sm:text-[30px] mr-10">
            <GoWorkflow/>
         </span>

         <div className="flex">
            <Reveal>
               <h3 className="flex font-outfit text-5xl sm:text-6xl font-black dark:text-white p-2">
                  Projects
               </h3>
            </Reveal>
         </div>

         <div className="flex">
            <Reveal>
               <p className="border-l-2 font-outfit text-xl pl-5 dark:text-white mt-5">
                  <span className="text-[#FF2E63] dark:text-green-600">
                     My Projects
                  </span> <br />
                  Few projects that i&apos;ve been work on so far
               </p>
            </Reveal>
         </div>

         <div className="flex justify-center">
            <UnderConstruct/>
         </div>
      </section>
   )
}

export default Projects