import { BsDownload } from "react-icons/bs"
import { styles } from "@constants/styles"
import { dimas, myCv } from "@assets/index"
import { socialMedia } from "@constants/constants"
import Reveal from "@components/Reveal"
import Typed  from "typed.js"
import { useEffect, useRef } from "react"

const Hero = () => {
  const ref = useRef(null)
  
  useEffect(() => {
    new Typed(ref.current, {
      strings: ["Frontend Developer", "Network Engineer", "IoT"],
      typeSpeed: 60,
      loop: true,
      showCursor: false,
      fadeOut: true,
      backDelay: 1000
    });

  },)

  return (
    <section id="home" className={`${styles.padding} mb-20 h-[700px] sm:h-full w-full`}>
      <div className={` flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-10`}>

        <div className={`font-outfit flex flex-col justify-start items-start w-full`}>
          <h1 className={`${styles.heroHeadText} dark:text-white`}>
            Hi There!
          </h1>
          <h2 className={`${styles.heroSubText} flex font-black dark:text-white`}>
            <Reveal>
              <>
                <span>I'm</span>&nbsp;
                <span> Dimas Prasetyo</span>
              </>
            </Reveal> | &nbsp; 
            <Reveal>
              <span ref={ref} />
            </Reveal>
          </h2>
          <div className="flex gap-3 dark:text-white">
            {socialMedia.map(item => (
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex container justify-center bg-[#ff5680d0] dark:bg-green-600/90 rounded-tr-[45px] rounded-b-[100px] rounded-bl-[110px] w-[275px] p-2 -translate-y-2 sm:w-[435px]">
          <img 
            src={dimas} 
            alt="dimas's photo" 
            className="bg-[#FF2E63] dark:bg-green-500 rounded-b-[100px] rounded-tr-[38px] translate-x-2 translate-y-2 dark:border dark:border-green-500"/>
        </div>
      </div>

      <div className="border-y-2 border-l-2 sm:w-1/2 p-2">
        <div className="flex flex-col border-y-2 border-r-2 p-2 font-outfit sm:translate-x-10">
          <p className=" dark:text-white">
            I create stunning website and UI design for your business, Intermediate experienced in web design and development.
          </p>
          <button className="dark:text-white hover:bg-slate-200 hover:dark:text-black duration-100 hover:scale-105 -translate-x-1 sm:-translate-x-3">
            <a href={myCv} target="_blank" rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 animate-pulse hover:animate-none"
            >
              <span className="text-[#FF2E63] dark:text-green-600">
                <BsDownload />
              </span> 
              My Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero