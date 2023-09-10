import { GoQuestion } from "react-icons/go"
import { styles } from "@constants/styles"
import Reveal from "@components/Reveal"

const About = () => {

   return (
      <section 
      id="about" 
      className={`${styles.padding} ${styles.paddingY} w-full h-[650px] sm:h-[600px] dark:text-white`}>
         <span className="absolute my-5 right-0 text-[20px] sm:text-[30px] mr-10">
            <GoQuestion/>
         </span>
         <div className="flex mt-2">
            <Reveal>
               <h2
               className="font-outfit font-black text-5xl sm:text-6xl">
                  About
               </h2>
            </Reveal>
         </div>
         <br />
         <div className="flex flex-col border-l-2 gap-5 px-5">
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
                  Passionate and seasoned Software Engineer with a strong focus on frontend development. Intermediate experience with Javascript/Typescript and well-versed of frontend technologies. Lifetime learner, always learning something new about technologies that never ends.
                  </p>
               </Reveal>
            </div>

         </div>
      </section>
   )
}

export default About