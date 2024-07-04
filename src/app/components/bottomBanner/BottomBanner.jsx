import React from 'react'
import Image from 'next/image'
export default function BottomBanner({ banner }) {
   return (
      <div className=' min-w-full flex justify-center items-center h-52   '
         style={{
            backgroundImage: "url(/esquina.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"

         }}>

         <Image alt='banner promocion primaera 22 ' className='w-full px-4' src={banner} />
      </div >
   )
}
