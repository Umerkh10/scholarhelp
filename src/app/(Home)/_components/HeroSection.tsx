import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
   
    <div className='  -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] '>
      <div className=' mx-auto max-w-screen-xl '>
        <div className='p-10'>
          <div className='text-center text-violet-950 text-xl sm:text-3xl font-extrabold '>Hire</div>
          <div className='text-center text-violet-950 text-3xl sm:text-5xl font-extrabold'>Academic Writers</div>
          <div className='text-center text-violet-950 text-xl sm:text-3xl font-extrabold pt-2 '>To Boost your grades!</div>
          <div className=' text-center  pt-4 font-medium text-violet-950 sm:text-xl '>
          Your go-to source for top-notch academic writing services. Get excellence in every assignment. From essays and research papers to online classes and exam assistance, we offer a range of comprehensive services to meet your academic needs. Get A+ grades!
          </div>
          <div className='text-center pt-5 font-extrabold text-black text-lg'>Get a Text Back in 5 Minutes!</div>
          <form className='flex justify-center items-center' action="">
          <div className='bg-white  rounded-lg w-[500px] lg:h-24 py-4 px-2 mt-3'>
          <div className='flex items-center justify-center  rounded-lg py-1 border-[2px] border-gray-600 w-full md:w-[420px] outline-none md:ml-8'>
          <input className='outline-none py-3 px-3 ' type="tel" name='phone' placeholder='enter number' />
          <button type='submit' className='hidden md:block bg-orange-600 text-white px-3 py-2 rounded-lg md:px-6 md:py-3'>Get A Free Quote</button>
        </div>
        <button className='md:hidden mt-2 bg-orange-600 text-white px-10 py-2 rounded-md '>
            Get A Free Quote
          </button>
          </div>
        
          </form>

        </div>
    
      </div>
    </div>
  )
}

export default HeroSection

