import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import Link from 'next/link'
import Image from 'next/image'

function LSATFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Get LSAT Practice Exam: How Our Expert Helps You</h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Many students struggle to find the best service to help them to pass their LSAT exams with good grades. We assure every student with our best service to get them to pass in these exams with incredible marks. We aim to help all students who find a website in their search. Furthermore, Get benefits from our supreme services and seek expert advice throughout your academic career. 
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Get LSAT Exam Online: A Guide To Help You</h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Practice for any exam format would be tough with a guide. Every student can learn and develop their skills. However, We understand that many find many difficulties due to their prime commitment or struggling with bad instructors. Our services answer all of your questions with the most unique and prominent style of teaching and develop advanced skills in students. Join us and get expert assistance on your exams today!
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Can Paying Someone Help Me With My Studies?
                </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                GOnline platforms have made education easier and reliable, which helps millions of students to learn and excellence their skills in a matter of time. However, finding authentic instructors and assistance could be difficult.. We are popular among students with our prominent commitment and our best services to help to get better results in their <Link href={'/lsat-exam-prep'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> LSAT exam format</Link>  and provide them with free practice of the LSAT exam so that they feel they get the worth of their money. However, we offer a money-back guarantee if we fail to achieve the desired results.
                </p>

            </div>
            <CtaButtons />

        </div>

        <div data-aos="zoom-in-down" className=''>
            <div className='flex items-center justify-center mt-5'>
            <Image src={'/imgs/form-content-img.png'} width={800} height={500} alt='content-img'></Image>
            </div>
        </div>

    </div>
</div>
  )
}

export default LSATFormContent