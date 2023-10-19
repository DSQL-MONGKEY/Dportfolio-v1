import React from 'react'

type itemsType = {
   title: string,
   icon: React.ReactElement
}

type CardProps = {
   items: itemsType[],
}

const Card = ({ items }: CardProps) => {
   return (
      <div className='grid grid-cols-3 sm:grid-cols-4 sm:w-2/3 gap-8 p-5'>
         {items.map((item) => (
            <div key={item.title} className='flex flex-col items-center'>
               <span key={item.title} className='dark:text-white text-xl sm:text-[50px]'>
                  {item.icon}
               </span>
               <p className='dark:text-white font-poppins'>{item.title}</p>
            </div>
         ))}
      </div>
   )
}

export default Card