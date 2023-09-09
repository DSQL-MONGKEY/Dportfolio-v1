import { GoHome, GoQuestion, GoProject, GoWorkflow, GoCodeReview } from "react-icons/go"
import { BsChatRightText, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { SiMui, SiHtml5, SiXampp } from "react-icons/si"
import { IoSchoolOutline, IoLogoJavascript } from "react-icons/io5"
import { FaCss3, FaPhp, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaFigma, FaNodeJs } from "react-icons/fa"
import { TbBrandTypescript, TbBrandTailwind, TbBrandNextjs, TbBrandMysql, TbBrandMongodb, TbBrandVite, TbBrandNotion, TbBrandVscode } from "react-icons/tb"

const navLinks = [
   {
      id: 'home',
      title: 'Home',
      icon: <GoHome/>
   },
   {
      id: 'about',
      title: 'About',
      icon: <GoQuestion/>
   },
   {
      id: 'skills',
      title: 'Skills',
      icon: <GoCodeReview/>
   },
   {
      id: 'educations',
      title: 'Educations',
      icon: <IoSchoolOutline/>
   },
   {
      id: 'experiences',
      title: 'Experiences',
      icon: <GoProject/>
   },
   {
      id: 'projects',
      title: 'Projects',
      icon: <GoWorkflow/>
   },
   {
      id: 'contact',
      title: 'Contact',
      icon: <BsChatRightText/>
   },
]

const socialMedia = [
   {
      title: 'Instagram',
      icon: <BsInstagram/>,
      link: 'https://www.instagram.com/dimpfe/'
   },
   {
      title: 'Linkedin',
      icon: <BsLinkedin/>,
      link: 'https://www.linkedin.com/in/dimp-fe/'
   },
   {
      title: 'Github',
      icon: <BsGithub/>,
      link: 'https://github.com/DSQL-MONGKEY'
   },
]



const techSkills = [
   {
      title: 'HTML',
      icon: <SiHtml5/>,
   },
   {
      title: 'CSS',
      icon: <FaCss3/>,
   },
   {
      title: 'Javascript',
      icon: <IoLogoJavascript/>,
   },
   {
      title: 'Typescript',
      icon: <TbBrandTypescript/>,
   },
   {
      title: 'PHP',
      icon: <FaPhp/>,
   },
   {
      title: 'Node Js',
      icon: <FaNodeJs/>,
   },
   {
      title: 'React Js',
      icon: <FaReact/>,
   },
   {
      title: 'Next Js',
      icon: <TbBrandNextjs/>,
   },
   {
      title: 'React Native',
      icon: <FaReact/>,
   },
   {
      title: 'Laravel',
      icon: <FaLaravel/>,
   },
   {
      title: 'MySQL',
      icon: <TbBrandMysql/>,
   },
   {
      title: 'MongoDB',
      icon: <TbBrandMongodb/>,
   },
   {
      title: 'Tailwind CSS',
      icon: <TbBrandTailwind/>,
   },
   {
      title: 'Material UI',
      icon: <SiMui/>,
   },
   {
      title: 'Bootstrap',
      icon: <FaBootstrap/>,
   },
   {
      title: 'Vite',
      icon: <TbBrandVite/>,
   },
]

const tools = [
   {
      title: 'VScode',
      icon: <TbBrandVscode/>
   },
   {
      title: 'Git',
      icon: <FaGitAlt/>
   },
   {
      title: 'Github',
      icon: <BsGithub/>
   },
   {
      title: 'XAMPP',
      icon: <SiXampp/>
   },
   {
      title: 'Figma',
      icon: <FaFigma/>
   },
   {
      title: 'Notion',
      icon: <TbBrandNotion/>
   },
]

export { navLinks, socialMedia, techSkills, tools }