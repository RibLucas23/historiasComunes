import React from 'react'
import Image from "next/image";

export default function NavBar() {
   return (
      <>
         <nav className='w-full flex items-center justify-center drop-shadow-sm  '>
            <div className=' w-56 m-4 '  >
               <Image className="rounded-lg w-full h-full mb-1" src="/Logo.png" width={250} height={250} alt={'avatar'} />
            </div>
         </nav>
         <div className='border-b-4 drop-shadow-md' />
      </>
   )
}
