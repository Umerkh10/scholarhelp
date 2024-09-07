import React from 'react'
import {  ChevronDown } from 'lucide-react';
import BannerForm from './BannerForm';
import { CtaButtons } from './HeroSection';


function FormContent() {

  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='h-[2px] w-full bg-zinc-800'></div>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>

            <div  data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Explore Your Unique Learning Dimension through Our Exclusive Online Tutors 
                    <ChevronDown className=' rotate-180'/>
                </h2>
            
                    <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                    takingmyclassesonline.com is the leading online platform for you to hire an online class instructor. Somehow, you might be bored of taking online classes and wondering about ‘need help with my online class’. So, then, we are here to help you out. We are on a mission to help students with their academics so they can easily continue their learning journey.
                    </p>
                    <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                    Can I Pay Someone to Take My Classes Online
                    <ChevronDown className=' rotate-180'/> </h2>
                    <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                    If you are searching for &apos Pay Someone to Take My Classes Online,&apos so you are at the right place to get online class services to score high in your exam. Literally, concerning our expert makes you eligible to reach the distinctions. Moreover, our experts are highly qualified, skilled, and well aware of modern teaching techniques. Also, their experience in this field innovates their teaching methodology as well as they are very committed and sincere in their prophetic profession. So, it is your decision whether you want to achieve your success or not. In reality, you are one step away from filling out the order form and taking your exam.
                    Pay someone to take my class? is not a simple question as it requires extensive research to find the best online service for this job. By hiring our online instructor, you will lead your academic journey and get the distinction.
                    </p>
                
           
            </div>
       
        <CtaButtons/>
        </div>

        <div  data-aos="zoom-in-down" className=''>
            <div  className='flex items-center justify-center mt-5'>
                <BannerForm/>
            </div>
        </div>

    </div>
</div>
  )
}

export default FormContent