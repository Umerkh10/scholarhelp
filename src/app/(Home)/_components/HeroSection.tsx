import React from 'react'
import 'aos/dist/aos.css';


const HeroSection = () => {

  return (
   
    <div className=' border-b-2  border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-indigo-200 via-orange-100 to-zinc-100 '>
      <div className=' mx-auto max-w-screen-xl ' >
        <div className='py-20 px-5 md:py-28'>
          <div className='md:text-center text-violet-950 text-xl sm:text-3xl font-extrabold '>Hire Expert</div>
          <div className='md:text-center text-violet-950 text-3xl sm:text-5xl font-extrabold'>Academic Writers</div>
          <div className='md:text-center text-violet-950 text-xl sm:text-3xl font-extrabold pt-2 '>To  Elevate Your Grades!</div>
          <div className='max-w-screen-md mx-auto md:text-center  pt-4 font-medium text-violet-950 sm:text-xl '>
          Your trusted source for high-quality academic writing services. We provide expert support for essays, research papers, online classes, and exam preparation to help you achieve top grades. Reach your academic goals with us!
          </div>
          {/* <div className='md:text-center pt-5 font-extrabold text-zinc-700 text-lg'>Get a Text Back in 5 Minutes!</div> */}
          {/* <form className='flex md:justify-center items-center' action="">
          <div className='bg-white  rounded-lg w-[500px] lg:h-24 py-4 px-2 '>
          <div className='flex items-center justify-center  rounded-lg py-1 border-[2px] border-gray-400 w-full md:w-[420px] outline-none md:ml-8'>
          <input className='outline-none py-3 px-3 ' type="tel" name='phone' placeholder='enter number' />
          <button type='submit' className='hidden md:block bg-orange-600 text-white px-3 py-2 rounded-lg md:px-6 md:py-3'>Get A Free Quote</button>
        </div>
        <button className='md:hidden mt-2 bg-orange-600 text-white px-10 py-2 rounded-md '>
            Get A Free Quote
          </button>
          </div>
        
          </form> */}

        </div>
    
      </div>
    </div>
  )
}

export default HeroSection

