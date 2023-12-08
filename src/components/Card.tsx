import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

type itemsType = {
   title: string,
   icon: React.ReactElement,
   level: string
}

type CardProps = {
   items: itemsType[],
}

const Card = ({ items }: CardProps) => {
   return (
      <div className='grid grid-cols-3 sm:grid-cols-4 sm:w-2/3 gap-8 p-5'>
         {items.map((item) => (
            <TooltipProvider key={item.title}>
               <Tooltip>
                  <TooltipTrigger>
                     <div key={item.title} className='flex flex-col items-center'>
                        <span key={item.title} className='dark:text-white text-xl sm:text-[30px] hover:-translate-y-1 transition ease-in-out'>
                           {item.icon}
                        </span>
                        <p className='dark:text-white text-sm sm:text[30px] font-poppins'>
                           {item.title}
                        </p>
                     </div>
                  </TooltipTrigger>
                  <TooltipContent>
                     <p>
                        {item.level}
                     </p>
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>
         ))}
      </div>
   )
}

export default Card