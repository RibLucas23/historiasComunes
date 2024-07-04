'use client';
import Cards from './Cards';
import { useEffect, useState } from 'react';
import Search from './Icons/Search';


export default function CardsContainer() {
   const [programas, setProgramas] = useState([]);
   const [busqueda, setBusqueda] = useState('');
   const [busquedaResult, setBusquedaResult] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const programasPerPage = 5;

   useEffect(() => {
      fetch('/api/programas').then((res) => {
         res.json().then((programas) => {
            setProgramas(programas);
         });
      });
   }, []);

   const handleChange = (e) => {
      const value = e.target.value;
      setBusqueda(value);
      filtrar(value);
   };
   //=========================================================== FILTRAR
   const filtrar = (terminoBusqueda) => {
      const resultadosBusqueda = programas.filter((elemento) => {
         return (
            elemento.titulo
               .toLowerCase()
               .includes(terminoBusqueda.toLowerCase()) ||
            elemento.descripcion
               .toLowerCase()
               .includes(terminoBusqueda.toLowerCase()) ||
            elemento.fecha.toLowerCase().includes(terminoBusqueda.toLowerCase())
         );
      });
      setBusquedaResult(resultadosBusqueda);
      setCurrentPage(1); // Reset to first page on new search
   };

   //===========================================================  PAGINATE
   const indexOfLastPrograma = currentPage * programasPerPage;
   const indexOfFirstPrograma = indexOfLastPrograma - programasPerPage;
   const currentProgramas = busqueda
      ? busquedaResult.slice(indexOfFirstPrograma, indexOfLastPrograma)
      : programas.slice(indexOfFirstPrograma, indexOfLastPrograma);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const pageNumbers = [];
   for (
      let i = 1;
      i <=
      Math.ceil(
         (busqueda ? busquedaResult : programas).length / programasPerPage,
      );
      i++
   ) {
      pageNumbers.push(i);
   }

   const handlePrevious = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   const handleNext = () => {
      if (currentPage < pageNumbers.length) {
         setCurrentPage(currentPage + 1);
      }
   };
   return (
      <section className='flex flex-col items-center gap-8 lg:gap-4 '>
         <div className='flex justify-center m-8 w-full'>
            <form
               action=''
               className='flex justify-between items-center border-2 rounded-lg mx-8 w-full lg:w-1/2 border-[#F2F2F2]'
            >
               <input
                  onChange={handleChange}
                  type='text'
                  placeholder='Buscar'
                  className='p-4 w-full rounded-lg'
               />

               <div className='bg-[#F2F2F2] p-4 text-naranjon'>
                  <Search />
               </div>
            </form>
         </div>


         {currentProgramas.map((programa) => (
            <Cards key={programa._id} data={programa} />
         ))}

         <div className='flex justify-center  '>
            <nav>
               <ul className='flex items-center bg-white p-4 '>
                  <li className='mx-1'>
                     <button
                        onClick={handlePrevious}
                        className='p-2 '
                        disabled={currentPage === 1}
                     >
                        ← Anterior
                     </button>
                  </li>
                  {pageNumbers.map((number) => (
                     <li key={number} className='mx-1'>
                        <button
                           onClick={() => paginate(number)}
                           className={`h-12 rounded-md flex justify-center items-center  text-2xl w-12 ${currentPage === number
                              ? 'bg-orange-400 text-white'
                              : 'bg-white'
                              }`}
                        >
                           {number}
                        </button>
                     </li>
                  ))}
                  <li className='mx-1'>
                     <button
                        onClick={handleNext}
                        className='p-2 '
                        disabled={currentPage === pageNumbers.length}
                     >
                        Siguiente →
                     </button>
                  </li>
               </ul>
            </nav>
         </div>
      </section>
   )
}
