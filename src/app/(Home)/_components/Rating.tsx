import Image from 'next/image'
import React from 'react'

const Rating = () => {
  return (
    <div className='pt-10'>
        <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl'>
            <div className=' p-7'>
                <div className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4'>
                <div className='flex items-center border-[4px]  w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/confidential-email.png" width={50} height={100} alt='confidential'></Image>
                    <div className=' font-semibold pl-2'>100% Confidentiality</div>
                </div>
                <div className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/spam.png" width={50} height={100} alt='confidential'></Image>
                    <div className=' font-semibold pl-2 '>No Spam</div>
                </div>
                </div>

                <div className='flex flex-col md:flex-row items-center mt-4 space-y-3 md:space-y-0 md:space-x-4'>
                <div className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/documents.png" width={50} height={100} alt='confidential'></Image>
                    <div className=' font-semibold pl-2'>Plagiarism Free Work</div>
                </div>
                <div className='flex items-center border-[4px] w-full sm:w-[380px] border-black px-3 py-2 rounded-lg group hover:bg-yellow-400 transition ease-in delay-150 duration-150 cursor-pointer hover:scale-105'>
                    <Image className='group-hover:rotate-180 transition ease-in delay-150 duration-150' src="/imgs/money-back-guarantee.png" width={50} height={100} alt='confidential'></Image>
                    <div className=' font-semibold pl-2 '>Money Back Guarantee</div>
                </div>
                </div>
                
            </div>
            <div className='h-10 bg-purple-500'></div>
        </div>
    </div>
  )
}

export default Rating