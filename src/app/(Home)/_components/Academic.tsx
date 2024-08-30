"use client"
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

function Academic() {
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
    <div className='mx-auto max-w-screen-xl mt-10'>
        <div className=' text-3xl md:text-5xl text-center text-violet-950 font-extrabold'>We are your partners in Academic Success!</div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 mx-auto'>

            <div ref={ref} data-aos="flip-left" className='group  p-4'>
                <div className='flex items-center gap-3'>
                <div className=' flex-col items-center border-[5px] 
                group-hover:border-yellow-400  group-hover:bg-indigo-700  group-hover:scale-105 group-hover:shadow-xl transition ease-in delay-200 duration-200 bg-indigo-400   md:h-[370px] w-full rounded-lg px-4 py-5 '>
                    <div className='rounded-full bg-yellow-500 h-24 w-24 flex items-center justify-center'><Image src="/imgs/webinar.png" width={60} height={60} alt='onlineclass'></Image></div>
                    <div className='flex flex-col mt-4'>
                        <div className='text-lg sm:text-xl text-white font-semibold '>Online Class</div>
                        <div className=' text-zinc-200 font-medium '>Stuck with extensive daily tasks of your online classes, Fret Not, we are here for you to complete your online classes with perfect Grades!</div>
                    </div>
                </div>
                </div>
                </div>

                <div ref={ref} data-aos="flip-right" className='group p-4'>
                <div className=' flex-col items-center border-[5px] 
                group-hover:border-yellow-400  group-hover:bg-indigo-700 group-hover:scale-105 group-hover:shadow-xl transition ease-in delay-200 duration-200 bg-indigo-400  md:h-[370px] w-full rounded-lg px-4 py-5 '>
                    <div className='rounded-full bg-yellow-500 h-24 w-24 flex items-center justify-center'><Image src="/imgs/online-exam.png" width={60} height={60} alt='onlineclass'></Image></div>
                    <div className='flex flex-col mt-4'>
                        <div className='text-lg sm:text-xl text-white font-semibold '>Online Exam Help</div>
                        <div className=' text-zinc-200 font-medium '>Want to Ace your online exams without taking any stress, Taking My Online Classes Help tutors are at your service with Guaranteed best results in your online exams.</div>
                    </div>
                </div>
                </div>
            
           
            <div ref={ref} data-aos="flip-left" className=' group p-4'>
                <div className='flex items-center gap-3'>
                <div className=' flex-col items-center border-[5px] 
                group-hover:border-yellow-400  group-hover:bg-indigo-700 group-hover:scale-105 group-hover:shadow-xl transition ease-in delay-200 duration-200 bg-indigo-400  md:h-[370px] w-full rounded-lg px-4 py-5 '>
                    <div className='rounded-full bg-yellow-500 h-24 w-24 flex items-center justify-center'>
                    <Image src="/imgs/online-homework.png" width={60} height={60} alt='onlineclass'></Image></div>
                    <div className='flex flex-col mt-4'>
                        <div className='text-lg sm:text-xl text-white font-semibold '>Online Homework Help</div>
                        <div className=' text-zinc-200 font-medium '>Online homeworks can be very tricky and mind-exhausting at all times, but with Taking My Online Classes Help Reliable & Affordable service of online homework assistance everything becomes smooth and easy.</div>
                    </div>
                </div>
                </div>
                </div>
                
                <div ref={ref} data-aos="flip-right" className='group p-4'>
                <div className=' flex-col items-center border-[5px] 
                group-hover:border-yellow-400  group-hover:bg-indigo-700 group-hover:scale-105 group-hover:shadow-xl transition ease-in delay-200 duration-200 bg-indigo-400  md:h-[370px] w-full rounded-lg px-4 py-5 '>
                    <div className='rounded-full bg-yellow-500 h-24 w-24 flex items-center justify-center'>
                    <Image src="/imgs/essay.png" width={60} height={60} alt='onlineclass'></Image></div>
                    <div className='flex flex-col mt-4'>
                        <div className='text-lg sm:text-xl text-white font-semibold '>Essay Writing Services</div>
                        <div className=' text-zinc-200 font-medium '>Wanting to write a compelling & plagiarism free essay, trust our credible tutors with excellent essay writing services with in due date delivery.</div>
                    </div>
                </div>
                </div>

                <div ref={ref} data-aos="flip-left" className='group p-4'>
                <div className=' flex-col items-center border-[5px] 
                group-hover:border-yellow-400  group-hover:bg-indigo-700 group-hover:scale-105 group-hover:shadow-xl transition ease-in delay-200 duration-200 bg-indigo-400  md:h-[370px] w-full rounded-lg px-4 py-5 '>
                    <div className='rounded-full bg-yellow-500 h-24 w-24 flex items-center justify-center'>
                    <Image src="/imgs/assignment.png" width={60} height={60} alt='onlineclass'></Image></div>
                    <div className='flex flex-col mt-4'>
                        <div className='text-lg sm:text-xl text-white font-semibold '>Assignment Help</div>
                        <div className=' text-zinc-200 font-medium '>Are you finding it difficult to complete your assignment questions correctly and on time? Worry not, Taking My Online Classes Help offers 24/7 homework aid with reliable client support at your service.</div>
                    </div>
                </div>
                </div>

                <div ref={ref} data-aos="flip-right" className='group p-4'>
                <div className=' flex-col items-center border-[5px] 
                group-hover:border-yellow-400  group-hover:bg-indigo-700 group-hover:scale-105 group-hover:shadow-xl transition ease-in delay-200 duration-200 bg-indigo-400  md:h-[370px] w-full rounded-lg px-4 py-5 '>
                    <div className='rounded-full bg-yellow-500 h-24 w-24 flex items-center justify-center'>
                    <Image src="/imgs/assignment.png" width={60} height={60} alt='onlineclass'></Image></div>
                    <div className='flex flex-col mt-4'>
                        <div className='text-lg sm:text-xl text-white font-semibold '>Assignment Help</div>
                        <div className=' text-zinc-200 font-medium '>Are you finding it difficult to complete your assignment questions correctly and on time? Worry not, Taking My Online Classes Help offers 24/7 homework aid with reliable client support at your service.</div>
                    </div>
                </div>
                </div>

                <div ref={ref} data-aos="flip-left" className='group p-4'>
                <div className=' flex-col items-center border-[5px] 
                group-hover:border-yellow-400  group-hover:bg-indigo-700 group-hover:scale-105 group-hover:shadow-xl transition ease-in delay-200 duration-200 bg-indigo-400  md:h-[370px] w-full rounded-lg px-4 py-5 '>
                    <div className='rounded-full bg-yellow-500 h-24 w-24 flex items-center justify-center'>
                    <Image src="/imgs/assignment.png" width={60} height={60} alt='onlineclass'></Image></div>
                    <div className='flex flex-col mt-4'>
                        <div className='text-lg sm:text-xl text-white font-semibold '>Assignment Help</div>
                        <div className=' text-zinc-200 font-medium '>Are you finding it difficult to complete your assignment questions correctly and on time? Worry not, Taking My Online Classes Help offers 24/7 homework aid with reliable client support at your service.</div>
                    </div>
                </div>
                </div>

                <div ref={ref} data-aos="flip-right" className='group p-4'>
                <div className=' flex-col items-center border-[5px] 
                group-hover:border-yellow-400  group-hover:bg-indigo-700 group-hover:scale-105 group-hover:shadow-xl transition ease-in delay-200 duration-200 bg-indigo-400  md:h-[370px] w-full rounded-lg px-4 py-5 '>
                    <div className='rounded-full bg-yellow-500 h-24 w-24 flex items-center justify-center'>
                    <Image src="/imgs/assignment.png" width={60} height={60} alt='onlineclass'></Image></div>
                    <div className='flex flex-col mt-4'>
                        <div className='text-lg sm:text-xl text-white font-semibold '>Assignment Help</div>
                        <div className=' text-zinc-200 font-medium '>Are you finding it difficult to complete your assignment questions correctly and on time? Worry not, Taking My Online Classes Help offers 24/7 homework aid with reliable client support at your service.</div>
                    </div>
                </div>
                </div>

            </div>
            <div ref={ref} data-aos="flip-up" className='flex justify-center items-center mt-10 lg:mt-5 '>
            <button className='bg-indigo-400 px-4 py-4 rounded-lg  border-[4px] border-yellow-500 hover:bg-indigo-700 transition ease-in delay-200 duration-200 text-white font-medium text-lg'>Place Your Order Today</button>
            </div>
         </div>
   
  )
}

export default Academic