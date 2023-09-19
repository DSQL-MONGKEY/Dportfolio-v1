import { useState } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { BiMenuAltLeft } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion"

import { navLinks } from "@constants/constants"
import { NavProps } from "src/types/Nav"


const Navbar = ({ darkTheme, setDarkTheme }: NavProps) => {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <>
         <nav className="fixed z-50 top-0 p-3 w-full shadow bg-white 
         dark:bg-[#252A34] text-center">

            {/* Name */}
            <div className="flex justify-between items-center">
               <p className="sm:flex hidden font-poppins font-bold text-md p-2 text-[#373f4f] dark:text-[#e1e2f4] grow">DIMAS PRASETYO&nbsp;
                  <span className="dark:text-white">
                     |
                  </span> &nbsp;
                  <span className="text-[#FF2E63]">Overview</span>
               </p>

               {/* List Navbar */}
               <ul className="sm:flex hidden justify-end flex-grow justify- items-center gap-4 mr-5 font-poppins text-slate-900 dark:text-[#EAEAEA] font-bold tracking-wider">
                  {navLinks.map(nav => (
                     <li key={nav.title} className="p-1">
                        <a href={`#${nav.id}`} className="flex gap-2">
                           <span className="text-2xl">
                              {nav.icon}
                           </span> 
                           {nav.title}
                        </a>
                     </li>
                  ))}
               </ul>
               
               <div className="flex sm:hidden justify-end flex-col">
                  <button onClick={() => setIsOpen(!isOpen)} className="text-4xl dark:text-white">
                     {isOpen ? <IoMdClose/> : <BiMenuAltLeft/>}
                  </button>
                  
                  <AnimatePresence>
                     {isOpen && (
                     <motion.div
                        initial={{  opacity: 0 }}
                        animate={{  opacity: 1,   }}
                        transition={{
                           duration: 0.5,
                           delay: 0.3,
                           ease: [0, 0.71, 0.2, 1.01]
                        }}
                        exit={{ opacity: 0 }}
                        className={`flex justify-center absolute top-14 left-0 bg-white dark:bg-[#252A34] h-screen w-full`}>
                        <ul className={`flex flex-col  gap-4 font-poppins text-slate-900 dark:text-[#EAEAEA] font-bold tracking-wider`}>
                           {navLinks.map(nav => (
                              <li key={nav.title} className="flex justify-start p-1">
                                 <a href={`#${nav.id}`} className="flex gap-3 items-center justify-center">
                                    <span>
                                       {nav.icon}
                                    </span> 
                                    {nav.title}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                     )}
                  </AnimatePresence>
               </div>

               {/* Theme Toggle */}
               <div className="flex items-center box-border border-2 border-zinc-900 dark:border-white dark:text-white rounded pr-1 pb-1">
                  <button onClick={() => setDarkTheme(!darkTheme)} className="box-border border-2 border-zinc-900 dark:border-white rounded p-1">
                     {darkTheme ? 
                     <BsFillSunFill className="text-[20px] border-none"/> : 
                     <BsFillMoonStarsFill className="text-[20px] border-none"/> }
                  </button>
               </div>

               
            </div>
         </nav>
      </>
   )
}

export default Navbar