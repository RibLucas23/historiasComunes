"use client"
import React, { useEffect, useState } from 'react'
export default function MenuItemForm({ onSubmit, menuItem }) {
   const [titulo, setTitulo] = useState(menuItem?.titulo || '');
   const [descripcion, setDescripcion] = useState(menuItem?.descripcion || '');
   const [iframePrograma, setIframePrograma] = useState(menuItem?.iframePrograma || '');
   const [imagen, setImagen] = useState(menuItem?.imagen || []);
   const [fecha, setfecha] = useState(menuItem?.fecha || []);


   return (
      <form onSubmit={ev =>
         onSubmit(ev, {
            titulo, descripcion, iframePrograma, imagen, fecha
         })
      }
         className='mt-8 w-4/6 mx-auto flex '>
         <div
            className="md:grid items-start gap-4 w-full"
            style={{ gridTemplateColumns: '.3fr .7fr' }}>

            <div className='grow w-full'>
               <label >
                  Item titulo
               </label>
               <input type="text"
                  className='block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100;'
                  value={titulo}
                  onChange={ev => setTitulo(ev.target.value)} />
               <label >
                  descripcion
               </label>
               <input type="text"
                  className='block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100;'
                  value={descripcion}
                  onChange={ev => setDescripcion(ev.target.value)} />
               <label >
                  Item iframePrograma
               </label>
               <input type="text"
                  className='block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100;'
                  value={iframePrograma}
                  onChange={ev => setIframePrograma(ev.target.value)} />

               <label >
                  Item imagen
               </label>
               <input type="text"
                  className='block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100;'
                  value={imagen}
                  onChange={ev => setImagen(ev.target.value)} />

               <label >
                  Item fecha
               </label>
               <input type="text"
                  className='block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100;'
                  value={fecha}
                  onChange={ev => setfecha(ev.target.value)} />
               <button type='submit'
                  className=' bg-naranjon p-4 rounded-2xl' >Save</button>
            </div>

         </div>
      </form>
   )
}
