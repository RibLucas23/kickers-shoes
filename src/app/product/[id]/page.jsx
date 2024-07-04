"use client"
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '@/app/Context/ContextProvider';
import BannerPromocion from '@/app/utils/imgs/BannerRosa.png'
import BottomBanner from '@/app/components/bottomBanner/BottomBanner';
import CartSvg from '@/app/utils/svgs/CartSvg';
import { Toaster, toast } from 'react-hot-toast';
import { successAlert } from '@/app/services/toastifyAlerts';

export default function ProductPage() {
   const { addToCart } = useContext(Context);

   const { id } = useParams();
   const [selected, setSelected] = useState(true)
   const [talle, setTalle] = useState("")

   //seteo un minimo de 1 producto al momento de querer agregarlo al carrito
   const [cantProduc, setCantProduc] = useState(1);
   const onAdd = (cantProduc) => {
      setCantProduc(cantProduc)
   }

   //CONTADOR PARA AGREGAR O QUITAR PRODUCTO
   const suma = () => {
      if (cantProduc < 100) {
         setCantProduc(cantProduc + 1)
      }
   }
   const resta = () => {
      if (cantProduc > 1) {
         setCantProduc(cantProduc - 1)
      }
   }
   //array de talles
   let numeros = []
   for (let i = 35; i < 46; i++) {
      numeros.push(i)
   }
   const handleSubmit = async (
   ) => {
      try {
         addToCart({ ...product, cantProduc })
         onAdd(cantProduc)
         successAlert(`agregado con exito!`)
      } catch (error) {
         if (error instanceof Error) {
            errorAlert(error.message);
         } else throw error;
      }
   };

   //seleccionar talle

   const selectTalle = (num) => {
      setTalle(num)
   }
   const [product, setProduct] = useState({})
   useEffect(() => {
      fetch('/api/products')
         .then(res => res.json())
         .then(menuItems => {
            let productFetch = menuItems.filter(item => item._id == id);
            setProduct(productFetch);
         })
         .catch(err => console.error('Error fetching products:', err));
   }, [id]);
   return (
      <>
         <section className='mx-4 '>
            <div className=' border-2 shadow-lg  '>
               <img alt='foto del producto ' src={product[0]?.url} />
            </div>
            <div className='py-6 mt-4'>
               <h2 className=' text-primary font-bold text-3xl'>{product[0]?.nombre}</h2>
               <p className=' text-lg mt-4 px-4'>
                  {product[0]?.descripcion}
               </p>
            </div>
            {/* talle */}
            <div>
               <p className=' font-semibold text-xl'>Talle</p>
               <div className='flex flex-wrap'>

                  {numeros.map(n => (
                     <div
                        key={n}
                        onClick={() => selectTalle(n)}
                        className={`mx-5 my-3 border border-black rounded-md p-4 cursor-pointer font-semibold ${n === talle ? 'bg-black text-white' : 'bg-white text-black'}`}
                     >
                        <span>{n}</span>
                     </div>
                  ))}
               </div>
            </div>
            <button className=' w-full bg-secondary text-white  rounded-2xl py-3 font-semibold  tracking-widest text-xl  mt-4 flex justify-center gap-2  items-center'
               onClick={() => {
                  handleSubmit()

               }}
            > <CartSvg className="size-8" />  Agregar al carrito</button>
            <Toaster />
         </section>
         <BottomBanner banner={BannerPromocion} />
      </>
   )
}
