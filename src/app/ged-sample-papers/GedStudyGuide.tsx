import Image from 'next/image'
import React from 'react'

function GedStudyGuide() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 px-5 '>
    <div className='grid lg:grid-cols-3 grid-cols-1  rounded-xl bg-gray-200 dark:bg-zinc-800'>
        <div className=' px-5 col-span-2 pt-10 '>
            <h2 className='py-4 font-bold md:text-3xl text-xl '>Explore the Effective Guide Tips For GED exam</h2>
            <h3 className='font-semibold md:text-2xl text-lg'>Take Valuable Help from the GED sample paper and achieve the desirable result</h3>
            <div className='pt-5  '>
                <button className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>Download the Study Guide</button>
            </div>
        </div>
        <div className=' px-3 py-4 col-span-1 '>
            <div>
                <Image className='rounded-lg' src={'/imgs/ged-exam.jpg'} width={200} height={200} alt='ged'></Image>
            </div>
        </div>
    </div>
    <h2 className='text-center pt-6 font-extrabold md:text-3xl text-xl '>Effective Ways Of Study </h2>
    <p className='text-center pt-2 font-medium '>The success in GED determines the effort that you’ve put into work. It is also mandatory to analyze the structure and techniques that you’re performing to get better results. This might affect the preparation process. One of the effective ways to prepare for the GED exams is to analyze the sample paper, which can provide confidence on how to do the exam, and practice GED exercises to boost your preparation for the exam.</p>
</div>
  )
}

export default GedStudyGuide