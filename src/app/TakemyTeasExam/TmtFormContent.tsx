import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import BannerForm from '../(Home)/_components/BannerForm'

function TmtFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                How Our Expert Instructor Can Help in Your TEAS Exam  </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Our Experts are specialized in all subjects, providing comprehensive support to maximize your performance. Takingmyclassesonline.com is the most convenient learning platform, with experienced and skillful teachers. We aim to provide you with the best services, ensuring that you won’t face hurdles in your exams. Join us and get free practice for the LSAT exam with the assistance of 24/7 support. 
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Looking For An Affordable Service To Take Your TEAS Exam </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Many students struggle to find a learning platform where they can get free education. Don’t worry! We assure you that every learner will get the same service whether going through a financial crisis or established. We believe in promoting equal rights. Take your chance and hire our instructors and get valuable guidance on the TEAS exam, GRE home test and for many more exams.	
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Take My TEAS Test for Me: Get Reliable Help.
                </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Are you looking to find someone to “take my TEAS for me” to reduce your stress. You’re not alone! Many students seek assistance to make sure that they get the desirable scores that help in taking the admission in nursing school. Our tutors for the TEAS exam will help you in achieving the better results in your TEAS exams. However, Our TEAS test tutor can help you strengthen your study skills and improve your scores. Join us now and get premium assistance at an affordable price. 
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

export default TmtFormContent