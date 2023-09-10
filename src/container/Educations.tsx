import Reveal from "@components/Reveal"
import { styles } from "@constants/styles"

import { IoSchoolOutline } from "react-icons/io5"

const Educations = () => {
   return (
      <section className={`${styles.padding} ${styles.paddingY} h-screen`}>
         <span className="absolute right-0 text-[20px] sm:text-[30px] dark:text-white mr-10 mt-5">
               <IoSchoolOutline/>
         </span>
         <div className="flex">
            <Reveal>
               <h3 className="flex font-outfit text-5xl sm:text-6xl font-black dark:text-white">
                  Educations
               </h3>
            </Reveal>
         </div>
      </section>
   )
}

export default Educations