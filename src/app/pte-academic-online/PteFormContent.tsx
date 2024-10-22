import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import BannerForm from '../(Home)/_components/BannerForm'
import Link from 'next/link'

function PteFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                PTE Academic Online Test: Your Step-by-Step Guide to Success</h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Online learning platforms have become a very popular solution for students to study from home. It has made an impact on the world as it is more reliable and effective to learn and develop new skills. However, finding the right choice for your academic success is a difficult task to do. Takingmyclassesonline.com has highly certified experts and knowledgeable professors which help students to achieve desired marks in their exams including PTE academic test, LPN and many other forms of exams. Join now and avail more benefits at an affordable price.
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Benefit Of hiring Someone For PTE Academic Online Test</h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Paying someone to help you in your PTE academic online test will definitely help you in achieving more marks in your exams. However, The instructors also conduct a number of sample PTE Academic online tests to acquaint students with the exam structure and boost their confidence in taking the examinations successfully. Choosing the right platform to <Link href={'/pay-someone-to-take-my-class'} className='hover:text-blue-400 transition ease-in duration-150 delay-150 '>  pay someone to take my online class </Link> service will undoubtedly benefit you and help you achieve your academic goals.You can easily access your PTE Academic results online for convenient updates on your performance.
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Looking For An Affordable Service To Develop My Learning Skills
                </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                In modern times, finding the right instructor for leading and learning might be tough. However, our platform is one of the best learning platforms, where thousands of students take services at such inexpensive pricing. Our experts are highly certified that enables you to achieve desired marks in any exams effortlessly. Get an expert guide for effective <Link href={'/lsat-exam-prep'} className='hover:text-blue-400 transition ease-in duration-150 delay-150 '> LSAT exam preparation</Link>  or PTE academic online test to increase the chance of success. Improve your skills with our PTE Academic writing practice test online, designed to help you prepare effectively for the exam.
                </p>
            </div>
            <CtaButtons />

        </div>

        <div data-aos="zoom-in-down" className=''>
            <div className='flex items-center justify-center mt-5'>
                <BannerForm />
            </div>
        </div>

    </div>
</div>
  )
}

export default PteFormContent