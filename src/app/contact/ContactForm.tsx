"use client"
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';


function ContactForm() {
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
    <div className='mx-auto max-w-screen-xl py-10 ' ref={ref}>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className='' data-aos='fade-up'>
                <div className='pt-5 text-4xl font-extrabold text-center'>Lets talk about everything!</div>
                <div className='pt-3 text-lg text-muted-foreground text-center'>Got questions? We are here to help! Contact us today.</div>
                <div className='flex justify-center mt-3'>
                    <Image src={'/imgs/Contact_us_form.webp'} width={600} height={400} alt='form'></Image>
                </div>
            </div>
            <div className='' data-aos='fade-down'>
                <div className='mt-10'>
                <div className='w-[400px] rounded-xl '>
                <input className='py-3 w-full px-3 rounded-xl bg-transparent outline-none border-[2px] border-muted-foreground' type="text" name='name' required placeholder='Enter your Name' />   
                </div>            
                <div className='w-[400px] rounded-xl mt-3 '>
                <input className='py-3 w-full px-3 rounded-xl bg-transparent outline-none border-[2px] border-muted-foreground' type="email" name='email' required placeholder='Enter your Email' />   
                </div>            
                <div className='w-[400px] rounded-xl mt-3 '>
                <input className='py-3 w-full px-3 rounded-xl bg-transparent outline-none border-[2px] border-muted-foreground' type="text" name='subject' required placeholder='Enter your Subject' />   
                </div>            
                <div className='w-[400px] h-40 rounded-xl mt-3 '>
                <input className=' w-full h-full px-3 rounded-xl  bg-transparent outline-none border-[2px] border-muted-foreground' type="text" name='message' required placeholder='Write Your Message' />   
                </div> 
                <button className='py-3 px-8 rounded-lg mt-3 border-[2px] bg-gradient-to-r from-indigo-900 to-violet-800 text-white hover:scale-105 hover:shadow-lg transition ease-in duration-200 delay-200'>Submit</button>           
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactForm