import { GoHome, GoQuestion, GoProject, GoWorkflow, GoCodeReview, GoBug, GoClockFill, GoDiscussionClosed, GoStarFill, GoNorthStar } from "react-icons/go"
import { BsChatRightText, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { SiMui, SiHtml5, SiXampp, SiIntellijidea, SiAndroidstudio, SiCisco} from "react-icons/si"
import { IoSchoolOutline, IoLogoJavascript } from "react-icons/io5"
import { FaCss3, FaPhp, FaReact, FaBootstrap, FaGitAlt, FaFigma, FaNodeJs, FaPython } from "react-icons/fa"
import { TbBrandTypescript, TbBrandTailwind, TbBrandNextjs, TbBrandMysql, TbBrandMongodb, TbBrandVite, TbBrandNotion, TbBrandVscode, TbBrandKotlin, TbBrandGmail, TbBrandGolang} from "react-icons/tb"
import { agrokimia, androidBasic, backendBeginner, bnsp, frontendBeginner, frontendReact, jsBasic, kotlinBasic, lagundi, projectManagement, reactApp, sofw, sql } from "@assets/index"

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
      title: 'Python',
      icon: <FaPython/>,
      level: 'Basic'
   },
   {
      title: 'Golang',
      icon: <TbBrandGolang />,
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
      title: 'Cisco',
      icon: <SiCisco/>,
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
      level: 'Speaking - basic'
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
      image: bnsp,
      link: undefined,
      desc: 'Create a web-based community health center queuing application using the Laravel-9 framework which focuses on developing mechanisms for queuing and taking patient medicines This project has 3 authorization roles doctor, patient, pharmacist'
   },
   {
      title: 'Frontend Developer',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: frontendBeginner,
      link: 'https://drive.google.com/file/d/1mOsACSrXC97jDDuY1EioAQp-4ag5AZ1E/view?usp=drive_link',
      desc: 'Learn about how to start become Frontend Developer also about frontend technologies such like HTML, CSS, Javascript, API and how the browser works'
   },
   {
      title: 'Frontend React',
      institution: 'MySkill',
      date: 'August - 2022',
      image: frontendReact,
      link: 'https://drive.google.com/file/d/12Tn2FmxjCW6NAP3Z8ynF-PEzsRzTT0hw/view?usp=drive_link',
      desc: 'Learn about basic ReactJs the UI Javascript library and build some study case of based on it as like Frontend Developer'
   },
   {
      title: 'React App',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: reactApp,
      link: 'https://drive.google.com/file/d/1DEEFQr-y_9R1CtpNIGHeUzSRqGYXFKuz/view?usp=drive_link',
      desc: 'Learn basic ReactJS and create a simple study case with it to have deep understanding about react functional component concept'
   },
   {
      title: 'Android Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: androidBasic,
      link: 'https://drive.google.com/file/d/1mOsACSrXC97jDDuY1EioAQp-4ag5AZ1E/view?usp=drive_link',
      desc: 'Learn basic mobile development especially android OS using kotlin for the main language. For this course i learn many basic concepts like Intent, Activity, Viewport, and also logic behind the application when user request some data (proccess and distrubute them)'
   },
   {
      title: 'Backend Beginner',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: backendBeginner,
      link: 'https://drive.google.com/file/d/1KAPhr6ZPJbR0UUUUJ42zzN5mu2iidH2n/view?usp=drive_link',
      desc: 'Learn basic of Backend developer, know how the server response the request and how to handle some specific request from clients'
   },
   {
      title: 'Javascript Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: jsBasic,
      link: 'https://drive.google.com/file/d/1O2viRHkLdVCZvNWXwNXDDA-bKJqnigdc/view?usp=drive_link',
      desc: 'Learn basic Javascript, to become a Frontend and backend Developer learning path in Dicoding'
   },
   {
      title: 'Kotlin Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: kotlinBasic,
      link: 'https://drive.google.com/file/d/14B9te3yWSyK15mGoXnsOXVzd2vb1UvMX/view?usp=drive_link',
      desc: 'Learn basic Kotlin for pre-requisite to create android app with kotlin'
   },
   {
      title: 'Project Management Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: projectManagement,
      link: 'https://drive.google.com/file/d/1Xm3KXui_4e1ylDmpB58coCCuRKsJn4l8/view?usp=drive_link',
      desc: 'Learn basic project management about to know how the project flow, how a project planned and how the PM works on it.'
   },
   {
      title: 'SQL Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: sql,
      link: 'https://drive.google.com/file/d/11IXJFUHt6p5XLdK2Bf7qxyHFae9LYIay/view?usp=drive_link',
      desc: 'Learn basic concept of Structured Query Language for the Relational Database'
   },
   {
      title: 'Software Engineering',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: sofw,
      link: 'https://drive.google.com/file/d/1Pmi4RsDBa3ideoXHcaVXjaiH62HaoUHy/view?usp=drive_link',
      desc: 'Learn how to start career as Software Engineer'
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

const projects = [
   {
      title: 'Puskesmas Queue',
      techStack: [
         'PHP', 
         'Laravel-9', 
         'MySQL', 
         'Livewire', 
         'TailwindCSS', 
         ],
      desc: 'web-based community health center queuing application using the Laravel-9 framework which focuses on developing mechanisms for queuing and taking patient medicines This project has 3 authorization roles doctor, patient, pharmacist',
      image: undefined,
      link: ''
   },
   {
      title: 'Youtube Clone',
      techStack: [
         'Javascript', 
         'ReactJS', 
         'Rapid-API', 
         'TailwindCSS', 
         ],
      desc: 'web-based community health center queuing application using the Laravel-9 framework which focuses on developing mechanisms for queuing and taking patient medicines This project has 3 authorization roles doctor, patient, pharmacist',
      image: undefined,
      link: ''
   },
   {
      title: 'Portfolio Website',
      techStack: [
         'Typescript', 
         'ReactJS', 
         'TailwindCSS', 
         'Vite',  
         ],
      desc: 'web-based community health center queuing application using the Laravel-9 framework which focuses on developing mechanisms for queuing and taking patient medicines This project has 3 authorization roles doctor, patient, pharmacist',
      image: undefined,
      link: ''
   },
   {
      title: 'Google Clone',
      techStack: [
         'Javascript', 
         'ReactJS', 
         'TailwindCSS', 
         'Vite',  
         ],
      desc: 'web-based community health center queuing application using the Laravel-9 framework which focuses on developing mechanisms for queuing and taking patient medicines This project has 3 authorization roles doctor, patient, pharmacist',
      image: undefined,
      link: ''
   },
   {
      title: 'Notion Clone',
      techStack: [
         'Typescript', 
         'NextJS', 
         'TailwindCSS', 
         'MySQL',
         'Convex',
         'Clerk'  
         ],
      desc: 'web-based community health center queuing application using the Laravel-9 framework which focuses on developing mechanisms for queuing and taking patient medicines This project has 3 authorization roles doctor, patient, pharmacist',
      image: undefined,
      link: ''
   },
   {
      title: 'Cekit',
      techStack: [
         'Typescript', 
         'ReactJS', 
         'TailwindCSS', 
         'Vite',  
         ],
      desc: 'Website for check the postpaid electricity bills, consume PLN API to get the data. This site will be improve further and will add a new features to it.',
      image: undefined,
      link: ''
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
   projects
}