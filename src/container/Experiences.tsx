import Reveal from "@components/Reveal"
import { experience } from "@constants/constants"
import { styles } from "@constants/styles"
import { GoProject } from "react-icons/go"

const Experiences = () => {
  
  return (
    <section id="experiences" className={`${styles.padding} ${styles.paddingY} h-screen dark:text-white mt-10 sm:mt-0`}>
      <span className="absolute my-5 right-0 text-[20px] sm:text-[30px] mr-10">
            <GoProject/>
      </span>
      <div className="flex flex-col">
            <div className="flex">
              <Reveal>
                  <h3 className="flex font-outfit text-5xl sm:text-6xl font-black dark:text-white">
                    Experiences
                  </h3>
              </Reveal>
            </div>
        </div>
        <div className="flex">
            <Reveal>
              <p className="border-l-2 font-outfit text-xl pl-5 dark:text-white mt-5">
                <span className="text-[#FF2E63] dark:text-green-600">
                  Experiences & Journey
                </span> <br /> 
                There are my experiences and my career journey
              </p>
            </Reveal>
        </div>

      <div className="flex justify-center mt-10">
        <div className="flex p-5 gap-5 flex-col sm:flex-row">
          {experience.map((exp, idx) => (
            <div key={idx} className="flex flex-col p-2 border-2 border-green-500 rounded dark:bg-zinc-800 shadow-xl dark:shadow-slate-200/10 w-[500px]">
              <div className="flex gap-2 items-center mb-2">
                <img src={exp.logo} alt={exp.title} className="w-[30px] h-[30px] rounded-full" />
                <p className="font-poppins">
                  {exp.title}
                </p>
              </div>
              <p className="font-outfit">
                {exp.role}
              </p>
              <p>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Experiences