"use client"
import Aos from 'aos';
import { Star } from 'lucide-react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react'

const Rating = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        Aos.init({
            duration: 800,
            offset: 100,
        });
    }, [inView]);


  return (
    <div className='pt-10'>
        <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl'>
            <div className=' p-7'>
                <div  className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4'>
                <div ref={ref} data-aos="flip-up" className='flex items-center border-[4px]  w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/confidential-email.png" width={50} height={100} alt='confidential'></Image>
                    <div className=' font-semibold pl-2'>100% Confidentiality</div>
                </div>
                <div ref={ref} data-aos="flip-down" className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/spam.png" width={50} height={100} alt='confidential'></Image>
                    <div className=' font-semibold pl-2 '>No Spam</div>
                </div>
                </div>

                <div   className='flex flex-col md:flex-row items-center mt-4 space-y-3 md:space-y-0 md:space-x-4'>
                <div ref={ref} data-aos="flip-up" className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/documents.png" width={50} height={100} alt='confidential'></Image>
                    <div className=' font-semibold pl-2'>Plagiarism Free Work</div>
                </div>
                <div ref={ref} data-aos="flip-down" className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/money-back-guarantee.png" width={50} height={100} alt='confidential'></Image>
                    <div className=' font-semibold pl-2 '>Money Back Guarantee</div>
                </div>
                </div>
                
            </div>

                 <div className=' p-7'>
                <div className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4'>
                <div ref={ref} data-aos="flip-up" className='flex items-center border-[4px]  w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/google.png" width={50} height={100} alt='confidential'></Image>
                    <div className='flex flex-col ml-2'>
                    <div className=' font-semibold  '>Google Reviews</div>
                    <div className='flex items-center'>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                    </div>
                    </div>
                </div>
                <div ref={ref} data-aos="flip-down" className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/trust-pilot.png" width={50} height={100} alt='confidential'></Image>
                    <div className='flex flex-col ml-2'>
                    <div className=' font-semibold  '>Trust Pilot</div>
                    <div className='flex items-center'>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                    </div>
                    </div>
                </div>
                </div>

                <div className='flex flex-col md:flex-row items-center mt-4 space-y-3 md:space-y-0 md:space-x-4'>
                <div ref={ref} data-aos="flip-up" className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/site-jabber.png" width={50} height={100} alt='confidential'></Image>
                    <div className='flex flex-col ml-2'>
                    <div className=' font-semibold  '>Site Jabber</div>
                    <div className='flex items-center'>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                    </div>
                    </div>
                </div>
                <div ref={ref} data-aos="flip-down" className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/reviews.io.png" width={50} height={100} alt='confidential'></Image>
                  <div className='flex flex-col ml-2'>
                    <div className=' font-semibold  '>Reviews.io</div>
                    <div className='flex items-center'>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                        <Star className='stroke-black fill-yellow-500'/>
                    </div>
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Rating