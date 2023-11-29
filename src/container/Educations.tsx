import Reveal from "@components/Reveal"
import { ScrollArea } from "@components/ui/scroll-area"
import { certificates, educations } from "@constants/constants"
import { styles } from "@constants/styles"

import { IoSchoolOutline } from "react-icons/io5"
import { cn } from "../lib/utils"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog"
import { Skeleton } from "@components/ui/skeleton"


const Educations = () => {
   return (
      <section id="educations" className={`${styles.padding} ${styles.paddingY} mb-20 h-full`}>
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
                     Formal Educations & Certificates
                  </span> <br /> 
                  There are some formal education and certificates that i&apos;ve reached
               </p>
            </Reveal>
         </div>
         <div className="grid grid-row-2 md:grid-cols-2 justify-center mt-10 sm:mt-20 gap-5 dark:text-white font-outfit">
            <div className="group flex flex-col gap-5 hover:bg-slate-100 hover:dark:bg-gray-700 p-5 transition ease-in-out duration-300">
               <p className="bg-slate-100 text-black w-fit px-2 rounded-tr-lg rounded-bl-lg">
                  Formal Educations
               </p>
               {educations.map((edu, idx) => (
                  <div key={idx} className="bg-slate-200 dark:bg-zinc-700 pt-3 rounded sm:w-[400px]">
                     <div className="bg-slate-300 dark:bg-zinc-900 p-2">
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
            <div className="group flex flex-col gap-5 hover:bg-slate-100 hover:dark:bg-gray-700 p-5 transition ease-in-out duration-200 h-80">
               <p className="bg-slate-100 text-black w-fit px-2 rounded-tr-lg rounded-bl-lg">
                  Certificates
               </p>
               <ScrollArea>
                  <div className="grid grid-cols-3 gap-5">
                     {certificates.map((certi, idx) => (
                        <Dialog key={idx}>
                           <DialogTrigger>
                              <div key={certi.title} className="flex flex-col justify-center items-center bg-slate-300 dark:bg-zinc-600 hover:bg-slate-400/50 dark:hover:bg-zinc-900/50 py-2 text-center rounded">
                                 <div>
                                    <p className={cn("text-sm",certi.title.length > 16 && "text-[12px]")}>
                                       {certi.title}
                                    </p>
                                 </div>
                              </div>
                           </DialogTrigger>
                           <DialogContent className="sm:max-w-[425px] flex flex-col w-full items-center">
                              <DialogHeader className="w-full">
                                 <DialogTitle className="text-lg">
                                    {certi.title}
                                 </DialogTitle>
                                 <DialogDescription>
                                    {certi.institution}
                                 </DialogDescription> 
                              </DialogHeader>
                                 <a href={certi.link } target="_blank" rel="noreferrer noopener" className={certi.link == undefined ? 'disabled' : certi.link}>
                                    {}
                                 </a>
                              <div>
                                 {certi.desc}
                              </div>
                           </DialogContent>
                        </Dialog>
                     ))}
                  </div>
               </ScrollArea>
            </div>
         </div>
      </section>
   )
}

export default Educations