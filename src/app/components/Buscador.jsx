import React from 'react'
import Search from './Icons/Search'

export default function Buscador() {
   return (
      <div className='flex justify-center  lg:m-8 w-full'>
         <form action="" className='flex justify-between items-center border-2  rounded-lg lg:w-1/2 border-[#F2F2F2]'>

            <input type="text" placeholder='Buscar' className='p-4 w-full   rounded-lg' />


            <button className=' bg-[#F2F2F2] p-4 text-naranjon  '>
               <Search />
            </button>

         </form>
      </div>
   )
}
