"use client"
import React, { useState } from 'react'

import MenuItemForm from './MenuItemForm';
import { useRouter } from 'next/navigation';

export default function NewMenuItemPage() {
   const [menuItem, setMenuItem] = useState(null);
   const router = useRouter();

   async function handleFormSubmit(ev, data) {
      ev.preventDefault()
      const savingPromise = new Promise(async (resolve, reject) => {
         const response = await fetch('/api/programas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
         })
         if (response.ok) {
            resolve()

         } else {
            reject()
         }

      })
      savingPromise
         .then(() => {
            console.log(router)
            router.refresh(); // Recargar la página
         })
         .catch((error) => {
            console.error('Error al guardar los datos:', error);
            // Aquí puedes manejar el error, mostrar un mensaje, etc.
         });

   }

   return (
      <section className='mt-8'>
         <div className=' max-w-2xl mx-auto mt-8'>
         </div>
         <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit} />
      </section>
   )
}
