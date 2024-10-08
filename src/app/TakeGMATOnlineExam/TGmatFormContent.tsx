import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import BannerForm from '../(Home)/_components/BannerForm'

function TGmatFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                How Our Expert Helps You To Take Your GMAT Online</h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Takemyclassesonline.com is popular among students because of their loyalty and their premium services. Most students struggle to find the right choice for their GMAT test and yet fail to achieve good marks in their exams. Our aim is to help every student to deal with their academics and help them to reduce their academic stress.  “Where do I take the GMAT at a cheap package” is now no longer a search with us! We treat every student equally and help them to accomplish their goals.
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Hire an Expert And Take Your GMAT Online and Develop Learning Skills</h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Wondering where to take the GMAT Exam? You're in the right place. Our expert instructors are here to help you with their advice and help you to do your exams and achieve remarkable results through their knowledge and experience. Our Website has highly certified teachers which are known for their tactics and expertise in different exam formats, Which not only helps the student to secure good grades but also helps them to accomplish their goals and help them throughout their academic journey. You can find your GMAT score through the official website
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                where can i take the GMAT Services?
                </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Getting the best GMAT assistance will be very tough to find but don’t further, We provide every student with our special services so that they won’t feel any hurdles on their side. paying someone to take my class will definitely help you to increase chances for better marks. Our services will help you stay up to date with the world and also help in their exams so that you don’t have to ask for “how many times can you take the GMAT test?”.
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

export default TGmatFormContent