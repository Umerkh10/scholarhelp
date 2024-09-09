import React from 'react'
import { CtaButtons } from './HeroSection'
import Image from 'next/image'

function SmallDivider() {
  return (
    <div className='mt-5'>
        <div data-aos='zoom-in' className='bg-gradient-to-r from-purple-800 via-indigo-700 to-zinc-800 py-12 '>
            <div className='mx-auto max-w-screen-xl'>
                <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
                    <div  className=' '>
                        <h2 className='font-extrabold md:text-3xl text-2xl text-zinc-100'>Need Urgent Help </h2>
                        <h3 className='font-extrabold md:text-2xl text-xl text-zinc-100'>Contact us </h3>
                    </div>
                    <div>
                    <div className='flex flex-col md:flex-row  items-center mt-5'>
                    <div className='flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
                    transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl  m-2'>
                        <Image src={"/imgs/order.png"} width={35} height={35} alt='order' />
                        <button className='font-medium ml-2 text-zinc-800 md:text-base text-sm '>Get Help Now</button>
                    </div>
                    <div className='flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800
                transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2'>
                        <Image src={"/imgs/whatsapp.png"} width={25} height={25} alt='whatsapp' />
                        <button className='font-medium ml-2 text-background md:text-base text-sm'>Call Us 1-716-708-1869</button>
                    </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmallDivider