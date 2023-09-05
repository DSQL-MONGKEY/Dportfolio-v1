import { navLinks } from "@constants/constants"
import { Dispatch, SetStateAction } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"

type Props = {
   darkTheme: boolean,
   setDarkTheme: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ darkTheme, setDarkTheme }: Props) => {
   return (
      <nav className="flex w-full top-0 sticky justify-around items-center p-2">
         <p>Dimp.fe</p>
         
         <div className="">
            <ul className="flex justify-center gap-4">
            {navLinks.map(nav => (
               <li id={nav.id} key={nav.id}>{nav.title}</li>)
               )}
            </ul>
         </div>

         <div className="darkMode-toggle">
            <button onClick={() => setDarkTheme(!darkTheme) }>
               {darkTheme ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}
            </button>
         </div>
      </nav>
   )
}

export default Navbar