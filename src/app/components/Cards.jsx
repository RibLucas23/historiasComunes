import Image from 'next/image'
import React from 'react'

export default function Cards({ data }) {
   return (
      <>
         <div className='flex flex-col py-4 px-2 sm:px-4  items-center mx-4  border rounded-lg sm:min-w-full lg:flex-row   bg-white'>

            <div className=' min-h-48 min-w-48  '>
               <Image className="rounded-lg w-full h-full" src="/HC.png" width={250} height={250} alt={'avatar'} />
            </div>

            <div className=' lg:w-3/4 flex flex-col  p-4 lg:justify-between  '>
               <div className=' lg:max-w-prose mb-2 '>
                  <p className='text-gray-500'>
                     {data.fecha}
                  </p>
                  <h1 className='text-black font-semibold text-2xl '>
                     {data.titulo}
                  </h1>
                  <p className='text-gray-500  line-clamp-3  hover:line-clamp-none  lg:line-clamp-3 '>
                     {data.descripcion}

                  </p>
               </div>

               <div className=' flex-col justify-end hidden lg:inline'>
                  <iframe src={data.iframePrograma} width="500" height="60" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>
               </div>
            </div>
            <iframe className='sm:hidden' src={data.iframePrograma} width="300" height="60" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>
            <iframe className='hidden sm:inline lg:hidden' src={data.iframePrograma} width="500" height="60" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>

         </div>
      </>
   )
}
