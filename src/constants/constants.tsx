import { GoHome, GoQuestion, GoProject, GoWorkflow, GoCodeReview, GoBug, GoClockFill, GoDiscussionClosed, GoStarFill, GoNorthStar } from "react-icons/go"
import { BsChatRightText, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { SiMui, SiHtml5, SiXampp, SiIntellijidea, SiAndroidstudio } from "react-icons/si"
import { IoSchoolOutline, IoLogoJavascript } from "react-icons/io5"
import { FaCss3, FaPhp, FaReact, FaBootstrap, FaGitAlt, FaFigma, FaNodeJs } from "react-icons/fa"
import { TbBrandTypescript, TbBrandTailwind, TbBrandNextjs, TbBrandMysql, TbBrandMongodb, TbBrandVite, TbBrandNotion, TbBrandVscode, TbBrandKotlin, TbBrandGmail } from "react-icons/tb"
import { agrokimia, lagundi } from "@assets/index"

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
   {
      title: 'Gmail',
      icon: <TbBrandGmail/>,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dimasprasetyo7696@gmail.com'
   }
]

const techSkills = [
   {
      title: 'HTML',
      icon: <SiHtml5/>,
      level: 'Advanced'
   },
   {
      title: 'CSS',
      icon: <FaCss3/>,
      level: 'Advanced'
   },
   {
      title: 'Javascript',
      icon: <IoLogoJavascript/>,
      level: 'Advanced'
   },
   {
      title: 'Typescript',
      icon: <TbBrandTypescript/>,
      level: 'Basic'
   },
   {
      title: 'PHP',
      icon: <FaPhp/>,
      level: 'Basic'
   },
   {
      title: 'Kotlin',
      icon: <TbBrandKotlin/>,
      level: 'Basic'
   },
   {
      title: 'Node Js',
      icon: <FaNodeJs/>,
      level: 'Intermediete'
   },
   {
      title: 'React Js',
      icon: <FaReact/>,
      level: 'Intermediete'
   },
   {
      title: 'Next Js',
      icon: <TbBrandNextjs/>,
      level: 'Basic'
   },
   {
      title: 'React Native',
      icon: <FaReact/>,
      level: 'Basic'
   },
   {
      title: 'MySQL',
      icon: <TbBrandMysql/>,
      level: 'Intermediete'
   },
   {
      title: 'MongoDB',
      icon: <TbBrandMongodb/>,
      level: 'Intermediete'
   },
   {
      title: 'Tailwind CSS',
      icon: <TbBrandTailwind/>,
      level: 'Advanced'
   },
   {
      title: 'Material UI',
      icon: <SiMui/>,
      level: 'Basic'
   },
   {
      title: 'Bootstrap',
      icon: <FaBootstrap/>,
      level: 'Advanced'
   },
   {
      title: 'Vite',
      icon: <TbBrandVite/>,
      level: 'Basic'
   },
]

const tools = [
   {
      title: 'VScode',
      icon: <TbBrandVscode/>,
      level: 'Advanced'
   },
   {
      title: 'IntelliJ IDEA',
      icon: <SiIntellijidea/>,
      level: 'Basic'
   },
   {
      title: 'Android Studio',
      icon: <SiAndroidstudio/>,
      level: 'Basic'
   },
   {
      title: 'Git',
      icon: <FaGitAlt/>,
      level: 'Advanced'
   },
   {
      title: 'Github',
      icon: <BsGithub/>,
      level: 'Advanced'
   },
   {
      title: 'XAMPP',
      icon: <SiXampp/>,
      level: 'Intermediete'
   },
   {
      title: 'Figma',
      icon: <FaFigma/>,
      level: 'Basic'
   },
   {
      title: 'Notion',
      icon: <TbBrandNotion/>,
      level: 'Basic'
   },
]

const softSkills = [
   {
      title: 'Leadership',
      icon: <GoStarFill />,
      level: 'Basic'
   },
   {
      title: 'Public Speaking',
      icon: <GoDiscussionClosed />,
      level: 'Intermediete'
   },
   {
      title: 'Time Management',
      icon: <GoClockFill />,
      level: 'Basic'
   },
   {
      title: 'Problem Solving',
      icon: <GoBug />,
      level: 'Intermediete'
   },
   {
      title: 'English',
      icon: <GoNorthStar />,
      level: 'Speaking'
   },
   
]

const educations = [
   {
      title: 'Gunadarma University',
      major: 'Computer System',
      date: '2022 - Present',
   },
   {
      title: 'Citra Negara Vocational High Shcool',
      major: 'Software Engineering',
      date: '2020 - 2022',
   },
]

const certificates = [
   {
      title: 'Web Programming',
      institution: 'Badan Nasional Sertifikasi Profesi(BNSP)',
      date: 'Feb - 2022',
      image: ''
   },
   {
      title: 'Frontend Developer',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: ''
   },
]

const experience = [
   {
      title: 'PT Agrokimia Asia',
      logo: agrokimia,
      role: 'Freelance',
      desc: 'Create landing page company profile with responsive and modern minimalist design'
   },
   {
      title: 'CV Lagundi Jaya',
      logo: lagundi,
      role: 'Freelance',
      desc: 'Create landing page company profile with responsive and modern minimalist design'
   },
]

const GITHUB_ACCOUNTS = {
   username: "DSQL-MONGKEY"
}

export { 
   navLinks, 
   socialMedia, 
   techSkills, 
   tools, 
   softSkills,
   educations, 
   certificates,
   experience,
   GITHUB_ACCOUNTS,
}