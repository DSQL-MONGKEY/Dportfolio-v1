import Reveal from "@components/Reveal"
import { styles } from "@constants/styles"
import { BsChatRightText } from "react-icons/bs"


const Contact = () => {

   return (
      <section id="contact" className={`${styles.padding} ${styles.paddingY} h-screen`}>
         <span className="absolute right-0 text-[20px] sm:text-[30px] dark:text-white mr-10 mt-5">
            <BsChatRightText/>
         </span>

         <div className="flex">
            <Reveal>
               <h3 className="font-outfit text-5xl sm:text-6xl font-black dark:text-white">
                  Contact
               </h3>
            </Reveal>
         </div>

         <div className="flex">
         <Reveal>
               <p className="border-l-2 font-outfit text-xl pl-5 dark:text-white mt-5">
                  <span className="text-[#FF2E63] dark:text-green-600">
                     Get in touch with me
                  </span> <br /> 
                  Feel free to connect 
               </p>
            </Reveal>
         </div>
      </section>
   )
}

export default Contact