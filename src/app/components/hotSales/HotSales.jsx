"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import bannerHome from '../../Utils/imgs/Home-Banner.png'
import Link from 'next/link'


export default function HotSales() {

   const [menuItems, setMenuItems] = useState([])
   const [busqueda, setBusqueda] = useState('');
   const [busquedaResult, setBusquedaResult] = useState([]);


   useEffect(() => {
      fetch('/api/products').then(res => {
         res.json().then(menuItems => {
            setMenuItems(menuItems)
         })
      })
   }, [])

   const currentProducts = busquedaResult.length > 0 ? busquedaResult : menuItems.filter(item => item.promocion);

   const tags = ["Niños", "Deportivo", "Formal", "Urbano", "Mujer", "Hombre", "Verano", "Invierno"]

   const filtrar = (terminoBusqueda) => {
      const resultadosBusqueda = menuItems.filter((elemento) => {
         return (
            elemento.category
               .toLowerCase()
               .includes(terminoBusqueda.toLowerCase())
         );
      });
      console.log(resultadosBusqueda)
      setBusquedaResult(resultadosBusqueda);
   };
   const handleClick = (filter) => {
      // const value = filter.target.value;
      filtrar(filter)
      console.log(filter)
   }

   return (
      <>
         <div className='flex gap-4 flex-wrap justify-center'>
            {tags.map(t => (
               <button key={t}
                  onClick={() => handleClick(t)}
               >
                  <p
                     className='bg-gris text-white rounded-md  w-24  px-4 py-2 flex justify-center'
                     key={t}>{t} </p>
               </button>
            ))}
         </div>
         <Image className=' w-full px-3 my-12' alt='asd' src={bannerHome} />
         <section className=' mx-4 '>
            <h2>Más vendidos</h2>
            <p className="m-0 w-full min-h-[1px] bg-gradient-custom border-image-gradient-custom"></p>
            <div className='overflow-scroll'>
               <div className='flex   min-w-max  justify-center gap-4 p-4 overflow-x-scroll w-full '>
                  {currentProducts?.length > 0 && currentProducts
                     .map(item => (
                        <Link to={"/product/" + item._id} href={"/product/" + item._id} key={item._id} className='flex flex-col  shadow-xl rounded-2xl p-2  items-center w-60 h-60  custom-shadow '>
                           <img src={item.url} className=' w-4/5 h-4/5' />
                           <p className=' font-semibold'>
                              ${item.precio}
                           </p>
                        </Link>
                     ))}
               </div>
            </div>
         </section>
      </>
   )
}
