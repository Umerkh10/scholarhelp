"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './FormTab';
import { BookOpenText, Pencil, PencilRuler } from 'lucide-react';


function BannerForm() {
  return (
    <div style={{backgroundImage:"url('/imgs/form_bg.webp')",backgroundSize:'cover',backgroundPosition:'top-center',
       backgroundBlendMode:'overlay', backgroundColor:'#00000054' }} className=" py-7 bg-muted rounded-lg ">
    <div className='text-center font-bold text-2xl py-3 text-zinc-100 '>Get Instant Help From Our Experts</div>
    <Tabs defaultValue='1'>
      <TabsList>
        <TabsTrigger value='1'>Writing <Pencil className='pl-1'/> </TabsTrigger>
        <TabsTrigger value='2'>Rewriting <BookOpenText className='ml-2'/> </TabsTrigger>
        <TabsTrigger value='3'>Editing <PencilRuler className='pl-1'/> </TabsTrigger>
      </TabsList>
      <TabsContent value='1'>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-2 mt-4 p-5'>
      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="text" placeholder='Enter Name' name='name' />
        </div>
      </div>

      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="email" placeholder='Enter Email' name='email' />
        </div>
      </div>

      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="text" placeholder='Enter Phone Number ' name='phone' />
        </div>
      </div>

      <div className=''>
        <div className='rounded-lg border-[2px] border-zinc-700'>
          <select className="rounded-lg  w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
            <option className='bg-muted' value="level">Academic Level</option>
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
          <select className="rounded-lg w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
            <option className='bg-muted' value="subject">Subject</option>
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


      </div>
      <div className='flex justify-center items-center mt-3'>
      <button className='bg-gradient-to-r from-amber-500 via-indigo-500 to-violet-500 text-white rounded-xl py-2 px-6 font-medium text-lg hover:scale-105 hover:shadow-xl transition ease-in duration-150 delay-150'>Get A Free Quote</button>
      </div>
      </TabsContent>

      <TabsContent value='2'>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-2 mt-4 p-5'>
      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="text" placeholder='Enter Name' name='name' />
        </div>
      </div>

      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="email" placeholder='Enter Email' name='email' />
        </div>
      </div>

      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="text" placeholder='Enter Phone Number ' name='phone' />
        </div>
      </div>

      <div className=''>
        <div className='rounded-lg border-[2px] border-zinc-700'>
          <select className="rounded-lg  w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
            <option className='bg-muted' value="level">Academic Level</option>
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
          <select className="rounded-lg w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
            <option className='bg-muted' value="subject">Subject</option>
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


      </div>
      <div className='flex justify-center items-center mt-3'>
      <button className='bg-gradient-to-r from-amber-500 via-indigo-500 to-violet-500 text-white rounded-xl py-2 px-6 font-medium text-lg hover:scale-105 hover:shadow-xl transition ease-in duration-150 delay-150'>Get A Free Quote</button>
      </div>
      </TabsContent>
      
      <TabsContent value='3'>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-2 mt-4 p-5'>
      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="text" placeholder='Enter Name' name='name' />
        </div>
      </div>

      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="email" placeholder='Enter Email' name='email' />
        </div>
      </div>

      <div className=' '>
        <div className='rounded-lg border-[2px] border-zinc-700 '><input className='rounded-lg w-full py-3 px-2 outline-none' type="text" placeholder='Enter Phone Number ' name='phone' />
        </div>
      </div>

      <div className=''>
        <div className='rounded-lg border-[2px] border-zinc-700'>
          <select className="rounded-lg  w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
            <option className='bg-muted' value="level">Academic Level</option>
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
          <select className="rounded-lg w-full py-3 px-2 outline-none text-muted-foreground" name="selection" required>
            <option className='bg-muted' value="subject">Subject</option>
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


      </div>
      <div className='flex justify-center items-center mt-3'>
      <button className='bg-gradient-to-r from-amber-500 via-indigo-500 to-violet-500 text-white rounded-xl py-2 px-6 font-medium text-lg hover:scale-105 hover:shadow-xl transition ease-in duration-150 delay-150'>Get A Free Quote</button>
      </div>
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default BannerForm