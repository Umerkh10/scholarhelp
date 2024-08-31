"use client"
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

function AboutProcess() {
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
    <div className='mx-auto max-w-screen-xl' ref={ref} data-aos='zoom-in'>
        
        <div className='grid lg:grid-cols-2 grid-cols-1 py-10 px-5 gap-3'>
            <div className=''ref={ref} data-aos="flip-up">
                <div className='flex justify-center items-center'>
                    <Image src={'/about_us/about_us.webp'} width={600} height={600} alt='aboutprocess'></Image>
                </div>
            </div>
            <div className=''ref={ref} data-aos="flip-down">
            <div className='text-3xl lg:text-5xl font-extrabold  '>A Minimal Storyline</div>
            <div className='pt-4 font-medium text-muted-foreground'>
            Great things often come unexpectedly; they emerge naturally! Taking My Classes Online is a unique journey of an academic expert evolving into a trusted platform. As the name suggests, Taking My Classes Online is a hub for those seeking online academic assistance. 
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <Image src={'/about_us/strategy-development.png'} width={60} height={60} alt='strategy'></Image>
                <div className='flex flex-col ml-3'>
                <div className='text-lg'>Developing a Strategic Plan</div>
                <div className='text-muted-foreground'>We develop your academic strategy for online marketing by analyzing past webmaster analytics and SEO records.</div>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Image src={'/about_us/execution.png'} width={60} height={60} alt='strategy'></Image>
                <div className='flex flex-col ml-3'>
                <div className='text-lg'>Action Plan</div>
                <div className='text-muted-foreground'>The most effective practices and strategies are applied to ensure successful outcomes for your current digital marketing campaign.</div>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Image src={'/about_us/analysis.png'} width={60} height={60} alt='strategy'></Image>
                <div className='flex flex-col ml-3'>
                <div className='text-lg'>Data Analysis</div>
                <div className='text-muted-foreground'>Reveal Every Detail in Detail!</div>
                </div>
            </div>

            </div>
        </div>
        <div className='border-b-[2px] border-muted-foreground'></div>
    </div>
  )
}

export default AboutProcess