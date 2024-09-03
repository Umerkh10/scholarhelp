"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './FormTab';
import { BookOpenText, Pencil, PencilRuler } from 'lucide-react';


function BannerForm() {
  return (
    <div  className=" py-20 bg-muted shadow-xl rounded-xl lg:w-[480px] ">
    <div className='text-center font-bold text-xl md:text-2xl py-3 px-3  '>Get Instant Help From Our Experts</div>
    <Tabs defaultValue='1'>
      <TabsList className='px-3'>
        <TabsTrigger value='1'>Writing  </TabsTrigger>
        <TabsTrigger value='2'>Rewriting</TabsTrigger>
        <TabsTrigger value='3'>Editing  </TabsTrigger>
      </TabsList>
      <TabsContent value='1'>
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

      </TabsContent>

      <TabsContent value='2'>
        2222
      </TabsContent>
      
      <TabsContent value='3'>
    333333
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default BannerForm