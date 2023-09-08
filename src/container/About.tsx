import { GoQuestion } from "react-icons/go"
import { styles } from "@constants/styles"
import Reveal from "@components/Reveal"

const About = () => {

   return (
      <section 
      id="about" 
      className={`${styles.padding} ${styles.paddingY} w-full h-screen dark:text-white`}>
         <span className="absolute right-0 text-[20px] sm:text-[30px] mr-10">
            <GoQuestion/>
         </span>
         <div className="flex">
               <Reveal>
                  <h2
                  className="font-outfit font-black text-5xl sm:text-7xl">
                     About
                  </h2>
               </Reveal>
            </div>

         <div className="flex flex-col gap-5 border-l-2  p-5">
            <div className="sm:w-1/2">
               <Reveal>
                  <h2 className="text-2xl font-poppins">
                     Wassup homies! <br />
                     i&apos;m <span className="text-[#FF2E63] dark:text-green-600">
                        Dimas Prasetyo🐼
                        </span>&nbsp; 
                        <br />a <span className="">Frontend Developer</span> based in Indonesia
                  </h2>
               </Reveal>
            </div>
            <div className="sm:w-1/2">
               <Reveal>
                  <p className="font-outfit">
                     As a frontend website and mobile developer. I have intermediate experienced in this field and i hope with this, i can learn something new and deepen the knowledge that i have and also i want what i make, to be useful for many people. 
                  </p>
               </Reveal>
            </div>

         </div>
      </section>
   )
}

export default About