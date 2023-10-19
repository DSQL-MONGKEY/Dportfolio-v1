import Reveal from "@components/Reveal"
import { license, educations } from "@constants/constants"
import { styles } from "@constants/styles"

import { IoSchoolOutline } from "react-icons/io5"

const Educations = () => {
   return (
      <section id="educations" className={`${styles.padding} ${styles.paddingY} h-screen`}>
         <span className="absolute right-0 text-[20px] sm:text-[30px] dark:text-white mr-10 mt-5">
               <IoSchoolOutline/>
         </span>
         <div className="flex flex-col">
            <div className="flex">
               <Reveal>
                  <h3 className="flex font-outfit text-5xl sm:text-6xl font-black dark:text-white">
                     Educations
                  </h3>
               </Reveal>
            </div>
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
         <div className="flex flex-col sm:flex-row justify-center mt-20 gap-5 dark:text-white font-outfit">
            <div className="flex flex-col gap-5 border-l-2 pl-2">
               <p>Educations</p>
               {educations.map((edu, idx) => (
                  <div key={idx} className="bg-slate-200 dark:bg-zinc-700 pt-3 rounded sm:w-[400px]">
                     <div className="bg-slate-100 dark:bg-zinc-800 p-2">
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
            <div className="flex flex-col gap-5 border-l-2 pl-2">
               <p className="">Licenses</p>
                  {license.map((license, idx) => (
                     <div key={idx} className="bg-slate-200 dark:bg-zinc-700 pt-3 rounded-sm sm:w-[400px]">
                        <div className="bg-slate-100 dark:bg-zinc-800 p-2">
                           <div className="flex mb-2">
                              <Reveal>
                                 <p>{license.title}</p>
                              </Reveal>
                           </div>
                           <div className="flex">
                              <Reveal>
                                 <p>{license.place}</p>
                              </Reveal>
                           </div>
                           <div className="flex">
                              <Reveal>
                                 <p>{license.date}</p>
                              </Reveal>
                           </div>
                        </div>
                     </div>
                  ))}
            </div>
         </div>
      </section>
   )
}

export default Educations