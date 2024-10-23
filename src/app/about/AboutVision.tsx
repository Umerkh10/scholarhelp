
import Image from 'next/image'
import React from 'react'


function AboutVision() {

  return (
    <div className='mx-auto max-w-screen-xl my-10'  data-aos="zoom-in">
         <div className='border-b-2 border-muted-foreground'></div>
        <div className='grid lg:grid-cols-2 grid-cols-1 py-7 px-5 gap-3'>
            <div className='' data-aos="flip-up">
                <div className='text-2xl md:text-4xl font-extrabold mt-5 lg:mt-20 '>Our Vision for the Future</div>
                <div className='border-b-2 w-52 border-muted-foreground mt-2'></div>
                <div className='text-sm md:text-base mt-2 text-muted-foreground'>At {process.env.NEXT_PUBLIC_WEBSITE_NAME}, our long-term vision is to lead the advancement of knowledge and innovation through a commitment to academic excellence, research breakthroughs, and global collaboration. We aspire to create an inclusive and dynamic learning environment where students and faculty can explore new ideas, drive transformative change, and contribute to solving the worlds most pressing challenges.</div>
            </div>
            <div className='' data-aos="flip-down">
                <div className='flex items-center'>
                    <Image src={'/about_us/vision_about_us.webp'} width={400} height={400} alt='vision'></Image>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default AboutVision