import Image from 'next/image'
import React from 'react'

function StudyGuide() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 px-5 '>
        <div className='grid lg:grid-cols-3 grid-cols-1  rounded-xl bg-gray-200 dark:bg-zinc-800'>
            <div className=' px-5 col-span-2 pt-10 '>
                <h2 className='py-4 font-bold md:text-3xl text-xl '>Check Out Gre Sample Paper</h2>
                <h3 className='font-semibold md:text-2xl text-lg'>Get detailed paper to help you out in preparation for the GRE exam</h3>
                <div className='pt-5  '>
                    <button className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>Download the Study Guide</button>
                </div>
            </div>
            <div className=' px-3 py-4 col-span-1 '>
                <div>
                    <Image className='rounded-lg' src={'/imgs/gre-exam.jpg'} width={200} height={200} alt='gre'></Image>
                </div>
            </div>
        </div>
        <h2 className='text-center pt-6 font-extrabold md:text-3xl text-xl '>Take Expert Guidelines</h2>
        <p className='text-center pt-2 font-medium '>Every student has faced this issue in preparation for finding the live guide to help them clear their concept. However, it is a very crucial and very important phase where students find difficulty in answering practice exam questions. Moreover, taking guidance from experts is a must in order to be fully prepared for the GRE exam. </p>
    </div>
  )
}

export default StudyGuide