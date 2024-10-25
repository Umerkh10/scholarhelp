import Image from 'next/image'
import React from 'react'



const ImageReviews = () => {

  return (
    <div className='mx-auto max-w-screen-xl mt-10 '  data-aos="zoom-in" >
        <h2 className='text-lg text-center md:text-4xl dark:text-zinc-100 text-violet-950 font-extrabold'>Take a Look 
</h2>
        <h3 className='text-xl text-center md:text-3xl dark:text-zinc-100 text-violet-950 font-bold'> How Our Student Gain A+ Results </h3>
        <p className=' text-center dark:text-zinc-100 text-violet-950 px-4 md:text-base text-sm '> These are just a few examples of our clients achieving great marks in their exams. However, you too can experience the same results with our expert service, which provides sufficient exam resources and will guide you until you achieve academic success.</p>
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