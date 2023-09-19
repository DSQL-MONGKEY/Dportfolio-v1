import { GoHome, GoQuestion, GoProject, GoWorkflow, GoCodeReview } from "react-icons/go"
import { BsChatRightText, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { SiMui, SiHtml5, SiXampp, SiIntellijidea, SiAndroidstudio } from "react-icons/si"
import { IoSchoolOutline, IoLogoJavascript } from "react-icons/io5"
import { FaCss3, FaPhp, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaFigma, FaNodeJs } from "react-icons/fa"
import { TbBrandTypescript, TbBrandTailwind, TbBrandNextjs, TbBrandMysql, TbBrandMongodb, TbBrandVite, TbBrandNotion, TbBrandVscode, TbBrandKotlin } from "react-icons/tb"

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
      title: 'Kotlin',
      icon: <TbBrandKotlin/>,
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
      title: 'IntelliJ IDEA',
      icon: <SiIntellijidea/>
   },
   {
      title: 'Android Studio',
      icon: <SiAndroidstudio/>
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

const educations = [
   {
      title: 'Citra Negara Vocational High Shcool',
      major: 'Software Engineer',
      date: '2020 - 2022',
   },
   {
      title: 'Gunadarma University',
      major: 'Computer System',
      date: '2022 - Present',
   },
]

const license = [
   {
      title: 'Web Programming',
      place: 'Badan Nasional Sertifikasi Profesi(BNSP)',
      date: 'Feb - 2022'
   },
   {
      title: 'Frontend Developer',
      place: 'Dicoding ID',
      date: 'August - 2022'
   },
]

const experience = [
   {
      title: 'I constanly seeking an',
      role: 'Frontend Developer',
      desc: 'Create frontend application queue puskesmas for passing test of BNSP'
   },
   {
      title: 'I constanly seeking an',
      role: 'Frontend Developer',
      desc: 'Create frontend application queue puskesmas for passing test of BNSP'
   },
   {
      title: 'I constanly seeking an',
      role: 'Frontend Developer',
      desc: 'Create frontend application queue puskesmas for passing test of BNSP'
   }
]

export { 
   navLinks, 
   socialMedia, 
   techSkills, 
   tools, 
   educations, 
   license,
   experience
}