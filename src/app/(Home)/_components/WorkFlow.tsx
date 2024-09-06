"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


function WorkFlow() {
  const [activeTab, setActiveTab] = useState("1"); 

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevTab) => {
        const nextTab:any = {
          "1": "2",
          "2": "3",
          "3": "4",
          "4": "1",
        };
        return nextTab[prevTab]; 
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div data-aos="zoom-in"  className='mx-auto max-w-screen-xl mt-10'>
      <div className='text-center text-xl md:text-5xl font-extrabold dark:text-zinc-100 text-violet-950'>Workflow Process We Follow</div>

        <div className='  mt-8'>
            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="1">1</TabsTrigger>
          <TabsTrigger value="2">2</TabsTrigger>
          <TabsTrigger value="3">3</TabsTrigger>
          <TabsTrigger value="4">4</TabsTrigger>
        </TabsList>

        <TabsContent value="1">
          <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
            <div   className=''>
              <div className='flex justify-center items-center'>
                <Image  src={"/imgs/workflow.webp"} loading='lazy' width={600} height={400} alt='workflow'></Image>
              </div>
            </div>
            <div   className=''>
              <div className='flex justify-start items-center mt-5 lg:mt-20'>
                <div className='text-lg md:text-4xl font-bold dark:text-zinc-100 text-indigo-900 '>Make Your Order:</div>
              </div>
              <div className='mt-2 md:mt-5 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900'>You can submit your order details through our online form, WhatsApp, live chat, or email.</div>
              <div className='flex justify-start items-center group mt-5'>
                <button className='group-hover:text-black text-sm md:text-base  transition ease-in delay-200 duration-200 border-[2px] border-yellow-600 group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-90 bg-yellow-400 px-4 py-4 rounded-lg font-bold'>Place Your Order</button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="2">
           <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
            <div    className=''>
              <div className='flex justify-center items-center'>
                <Image src={"/imgs/workflow_2.webp"} loading='lazy' width={600} height={400} alt='workflow'></Image>
              </div>
            </div>
            <div    className=''>
              <div className='flex justify-start items-center mt-5 lg:mt-20'>
                <div className='text-lg md:text-4xl font-bold dark:text-zinc-100 text-indigo-900 '>Confirm and Pay:</div>
              </div>
              <div className='mt-2 md:mt-5 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900'>Make an advance payment to confirm and start your order.</div>
              <div className='flex justify-start items-center group mt-5'>
                <button className='group-hover:text-black text-sm md:text-base transition ease-in delay-200 duration-200 border-[2px] border-yellow-600 group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-90 bg-yellow-400  px-4 py-4 rounded-lg font-bold'>Place Your Order</button>
              </div>
            </div>
          </div>
          </TabsContent>

        <TabsContent value="3">
             <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
            <div    className=''>
              <div className='flex justify-center items-center'>
                <Image src={"/imgs/workflow_3.webp"} loading='lazy' width={600} height={400} alt='workflow'></Image>
              </div>
            </div>
            <div className=''>
              <div className='flex justify-start items-center mt-5 lg:mt-20'>
              <div className='text-lg md:text-4xl font-bold dark:text-zinc-100 text-indigo-900 '>
              Expert Work Underway:</div>
              </div>
              <div className='mt-2 md:mt-5 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900'>
              Our skilled tutors begin working on your order right away.</div>
              <div className='flex justify-start items-center group mt-5'>
                <button className='group-hover:text-black text-sm md:text-base transition ease-in delay-200 duration-200 border-[2px] border-yellow-600 group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-90 bg-yellow-400  px-4 py-4 rounded-lg font-bold'>Place Your Order</button>
              </div>
            </div>
          </div>
          </TabsContent>

        <TabsContent value="4">
        <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
            <div    className=''>
              <div className='flex justify-center items-center'>
                <Image src={"/imgs/workflow_4.webp"} loading='lazy' width={600} height={400} alt='workflow'></Image>
              </div>
            </div>
            <div  className=''>
              <div className='flex justify-start items-center mt-5 lg:mt-20'>
                <div className='text-lg md:text-4xl font-bold dark:text-zinc-100 text-indigo-900 '>Punctual Delivery:</div>
              </div>
              <div className='mt-2 md:mt-5  md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900'>
              Experience on-time delivery, every time. We value your time and ensure your projects arrive punctually.</div>
              <div className='flex justify-start items-center group mt-5'>
                <button className='group-hover:text-zinc-900 text-sm md:text-base transition ease-in delay-200 duration-200 border-[2px] border-yellow-600 group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-90 bg-yellow-400  px-4 py-4 rounded-lg font-bold'>Place Your Order</button>
              </div>
            </div>
          </div>
        </TabsContent>

      </Tabs>
      </div>

    </div>
  )
}

export default WorkFlow