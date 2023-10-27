
import { motion } from "framer-motion"
import { SiBuildkite } from "react-icons/si"


const UnderConstruct = () => {

   return (
      <div id="construct" className="md:mx-10 my-10 md:my-20 bg-slate-200 dark:bg-zinc-900 p-10 w-[300px] md:w-1/2 rounded-xl">
         <div className="flex flex-col justify-center items-center">
            <motion.span 
               transition={{ repeat: Infinity, repeatType: "reverse" , duration: 2, stiffness: 100, ease: "easeIn" }}
               animate={{ translateY: 10 }} 
               className="text-9xl dark:text-white">
               <SiBuildkite/>
            </motion.span>
            <h1 className="text-md md:text-xl font-poppins text-center dark:text-white">This section under development</h1>
         </div>
      </div>
   )
}

export default UnderConstruct