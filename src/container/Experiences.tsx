import Reveal from "@components/Reveal"
import { styles } from "@constants/styles"
import { useDragControls, motion } from "framer-motion"
import { GoProject } from "react-icons/go"

const Experiences = () => {
  
  return (
    <section className={`${styles.padding} ${styles.paddingY} h-screen dark:text-white`}>
      <span className="absolute my-5 right-0 text-[20px] sm:text-[30px] mr-10">
            <GoProject/>
      </span>
      <div className="flex mt-2">
        <Reveal>
          <h2
          className="font-outfit font-black text-5xl sm:text-6xl">
            Experience
          </h2>
        </Reveal>
      </div>
      
    </section>
  )
}

export default Experiences