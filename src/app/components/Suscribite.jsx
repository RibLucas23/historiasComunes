import React, { useState } from 'react'

export default function Suscribite() {
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await fetch('/api/suscribirse', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
         });

         if (res.status === 200) {
            setMessage('¡Suscripción exitosa!');
         } else {
            setMessage('Hubo un error al suscribirse. Inténtalo de nuevo.');
         }
      } catch (error) {
         console.error('Error al enviar el correo:', error);
         setMessage('Hubo un error al suscribirse. Inténtalo de nuevo.');
      }
   };

   return (
      <section className='mt-28 lg:mt-52 w-full flex flex-col justify-center items-center mb-4 '>
         <h1 className='text-naranja font-bold text-xl p-8 lg:text-4xl'>Suscribite para saber cuando sale un nuevo programa</h1>
         <div className='flex justify-center my-8 w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col w-full justify-between items-center border-2 rounded-lg lg:w-1/2 p-4 lg:flex-row bg-white border-[#F2F2F2] gap-4'>
               <input
                  name='email'
                  type="email"
                  placeholder='Ingresá un correo electrónico'
                  className='p-4 w-full border border-[#F2F2F2] rounded-lg'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
               <button type='submit' className='bg-naranja p-4 text-white rounded-2xl'>
                  Suscribirme
               </button>
            </form>
         </div>
         {message && <p className='text-center my-4 '>{message}</p>}
      </section>
   )
}