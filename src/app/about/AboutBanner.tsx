"use client"
import { useTheme } from 'next-themes'
import React from 'react'

function AboutBanner() {
    const {theme}=useTheme()

  return (
    <div className={`${theme === 'light' ? 'm-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100' : ' -z-10 m-h-[500px] w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '}`}>
        <div className='mx-auto max-w-screen-xl '>
        <div className='py-20 px-5 md:py-44'>
        <div className='text-center  text-5xl font-extrabold'>About Us</div>
        <div className='max-w-screen-md mx-auto md:text-center  pt-4 font-medium dark:text-zinc-100 text-zinc-900 sm:text-lg '>At {process.env.NEXT_PUBLIC_WEBSITE_NAME}, we make learning easier by providing expert online class assistance tailored to your needs. Our intuitive platform and dedicated support team ensure a seamless experience, from understanding complex concepts to meeting deadlines. </div>
        </div>
        </div>
    </div>
  )
}

export default AboutBanner