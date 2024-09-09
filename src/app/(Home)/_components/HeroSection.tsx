import React from 'react'
import Image from 'next/image';
import BannerForm from './BannerForm';



export const HeroSection = () => {

  return (

    <div className='m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <div className='grid lg:grid-cols-2 grid-cols-1  mx-auto max-w-screen-xl py-10 ' >
        <div className='py-20 px-5 md:pt-40'>
          <h1 className='text-center lg:text-left dark:text-zinc-100 text-zinc-900 text-xl sm:text-4xl font-extrabold '>Take My Online Class for me in USA and Ace My Exam</h1>
          <h2 className='text-center py-1 lg:text-left dark:text-zinc-100 text-zinc-900 text-xl sm:text-2xl font-bold'>Taking My Affordable Classes Online Guarantee You the Academic Distinction</h2>
          <div className='flex flex-col lg:flex-row items-center gap-4 mt-2'>
            <div className='flex items-center gap-1'>
            <Image src={'/imgs/instructor.png'} width={64} height={64} alt='instructor'></Image>
          <h3 className='text-center dark:text-zinc-100 text-zinc-900 md:text-base font-medium'>950+ PhD Instructor</h3>
          <div className='hidden lg:block w-[2px] h-20 bg-muted-foreground '></div>
          </div>
            <div className='flex items-center gap-1'>
            <Image src={'/imgs/record.png'} width={64} height={64} alt='record'></Image>
          <h3 className='text-center dark:text-zinc-100 text-zinc-900 md:text-base font-medium'>Proven Track Record</h3>
          <div className='hidden lg:block w-[2px] h-20 bg-muted-foreground '></div>
          </div>
            <div className='flex items-center gap-1'>
            <Image src={'/imgs/affordable.png'} width={64} height={64} alt='phd'></Image>
          <h3 className='ml-1 dark:text-zinc-100 text-zinc-900 md:text-base font-medium'>Affordable Packages</h3>
          <div className='hidden lg:block w-[2px] h-16 bg-muted-foreground/0 '></div>
          </div>
          </div>
          <CtaButtons />
        </div>

        <div className='pb-5 px-5 md:pt-24'>
          <BannerForm />
        </div>

      </div>
    </div>
  )
}






export function CtaButtons() {
  return (
    <div className='flex flex-col md:flex-row  items-center mt-5'>
      <div className='flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
    transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl  m-2'>
        <Image src={"/imgs/order.png"} width={35} height={35} alt='order' />
        <button className='font-medium ml-2 text-zinc-800 md:text-base text-sm '>Order Now</button>
      </div>
      <div className='flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800
transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2'>
        <Image src={"/imgs/whatsapp.png"} width={25} height={25} alt='whatsapp' />
        <button className='font-medium ml-2 text-background md:text-base text-sm'>Chat On Whatsapp</button>
      </div>

    </div>
  )
}

