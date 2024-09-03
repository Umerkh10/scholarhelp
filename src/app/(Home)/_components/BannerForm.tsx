"use client"
import React, { useState } from 'react'



function BannerForm() {

        // State to track which button is clicked
        const [activeButton, setActiveButton] = useState<string | null>(null);
      
        // Handler to set the clicked button as active
        const handleClick = (buttonName: string) => {
          setActiveButton(buttonName);
        };
  return (
    <div  className="pb-16 bg-muted shadow-xl rounded-xl lg:w-[480px] ">
        <div className=' lg:-translate-y-5 lg:-translate-x-7 -translate-x-4  -translate-y-4'>
        <div className='md:w-24 w-20 h-20 md:h-24 shadow-lg rounded-full bg-yellow-500 flex justify-center items-center'>
            <div className='text-center font-medium text-zinc-100 text-xs md:text-sm'>Upto <br /> 40% <br /> Discount</div>
        </div>
        </div>
    <div className='text-center font-bold text-xl md:text-2xl  px-3  '>Get Instant Help From Our Experts</div>
    <div className='flex justify-center items-center mt-3'>
    <button
        className={`px-5 py-3 transition ease-in duration-200 delay-200 border-[2px]  rounded rounded-tl-lg rounded-bl-lg ${
          activeButton === 'writing'
            ? 'bg-blue-600 text-white'
            : ' bg-zinc-200 text-zinc-800'
        }`}
        onClick={() => handleClick('writing')}
      >
        Writing
      </button>
      <button
        className={`px-5 py-3 transition ease-in duration-200 delay-200 border-[2px] ${
          activeButton === 'rewriting'
            ? 'bg-blue-600 text-white'
            : 'bg-zinc-200 text-zinc-800'
        }`}
        onClick={() => handleClick('rewriting')}
      >
        Rewriting
      </button>
      <button
        className={`px-5 py-3 transition ease-in duration-200 delay-200 border-[2px]  rounded rounded-tr-lg rounded-br-lg  ${
          activeButton === 'editing'
            ? 'bg-blue-600 text-white'
            : 'bg-zinc-200 text-zinc-800'
        }`}
        onClick={() => handleClick('editing')}
      >
        Editing
      </button>
        </div>

        <div className='pt-4 w-full px-3'>
            <input className='rounded-lg border-[2px] w-full py-3 px-3 outline-none' type="email" name='email' placeholder='Enter Your Email' />
        </div>
        <div className='pt-2 w-full px-3'>
            <input className='rounded-lg border-[2px] w-full py-3 px-3 outline-none' type="tel" name='phone' placeholder='Enter Your Phone Number' />
        </div>

        <div className='grid grid-cols-2 gap-2 pt-2 px-3'>
            <div className=''>
            <select className='rounded-lg border-[2px] w-full py-3 px-3 outline-none'  name="selection" required>
                        <option value="option">Assignment/ Coursework</option>
                        <option value="Flutter">Flutter</option>
                        <option value="React Native">React Native</option>
                        <option value="Swift">Swift</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                    </select>
            
            </div>

            <div className=''>
            <select className='rounded-lg border-[2px] w-full py-3 px-3 outline-none'  name="selection" required>
                        <option value="option">Subject</option>
                        <option value="Flutter">Flutter</option>
                        <option value="React Native">React Native</option>
                        <option value="Swift">Swift</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                    </select>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-2 pt-2 px-3'>
            <div className=''>
            <select className='rounded-lg border-[2px] w-full py-3 px-3 outline-none'  name="selection" required>
                        <option value="option">Page Words</option>
                        <option value="Flutter">Flutter</option>
                        <option value="React Native">React Native</option>
                        <option value="Swift">Swift</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                    </select>
            
            </div>

            <div className=''>
            <input className='rounded-lg border-[2px] w-full py-3 px-3 outline-none' placeholder='deadline'  name="deadline" required/>
            </div>
        </div>
        <div className='flex justify-center items-center mt-5'>
            <button className='px-5 py-3 rounded-xl bg-indigo-600 text-white hover:shadow-xl hover:scale-105
            transition ease-in duration-200 delay-200'>Get A Free Quote</button>
        </div>


  </div>
  )
}

export default BannerForm