"use client"
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

function AboutEmail() {
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
    <div className='mx-auto max-w-screen-xl'>
        <div className='py-10 px-5' ref={ref} data-aos="fade-up">
            <div className='flex justify-center '>
                <Image className='' src={'/about_us/email-sub-bg.webp'} width={600} height={600} alt='email'></Image>
            </div>
            <div className='text-2xl md:text-3xl text-center font-extrabold -mt-10 '>Subscribe to Our Email List.</div>
            <div className='text-lg md:text-xl text-center font-medium text-muted-foreground'>Stay updated with us!
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
            <div className="flex justify-center items-center border-[2px] border-muted-foreground mt-3 rounded-lg w-[300px] ">
            <input className="w-full py-3 px-4  outline-none rounded-lg  placeholder-gray-500" type="email" name="email" placeholder="Enter Your Email" required />
            </div>
            <button className='border-[2px] py-3 px-4 mt-3 ml-1 rounded-xl bg-orange-500  text-white hover:scale-105 hover:shadow-lg transition ease-in duration-200 delay-200'>Subscribe Now</button>
            </div>

        </div>
    </div>
  )
}

export default AboutEmail