import Image from 'next/image'
import React from 'react'

export default function Footer() {
   return (
      <footer>
         <div className='flex flex-col justify-evenly px-8  lg:px-72 my-14 md:flex-row md:items-start'>

            <div className='lg:w-[200px] '>
               <ul className=' flex flex-col items-center md:items-start'>
                  <li >
                     <Image className="rounded-lg w-[200px] h-full mb-1 md:mb-4" src="/Logo.png" width={250} height={250} alt={'avatar'} />
                  </li>
                  <li className='  text-gray-600 '>
                     Desde 2019. Más de 200 testimonios son parte de “Historias comunes”.

                  </li>
               </ul>
            </div>

            <div  >
               <h4 className=' text-secundary font-semibold text-lg mt-12 md:mt-4 '>Páginas vinculadas</h4>
               <ul className='text-naranja mt-8 flex flex-col gap-2'>
                  <li>
                     <a href="https://radiosemilla.com.ar/">
                        Radio semilla

                     </a>
                  </li>
                  <li>
                     <a href="https://archive.org/details/@claralpereyra?and%5B%5D=subject%3A%22historias+comunes">

                        HC Archive
                     </a>
                  </li>
                  <li>
                     <a href="https://www.youtube.com/@RadioAlforjaJornalera">
                        Red Alforja
                     </a>

                  </li>
               </ul>
            </div>

            <div className=' '>
               <h4 className=' text-secundary  font-semibold text-lg mt-12 md:my-4   '>Contacto</h4>
               <div className='flex gap-3 md:pt-4'>
                  <div>
                     <a href="https://www.facebook.com/programahistoriascomunes">
                        <Image
                           src="/fbIcon.png"
                           width={32}
                           height={32}
                           alt="Picture of the author"
                        />
                     </a>
                  </div>
                  <div>
                     <a href="https://www.ivoox.com/escuchar-audios-historias-comunes_al_23533446_1.html">
                        <Image
                           src="/iboxIcon.png"
                           width={32}
                           height={32}
                           alt="Picture of the author"
                        />
                     </a>
                  </div>
                  <div>
                     <a href="https://youtube.com/playlist?list=PLhHLUyXNNdxshBMoGdeuMKCNvnozlf8Sx&si=J7nWCYkZ0YMH06Ei">
                        <Image
                           src="/ytIcon.png"
                           width={32}
                           height={32}
                           alt="Picture of the author"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div className='bg-naranjon h-8 flex justify-end items-center text-white pr-32'>
            <p>©  Created by 2024.</p>
         </div>
      </footer>
   )
}
