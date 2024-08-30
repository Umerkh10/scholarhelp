"use client"
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const ImageReviews = () => {
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
    <div className='mx-auto max-w-screen-xl mt-10 ' ref={ref} data-aos="zoom-in" >
        <div className='text-xl text-center md:text-4xl text-violet-950 font-extrabold'>Demonstrating Excellence: </div>
        <div className='text-2xl text-center md:text-5xl text-violet-950 font-extrabold'> Students Earned A-Grades! </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-5'ref={ref} data-aos="fade-up">
            <div className='mt-4'>
                <Image src="/imgs/ss-results.jpg" width={800} height={400} alt='ss-result' ></Image>
            </div>
            <div className='mt-4'>
                <Image src="/imgs/ss-result-2.jpg" width={800} height={400} alt='ss-result' ></Image>
            </div>
            <div className='mt-4'>
                <Image src="/imgs/ss-results-3.jpg" width={800} height={400} alt='ss-result' ></Image>
            </div>
            <div className='mt-4'>
                <Image src="/imgs/ss-results-4.webp" width={800} height={400} alt='ss-result' ></Image>
            </div>
           
        </div>
       
    </div>
  )
}

export default ImageReviews