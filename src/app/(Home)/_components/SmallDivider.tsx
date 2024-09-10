import React from 'react'
import { CtaButtons, CtaChat } from './HeroSection'
import Image from 'next/image'

function SmallDivider() {
  return (
    <div className='mt-5'>
        <div data-aos='zoom-in' className='bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] py-12 '>
            <div className='mx-auto max-w-screen-xl'>
                <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
                    <div  className=' '>
                        <h2 className='font-extrabold text-center md:text-3xl text-2xl text-zinc-800 dark:text-zinc-200 pt-8'>Need Urgent Help </h2>
                    </div>
                    <div>
                    <div className='flex flex-col md:flex-row  items-center '>
                        <CtaChat/>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmallDivider