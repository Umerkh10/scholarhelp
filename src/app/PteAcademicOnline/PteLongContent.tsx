import Image from 'next/image'
import React from 'react'

function PteLongContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>

    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">Benefits Of Hiring Someone To Your PTE Academic Online Course</h2>

                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                In this modern world, We have diverse options for learning and developing skills. Online learning has become a prominent platform for students to seek guidance and enhance their skills. Whether you want to take PTE academic online guidance or need support to do my GED online test, it has become an essential solution for every student.
                </p>
                <h3 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  "> Impact Of Online Classes</h3>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Online classes are gaining more popularity in the student community as it is reliable and a vast platform for guidance. You can find multiple answers and guidance for your questions. However, paying someone to teach you and support you to do your exam is legit service where a professional helps you in your academic queries and clear your doubts. If you’re looking for the best service to help you in your PTE academic online exam as well as for your academic needs, Takingmyclassesonline.com is one solution for all of your academic problems.

                </p>
            </div>
        </div>

        <div data-aos="zoom-in-down" className=''>
        <div className='flex items-center justify-center mt-5'>
        <Image className='rounded-xl' loading='eager' src={'/imgs/gmat-1.webp'} width={800} height={800} alt='servicelc' ></Image>
        </div>
        </div>

    </div>
</div>
  )
}

export default PteLongContent