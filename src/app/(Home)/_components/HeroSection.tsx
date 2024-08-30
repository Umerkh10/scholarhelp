import React from 'react'
import 'aos/dist/aos.css';
import Image from 'next/image';


const HeroSection = () => {

  return (
   
    <div className=' border-b-2  border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-indigo-200 via-purple-100 to-zinc-100 '>
      <div className=' mx-auto max-w-screen-xl ' >
        <div className='py-20 px-5 md:py-28'>
          <div className='md:text-center text-violet-950 text-xl sm:text-3xl font-extrabold '>Hire Expert</div>
          <div className='md:text-center text-violet-950 text-3xl sm:text-5xl font-extrabold'>Academic Writers</div>
          <div className='md:text-center text-violet-950 text-xl sm:text-3xl font-extrabold pt-2 '>To Elevate Your Grades!</div>
          <div className='max-w-screen-md mx-auto md:text-center  pt-4 font-medium text-violet-950 sm:text-lg '>
          Your trusted source for high-quality academic writing services. We provide expert support for essays, research papers, online classes, and exam preparation to help you achieve top grades. Reach your academic goals with us!
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
          <div className='flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
            transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl  m-2'>
              <Image src={"/imgs/order.png"} width={35} height={35} alt='whatsapp' />
              <button className='font-medium ml-2 text-zinc-800'>Order Now</button>
            </div>
            <div className='flex justify-center items-center border-[2px] bg-zinc-800
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

