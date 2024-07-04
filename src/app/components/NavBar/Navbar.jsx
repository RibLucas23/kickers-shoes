import React from 'react'

import logo from '../../Utils/imgs/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
// import CartSvg from '@/app/utils/svgs/CartSvg'
import CartSvg from '../../utils/svgs/CartSvg'

export default function Navbar() {
    return (
        <>
            <nav className=' min-w-full flex justify-center items-center h-52 pb-8   '>
                <div className='absolute  h-52  min-w-full  -z-30'

                    style={{
                        backgroundImage: "url(/navBackground.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100vw 280px"

                    }}
                />
                <Link href={"/cart"} className='absolute top-6 right-8 text-white  ' >
                    <CartSvg className="size-10" />
                </Link>
                <Link href={"/"}>
                    < Image alt='logo Kicks' className=' w-36' src={logo} />
                </Link>
            </nav >
        </>
    )
}
