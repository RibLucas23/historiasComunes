import Image from 'next/image'
import React from 'react'

export default function About() {
   return (

      <section className='flex flex-col items-center pb-8 mt-28 lg:mt-64 lg:px-24 lg:flex-row bg-white rounded-lg shadow-lg '>
         <div className='flex flex-col gap-4 p-8 lg:mr-8 flex-wrap   lg:w-7/12'>
            <h1 className=' text-naranja font-bold text-xl  lg:text-4xl'>¿Por qué Historias comunes?</h1>
            <p className=''>Existen muchas voces, cargadas de experiencias de vida, de vivencias compartidas. Voces que son de lo profundo de los pueblos, y que transitan la vida sin ser oídas. Voces que representan el trabajo que cotidianamente desarrollamos los que no somos dueños de nada. Voces que en sus dignidades, nos hablan de esa lucha constante por ser reconocidos como iguales.
               De recoger esas voces se trata "Historias Comunes".
               Que va recorriendo de sur a norte Latinoamérica, nuestro Abya Yala, para escucharlas, para hacerlas presente.</p>

         </div>
         <div className=' w-full md:w-6/12 lg:w-6/12'>
            <Image className="rounded-lg w-full h-full" src="/HC_about.png" width={500} height={500} alt={'avatar'} />

         </div>
      </section>
   )
}
