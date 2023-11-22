import { useEffect, useRef, useState } from "react"
import { GoCodeReview, GoTools, GoFlame, GoCodeOfConduct } from "react-icons/go"

import Reveal from "@components/Reveal"
import { softSkills, techSkills, tools } from "@constants/constants"
import { styles } from "@constants/styles"
import Card from "@components/Card"

import { useToast } from "@components/ui/toast/use-toast"
import { ToastAction } from "@components/ui/toast/toast"
import { Toaster } from "@components/ui/toast/toaster"
import { useInView } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs"

const Skills = () => {
  const [items, setItems] = useState(techSkills)
  const ref = useRef(null)
  const { toast } = useToast()
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    let toastTime:ReturnType<typeof setTimeout>
    
    if(isInView) {
    toastTime = setTimeout(() => (
        toast({
          title: "Heii Hoo!",
          description: "Hover the icon to know more",
          action: (
            <ToastAction altText="Goto">Ok!</ToastAction>
          )
        })
      ), 2000)
      return () => clearTimeout(toastTime)
    }
  }, [isInView, toast])


  const handleTechButton = () => {
    setItems(techSkills)
  }
  const handleToolButton = () => {
    setItems(tools)
  }
  const handleSoftButton = () => {
    setItems(softSkills)
  }

  return (
    <section id="skills" className={`${styles.padding} ${styles.paddingY} h-[850px]`}>
      <span className="absolute right-0 text-[20px] sm:text-[30px] dark:text-white mr-10 mt-5">
            <GoCodeReview/>
        </span>
      <div className="flex">
        <Reveal>
          <h3 className="flex font-outfit text-5xl sm:text-6xl font-black dark:text-white">
            Skills
          </h3>
        </Reveal>
      </div>
      <div className="flex">
        <Reveal>
          <p className="border-l-2 font-outfit text-xl pl-5 dark:text-white mt-5">
            <span className="text-[#FF2E63] dark:text-green-600">
              Tech Stack & Tools
            </span> <br /> 
            I&apos;ve learned and experienced
          </p>
        </Reveal>
      </div>
      
      <div ref={ref} className="flex flex-col mt-10 justify-center items-center gap-2 ">
        <Tabs defaultValue="techSkills" className="w-[350px] sm:w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="techSkills" onClick={handleTechButton} className="flex gap-2">
              Tech Skills <GoFlame/>
            </TabsTrigger>
            <TabsTrigger value="tools" onClick={handleToolButton} className="flex gap-2">
              Tools <GoTools/>
            </TabsTrigger>
            <TabsTrigger value="softSkills" onClick={handleSoftButton} className="flex gap-2">
              Soft Skills <GoCodeOfConduct />
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Toaster />
        <Card items={items} />
      </div>
    </section>
  )
}

export default Skills