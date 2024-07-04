import React from 'react'

export default function HomeTags() {
   const tags = ["Infantil", "Deportivo", "Formal", "Urbano", "Femenino", "Masculino", "Verano", "Invierno"]
   return (
      <div className='flex gap-4 flex-wrap justify-center'>
         {tags.map(t => (
            <p
               className='bg-gris text-white rounded-md  w-24  px-4 py-2 flex justify-center'
               key={t}>{t} </p>
         ))}
      </div>
   )
}
