// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from "typed.js"
import { useRef, useEffect } from "react"

import { styles } from "@constants/styles"
import { dimas, myCv } from "@assets/index"
import { socialMedia } from "@constants/constants"

const Hero = () => {
  const elRef = useRef(null) 

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: ['Frontend Developer'],
      showCursor: false,
      typeSpeed: 100,
      fadeOut: true,
    })
    return () => {
      typed.destroy()
    }
  },[])

  return (
    <section id="home" className={`${styles.padding} min-h-screen w-full`}>
      <div className={`${styles.paddingY} flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-10`}>

        <div className={`font-outfit flex flex-col justify-start items-start w-full`}>
          <h1 className={`${styles.heroHeadText} dark:text-white`}>
            Hi There!
          </h1>
          <h2 className={`${styles.heroSubText} font-black dark:text-white`}>
            <span>I'm</span>&nbsp;
            Dimas Prasetyo | <span ref={elRef} />
          </h2>
          <div className="flex gap-3 dark:text-white">
            {socialMedia.map(item => (
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-5 border-4 border-slate-300 dark:border-slate-200 pb-2 w-[175px] sm:w-[435px] rounded-sm">
          <img src={dimas} alt="dimas-photo"  className="border-4 hover:bg-zinc-200 duration-300 border-slate-300 dark:border-slate-200 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] rounded-sm -translate-x-8 hover:translate-x-0 mx-2 transition-transform"/>
        </div>
      </div>

      <div className="border-y-2 border-l-2 sm:w-1/2 p-2">
        <div className="flex flex-col border-y-2 border-r-2 p-2 font-outfit sm:translate-x-10">
          <p className=" dark:text-white">
            I create stunning website for your business, Intermediate experienced in web design and development.
          </p>
          <button className="dark:text-white hover:bg-slate-200 hover:dark:text-black duration-100">
            <a href={myCv} target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero