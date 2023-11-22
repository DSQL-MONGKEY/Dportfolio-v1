import Reveal from "@components/Reveal"
import { license, educations } from "@constants/constants"
import { styles } from "@constants/styles"

import { IoSchoolOutline } from "react-icons/io5"

const Educations = () => {
   return (
      <section id="educations" className={`${styles.padding} ${styles.paddingY} sm:h-screen`}>
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
         
         <div className="flex">
            <Reveal>
               <p className="border-l-2 font-outfit text-xl pl-5 dark:text-white mt-5">
                  <span className="text-[#FF2E63] dark:text-green-600">
                     Formal Educations & Licenses
                  </span> <br /> 
                  There are some formal education and licenses that i&apos;ve reached
               </p>
            </Reveal>
         </div>
         <div className="flex flex-col sm:flex-row justify-center mt-10 sm:mt-20 gap-5 dark:text-white font-outfit">
            <div className="group flex flex-col gap-5 hover:dark:bg-gray-700 p-5 transition ease-in-out duration-200">
               <p className="bg-slate-100 text-black w-fit px-2 rounded-tr-lg rounded-bl-lg">
                  Formal Educations
               </p>
               {educations.map((edu, idx) => (
                  <div key={idx} className="bg-slate-200 dark:bg-zinc-700 pt-3 rounded sm:w-[400px]">
                     <div className="bg-slate-100 dark:bg-zinc-900 p-2">
                        <div className="flex mb-2">
                           <Reveal>
                              <p>{edu.title}</p>
                           </Reveal>
                        </div>
                        <div className="flex">
                           <Reveal>
                              <p>{edu.major}</p>
                           </Reveal>
                        </div>
                        <div>
                           <Reveal>
                              <p>{edu.date}</p>
                           </Reveal>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="flex flex-col gap-5 p-5">
               <p className="bg-slate-100 text-black w-fit px-2 rounded-tr-lg rounded-bl-lg">
                  Certificates
               </p>
               <div>
                  <button>
                     Show more...
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Educations