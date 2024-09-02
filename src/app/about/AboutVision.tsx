"use client"
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

function AboutVision() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
  return (
    <div className='mx-auto max-w-screen-xl' ref={ref} data-aos="zoom-in">
        <div className='grid lg:grid-cols-2 grid-cols-1 py-7 px-5 gap-3'>
            <div className=''ref={ref} data-aos="flip-up">
                <div className='text-3xl md:text-4xl font-extrabold mt-5 lg:mt-20 '>Our Vision for the Future</div>
                <div className='border-b-2 w-52 border-muted-foreground mt-2'></div>
                <div className='mt-2 text-muted-foreground'>At {process.env.NEXT_PUBLIC_WEBSITE_NAME}, our long-term vision is to lead the advancement of knowledge and innovation through a commitment to academic excellence, research breakthroughs, and global collaboration. We aspire to create an inclusive and dynamic learning environment where students and faculty can explore new ideas, drive transformative change, and contribute to solving the worlds most pressing challenges.</div>
            </div>
            <div className='' data-aos="flip-down">
                <div className='flex items-center'>
                    <Image src={'/about_us/vision_about_us.webp'} width={400} height={400} alt='vision'></Image>
                </div>
            </div>
        </div>
        <div className='border-b-2 border-muted-foreground'></div>
    </div>
  )
}

export default AboutVision