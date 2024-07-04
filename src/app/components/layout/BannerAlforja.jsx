import Image from 'next/image'
import React from 'react'

export default function BannerAlforja() {
   return (
      <section className=' bg-naranja flex flex-col py-4 px-6 md:flex-row  md:gap-8 md:items-center md:py-0  lg:max-h-36 lg:mx-12 '>
         <div className='md:w-3/5  lg: '>
            <Image className="  h-full" src="/bannerAlforja.png" width={159} height={159} alt={'Banner Radio Alforja'} />
         </div>
         <div className=' text-white font-semibold text-lg '>

            <p>Escuchá Historias comunes el tercer martes de cada mes por Radio Alforja jornalera en Facebook o Youtube, a las 19:00 en  Centroamérica y las 22:00 en Argentina.</p>
         </div>
      </section>
   )
}
