import Image from 'next/image'
import React from 'react'



const ImageReviews = () => {

  return (
    <div className='mx-auto max-w-screen-xl mt-10 '  data-aos="zoom-in" >
        <div className='text-lg text-center md:text-4xl dark:text-zinc-100 text-violet-950 font-extrabold'>Demonstrating Excellence: </div>
        <div className='text-xl text-center md:text-5xl dark:text-zinc-100 text-violet-950 font-extrabold'> Students Earned A-Grades! </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-5' data-aos="fade-up">
            <div className='mt-4'>
                <Image src="/imgs/ss-results.jpg" width={800} height={400} alt='ss-result' ></Image>
            </div>
            <div className='mt-4'>
                <Image src="/imgs/ss-result-2.jpg" width={800} height={400} alt='ss-result' ></Image>
            </div>
            <div className='mt-4'>
                <Image src="/imgs/ss-results-3.jpg" width={800} height={400} alt='ss-result' ></Image>
            </div>
            <div className='mt-4'>
                <Image src="/imgs/ss-results-4.webp" width={800} height={400} alt='ss-result' ></Image>
            </div>
           
        </div>
       
    </div>
  )
}

export default ImageReviews