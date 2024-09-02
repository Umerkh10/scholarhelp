"use client"
import React from 'react'
import Image from 'next/image';
import { useTheme } from 'next-themes';


const HeroSection = () => {

  return (
   
<div className='m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <div className=' mx-auto max-w-screen-xl ' >
        <div className='py-20 px-5 md:py-44'>
          <div className='text-center dark:text-zinc-100 text-zinc-900 text-xl sm:text-3xl font-extrabold '>Hire Expert</div>
          <div className='text-center dark:text-zinc-100 text-zinc-900 text-3xl sm:text-5xl font-extrabold'>Academic Writers</div>
          <div className='text-center dark:text-zinc-100 text-zinc-900 text-xl sm:text-3xl font-extrabold pt-2 '>To Elevate Your Grades!</div>
          <div className='max-w-screen-md mx-auto text-center  pt-4 font-medium dark:text-zinc-100 text-zinc-900 sm:text-lg '>
          Your trusted source for high-quality academic writing services. We provide expert support for essays, research papers, online classes, and exam preparation to help you achieve top grades. Reach your academic goals with us!
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
          <div className='flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
            transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl  m-2'>
              <Image src={"/imgs/order.png"} width={35} height={35} alt='whatsapp' />
              <button className='font-medium ml-2 text-zinc-800'>Order Now</button>
            </div>
            <div className='flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800
            transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2'>
              <Image src={"/imgs/whatsapp.png"} width={25} height={25} alt='whatsapp' />
              <button className='font-medium ml-2 text-background'>Chat On Whatsapp</button>
            </div>
          </div>



        </div>
    
      </div>
    </div>
  )
}

export default HeroSection

