"use client"
import React, { useContext } from 'react'
import { Context } from '@/app/Context/ContextProvider';

export default function CartPage() {
   const { cart, totalDeDinero, removeItem } = useContext(Context)
   return (
      <div className='flex flex-col justify-center items-center'>
         <div className=' border-b  w-11/12 flex justify-center border-primary text-center'>
            <h1 className=' text-primary font-bold  text-3xl'>Tu carro</h1>
         </div>
         <div>

            {cart?.map(item => (
               <div key={item[0]._id} className='flex m-4  shadow-md shadow-slate-300'>
                  <div className='w-1/12 bg-slate-200 flex justify-center'>
                     <button
                        onClick={() => removeItem(item[0]._id)}
                     >x</button>
                  </div>
                  <div className='w-4/12 flex py-4'>
                     <img alt="imagen producto" src={item[0].url} />
                  </div>
                  <div className=' w-6/12 py-4 flex flex-col justify-center gap-1'>
                     <p className=' text-primary font-bold '>
                        {item[0].titulo}
                     </p>
                     <p className=' text-secondary font-bold  text-lg'>
                        ${item[0].precio}
                     </p>
                     <div className=''>
                        <span>Cantidad</span>
                        <button className=' ml-2 bg-violet-700 px-2 rounded-full text-white' >-</button>
                        <span className='p-2'>{item.cantProduct}</span>
                        <button className=' bg-violet-700 px-2 rounded-full text-white'>+</button>

                     </div>

                  </div>
               </div>
            ))}
            <div className=' border-t  w-11/12 m-4 flex justify-end border-primary text-center'>
               <p className='font-bold text-purple-700 text-2xl mt-4'>Total: <span className='text-3xl text-secondary '>${totalDeDinero} </span> </p>
            </div>
            <button className=' w-11/12 bg-secondary text-white py-4 mx-4 rounded-2xl'>
               Continuar Compra
            </button>
         </div>
      </div>
   )
}
