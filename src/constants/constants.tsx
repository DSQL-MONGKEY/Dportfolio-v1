import { GoHome, GoQuestion, GoProject, GoWorkflow, GoCodeReview } from "react-icons/go"
import { GrContact } from "react-icons/gr"

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
      id: 'projects',
      title: 'Projects',
      icon: <GoProject/>
   },
   {
      id: 'work',
      title: 'Work',
      icon: <GoWorkflow/>
   },
   {
      id: 'skills',
      title: 'Skills',
      icon: <GoCodeReview/>
   },
   {
      id: 'contact',
      title: 'Contact',
      icon: <GrContact/>
   },
]

export { navLinks }