"use client"
import React, { useEffect } from 'react'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Footer = () => {
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
    <div className=''>
      <div ref={ref} data-aos="zoom-in" className=''>
        <div ref={ref} data-aos="fade-left" className='bg-blue-200 grid lg:grid-cols-6 grid-cols-1 p-5 container  '>
          <div className=' col-span-2 p-4'>
            <div className='font-bold text-xl  '>Taking My Classes Online</div>
            <div className='text-lg font-medium mt-4'>Taking My Online Classes Help delivers academic writing services. Our team of qualified subject experts can help you with your challenging online classes, homework, assignments, quizzes, and exams</div>

          </div>
          <div className='p-4'>
            <div className='font-bold text-xl'>Explore</div>
            <ul className='mt-3'>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Home</Link> </li>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >About Us</Link> </li>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Contact Us </Link> </li>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Blogs</Link> </li>
            
            </ul>
          </div>

          <div className='p-4'>
            <div className='font-bold text-xl'>Services</div>
            <ul className='mt-3'>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Online Class</Link> </li>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Online Exam</Link> </li>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Online Homework</Link> </li>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Online Assignment</Link> </li>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Essay Writing</Link> </li>
            
            </ul>
          </div>

          
          <div className='p-4'>
            <div className='font-bold text-xl'>Legal Info</div>
            <ul className='mt-3'>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Terms & Conditions</Link> </li>
              <li className='font-medium text-lg hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Privacy Policy</Link> </li>
          
            
            </ul>
          </div>

          <div className='p-4'>
            <div className='font-bold text-xl'>Contact Info</div>
            <div className="flex items-center mt-4 text-indigo-7900"> <Phone className="stroke-indigo-700 fill-indigo-700 font-medium mr-2"/> 1-716-708-1869 </div>
            <div className='flex items-center mt-2'>
              <Image className='m-1' src={'/imgs/tiktok.webp'} width={30} height={30} alt='social'></Image>
              <Image className='m-1' src={'/imgs/linkedIn.webp'} width={30} height={30} alt='social'></Image>
              <Image className='m-1' src={'/imgs/instagram.webp'} width={30} height={30} alt='social'></Image>
            </div>
            <div className='flex items-center mt-2'>
              <Image className='m-1' src={'/imgs/americanExpressIcon.webp'} width={30} height={30} alt='social'></Image>
              <Image className='m-1' src={'/imgs/masterCardIcon.webp'} width={30} height={30} alt='social'></Image>
              <Image className='m-1' src={'/imgs/payPal.webp'} width={30} height={30} alt='social'></Image>
              <Image className='m-1' src={'/imgs/visa.webp'} width={30} height={30} alt='social'></Image>
            </div>
          </div>

        </div>
        <div className='container py-4 bg-indigo-700 text-center text-white font-semibold'>Copyrights © 2024 All Rights Reserved by Taking My Online Class
        </div>
      </div>
    </div>
  )
}

export default Footer