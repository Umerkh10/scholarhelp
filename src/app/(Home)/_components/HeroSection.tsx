"use client"
import React from 'react'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './FormTab';



const HeroSection = () => {

  return (

    <div className='m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <div className=' mx-auto max-w-screen-xl py-5 ' >
        <div className='py-20 px-5 md:pt-44'>
          <div className='text-center dark:text-zinc-100 text-zinc-900 text-xl sm:text-3xl font-extrabold '>Hire Expert</div>
          <div className='text-center dark:text-zinc-100 text-zinc-900 text-3xl sm:text-5xl font-extrabold'>Academic Writers</div>
          <div className='text-center dark:text-zinc-100 text-zinc-900 text-xl sm:text-3xl font-extrabold pt-2 '>To Elevate Your Grades!</div>
          <div className='max-w-screen-md mx-auto text-center  pt-4 font-medium dark:text-zinc-100 text-zinc-900 sm:text-lg '>
            Your trusted source for high-quality academic writing services. We provide expert support for essays, research papers, online classes, and exam preparation to help you achieve top grades. Reach your academic goals with us!
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
            <div className='flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
            transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl  m-2'>
              <Image src={"/imgs/order.png"} width={35} height={35} alt='whatsapp' />
              <button className='font-medium ml-2 text-zinc-800'>Order Now</button>
            </div>
            <div className='flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800
            transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2'>
              <Image src={"/imgs/whatsapp.png"} width={25} height={25} alt='whatsapp' />
              <button className='font-medium ml-2 text-background'>Chat On Whatsapp</button>
            </div>
          </div>
        </div>
        
        <div className='py-7 bg-muted rounded-lg '>
          <div className='text-center font-bold text-2xl py-3 '>Get Instant Help From Our Experts</div>
          <Tabs defaultValue='1'>
            <TabsList>
              <TabsTrigger value='1'>Writing</TabsTrigger>
              <TabsTrigger value='2'>Rewriting</TabsTrigger>
              <TabsTrigger value='3'>Editing</TabsTrigger>
            </TabsList>
            <TabsContent value='1'>
              <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 mt-4 p-5'>

                <div className=' '>
                  <div className='rounded-lg border-[2px] border-zinc-700 '><input className='bg-transparent w-full py-3 px-2 outline-none' type="email" placeholder='Enter Email' name='email' />
                  </div>
                </div>

                <div className=''>
                  <div className='rounded-lg border-[2px] border-zinc-700'>
                    <select className="bg-transparent  w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
                      <option className='bg-muted' value="Undergraduate">Undergraduate</option>
                      <option className='bg-muted' value="High School">High School</option>
                      <option className='bg-muted' value="Master">Master</option>
                      <option className='bg-muted' value="Doctoral">Doctoral</option>
                      <option className='bg-muted' value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className=''>
                  <div className='rounded-lg border-[2px] border-zinc-700'>
                    <select className="bg-transparent w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
                      <option className='bg-muted' value="Business">Business</option>
                      <option className='bg-muted' value="Accounting">Accounting</option>
                      <option className='bg-muted' value="Nursing">Nursing</option>
                      <option className='bg-muted' value="HRM">HRM</option>
                      <option className='bg-muted' value="Medical">Medical</option>
                      <option className='bg-muted' value="Anthropology">Anthropology</option>
                      <option className='bg-muted' value="Application Letters">Application Letters</option>
                      <option className='bg-muted' value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div className=' '>
                  <div className='rounded-lg border-[2px] border-zinc-700 '><input className='bg-transparent w-full py-3 px-2 outline-none' type="text" placeholder='Detail ' name='detail' />
                  </div>
                </div>

              </div>
              <div className='flex justify-center items-center mt-4'>
                <button className='bg-amber-400 rounded-xl py-2 px-6 font-medium text-lg hover:scale-105 hover:shadow-xl transition ease-in duration-150 delay-150'>Submit</button>
              </div>
            </TabsContent>

            <TabsContent value='2'>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 mt-4 p-5'>
            <div className=' '>
              <div className='rounded-lg border-[2px] border-zinc-700 '><input className='bg-transparent w-full py-3 px-2 outline-none' type="email" placeholder='Enter Email' name='email' />
              </div>
            </div>

            <div className=''>
              <div className='rounded-lg border-[2px] border-zinc-700'>
                <select className="bg-transparent  w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
                  <option className='bg-muted' value="Undergraduate">Undergraduate</option>
                  <option className='bg-muted' value="High School">High School</option>
                  <option className='bg-muted' value="Master">Master</option>
                  <option className='bg-muted' value="Doctoral">Doctoral</option>
                  <option className='bg-muted' value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className=''>
              <div className='rounded-lg border-[2px] border-zinc-700'>
                <select className="bg-transparent w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
                  <option className='bg-muted' value="Business">Business</option>
                  <option className='bg-muted' value="Accounting">Accounting</option>
                  <option className='bg-muted' value="Nursing">Nursing</option>
                  <option className='bg-muted' value="HRM">HRM</option>
                  <option className='bg-muted' value="Medical">Medical</option>
                  <option className='bg-muted' value="Anthropology">Anthropology</option>
                  <option className='bg-muted' value="Application Letters">Application Letters</option>
                  <option className='bg-muted' value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className=' '>
              <div className='rounded-lg border-[2px] border-zinc-700 '><input className='bg-transparent w-full py-3 px-2 outline-none' type="text" placeholder='Detail ' name='detail' />
              </div>
            </div>

            </div>
            <div className='flex justify-center items-center mt-4'>
            <button className='bg-amber-400 rounded-xl py-2 px-6 font-medium text-lg hover:scale-105 hover:shadow-xl transition ease-in duration-150 delay-150'>Submit</button>
            </div>
            </TabsContent>
            
            <TabsContent value='3'>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 mt-4 p-5'>
            <div className=' '>
              <div className='rounded-lg border-[2px] border-zinc-700 '><input className='bg-transparent w-full py-3 px-2 outline-none' type="email" placeholder='Enter Email' name='email' />
              </div>
            </div>

            <div className=''>
              <div className='rounded-lg border-[2px] border-zinc-700'>
                <select className="bg-transparent  w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
                  <option className='bg-muted' value="Undergraduate">Undergraduate</option>
                  <option className='bg-muted' value="High School">High School</option>
                  <option className='bg-muted' value="Master">Master</option>
                  <option className='bg-muted' value="Doctoral">Doctoral</option>
                  <option className='bg-muted' value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className=''>
              <div className='rounded-lg border-[2px] border-zinc-700'>
                <select className="bg-transparent w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
                  <option className='bg-muted' value="Business">Business</option>
                  <option className='bg-muted' value="Accounting">Accounting</option>
                  <option className='bg-muted' value="Nursing">Nursing</option>
                  <option className='bg-muted' value="HRM">HRM</option>
                  <option className='bg-muted' value="Medical">Medical</option>
                  <option className='bg-muted' value="Anthropology">Anthropology</option>
                  <option className='bg-muted' value="Application Letters">Application Letters</option>
                  <option className='bg-muted' value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className=' '>
              <div className='rounded-lg border-[2px] border-zinc-700 '><input className='bg-transparent w-full py-3 px-2 outline-none' type="text" placeholder='Detail ' name='detail' />
              </div>
            </div>

            </div>
            <div className='flex justify-center items-center mt-4'>
            <button className='bg-amber-400 rounded-xl py-2 px-6 font-medium text-lg hover:scale-105 hover:shadow-xl transition ease-in duration-150 delay-150'>Submit</button>
            </div>
            </TabsContent>
          </Tabs>
        </div>

      </div>
    </div>
  )
}

export default HeroSection

