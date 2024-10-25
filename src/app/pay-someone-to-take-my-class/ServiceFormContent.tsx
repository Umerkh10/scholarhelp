import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import BannerForm from '../(Home)/_components/BannerForm'
import Link from 'next/link'
import Image from 'next/image'

function ServiceFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Can I pay someone to do my online class in the UK? </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Are you struggling with your academics? Here are the reliable services that can provide online classes in the USA. Furthermore, you might ask your friends, ‘How can I hire someone to 
                <Link href={'/'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> take my online classes</Link> now?’. Absolutely, we have professionals who will develop your academic skills. You will achieve the highest degree through our online classes by securing the highest grades in your online exams, and we guarantee your academic success.
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Looking for an Affordable service where I Hire Someone to Take My Online Class? </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                How can I get affordable services to pay someone to do my online class? Don’t worry. We assure you that every learner only needs to pay low prices to join the best online instructor help in the UK. To ensure quality, we always focus on cost-effective prices to put less burden on those learners who are struggling financially. Consequently, our effective online classes guarantee you 100% success throughout your career, even while offering cheap, affordable, and low budget online class services from our experts.
                </p>

                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                 Can I Pay someone to take my class for Me and Develop My Learning Skills? </h2>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Our online instructor’s expertise in teaching methodology leads you to develop your theoretical learning and improve your practical skills, which further help you at the workplace. Our experts’ proficiency in taking your online classes will engage you throughout your academic journey. However, they provide essential exam resources and conduct many mock tests including, 
                <Link href={'/lsat-exam-prep'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '>  mock LSAT exam </Link>, LPN mock test and much more to improve your learning capability.  Also, you can now manage your daily routine tasks with your online spreadsheets and worksheets. Ordering here, at takingmyclassesonline.com, will create a proper learning scheme and schedules for your learning growth. Finally, no time management issues can generally happen when online class instructors handle your online classes.
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

export default ServiceFormContent