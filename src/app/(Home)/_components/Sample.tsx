"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';     
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';

const Sample = () => {
  return (
    <div className='mt-10'>
 <div className=' py-56'  style={{ backgroundImage: "url('/imgs/samplebg-1.webp')", backgroundSize: 'cover',backgroundPosition: 'center',}}>
  <div className='mx-auto max-w-screen-xl'>
    <div className='-translate-y-10 text-3xl md:text-5xl text-center font-extrabold text-white'>Our Samples</div>

  <Swiper
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        breakpoints={{

            325: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 2,
            },

            1024: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 3,
            },
        }}

    >
        <SwiperSlide>
            <div className='group mt-5'>
                <div className='relative scale-95 group-hover:-translate-y-5 group-hover:border-yellow-400 border-[5px]  bg-indigo-500 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden'>
                    <div className='relative z-10'>
                        <div className='flex items-center'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-20 w-20  flex justify-center items-center'>
                                <Image src="/imgs/pdf.png" width={50} height={50} alt='result'></Image>
                            </div>
                            <div className='text-white font-extrabold text-xl ml-5  transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>Research Project</div>
                        </div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Subject: Biology</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Number Of Pages: 10</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Academic Level: Masters</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Document Type: PDF</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Reference Style: APA</div>
                        <div className='flex justify-center items-center mt-5'>
                        <button className='bg-yellow-500 w-full py-4 rounded-lg font-medium text-lg
                         hover:bg-white hover:-translate-y-3 transition ease-in duration-200 delay-200 border-[3px] border-black '> View Sample</button>
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                            <div className='text-lg font-medium text-white'>Rating</div>
                            <div className='flex items-center ml-3'>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                             </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='group mt-5'>
                <div className='relative scale-95 group-hover:-translate-y-5 group-hover:border-yellow-400 border-[5px]  bg-indigo-500 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden'>
                    <div className='relative z-10'>
                        <div className='flex items-center'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-20 w-20  flex justify-center items-center'>
                                <Image src="/imgs/excel.png" width={50} height={50} alt='result'></Image>
                            </div>
                            <div className='text-white font-extrabold text-xl ml-5  transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>Numerical Project</div>
                        </div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Subject: Business</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Number Of Pages: 5</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Academic Level: Masters</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Document Type: Excel</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Reference Style: None</div>
                        <div className='flex justify-center items-center mt-5'>
                        <button className='bg-yellow-500 w-full py-4 rounded-lg font-medium text-lg
                         hover:bg-white hover:-translate-y-3 transition ease-in duration-200 delay-200 border-[3px] border-black '> View Sample</button>
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                            <div className='text-lg font-medium text-white'>Rating</div>
                            <div className='flex items-center ml-3'>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                             </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='group mt-5'>
                <div className='relative scale-95 group-hover:-translate-y-5 group-hover:border-yellow-400 border-[5px]  bg-indigo-500 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden'>
                    <div className='relative z-10'>
                        <div className='flex items-center'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-20 w-20  flex justify-center items-center'>
                                <Image src="/imgs/word.png" width={50} height={50} alt='result'></Image>
                            </div>
                            <div className='text-white font-extrabold text-xl ml-5  transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>Case Study</div>
                        </div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Subject: Economics</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Number Of Pages: 8</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Academic Level: Masters</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Document Type: Word</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Reference Style: MLA</div>
                        <div className='flex justify-center items-center mt-5'>
                        <button className='bg-yellow-500 w-full py-4 rounded-lg font-medium text-lg
                         hover:bg-white hover:-translate-y-3 transition ease-in duration-200 delay-200 border-[3px] border-black '> View Sample</button>
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                            <div className='text-lg font-medium text-white'>Rating</div>
                            <div className='flex items-center ml-3'>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                             </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='group mt-5'>
                <div className='relative scale-95 group-hover:-translate-y-5 group-hover:border-yellow-400 border-[5px]  bg-indigo-500 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden'>
                    <div className='relative z-10'>
                        <div className='flex items-center'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-20 w-20  flex justify-center items-center'>
                                <Image src="/imgs/excel.png" width={50} height={50} alt='result'></Image>
                            </div>
                            <div className='text-white font-extrabold text-xl ml-5  transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>Numerical Project</div>
                        </div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Subject: Business</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Number Of Pages: 5</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Academic Level: Masters</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Document Type: Excel</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Reference Style: None</div>
                        <div className='flex justify-center items-center mt-5'>
                        <button className='bg-yellow-500 w-full py-4 rounded-lg font-medium text-lg
                         hover:bg-white hover:-translate-y-3 transition ease-in duration-200 delay-200 border-[3px] border-black '> View Sample</button>
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                            <div className='text-lg font-medium text-white'>Rating</div>
                            <div className='flex items-center ml-3'>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                             </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='group mt-5'>
                <div className='relative scale-95 group-hover:-translate-y-5 group-hover:border-yellow-400 border-[5px]  bg-indigo-500 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden'>
                    <div className='relative z-10'>
                        <div className='flex items-center'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-20 w-20  flex justify-center items-center'>
                                <Image src="/imgs/pdf.png" width={50} height={50} alt='result'></Image>
                            </div>
                            <div className='text-white font-extrabold text-xl ml-5  transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>Research Project</div>
                        </div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Subject: Biology</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Number Of Pages: 10</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Academic Level: Masters</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Document Type: PDF</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Reference Style: APA</div>
                        <div className='flex justify-center items-center mt-5'>
                        <button className='bg-yellow-500 w-full py-4 rounded-lg font-medium text-lg
                         hover:bg-white hover:-translate-y-3 transition ease-in duration-200 delay-200 border-[3px] border-black '> View Sample</button>
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                            <div className='text-lg font-medium text-white'>Rating</div>
                            <div className='flex items-center ml-3'>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                             </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='group mt-5'>
                <div className='relative scale-95 group-hover:-translate-y-5 group-hover:border-yellow-400 border-[5px]  bg-indigo-500 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden'>
                    <div className='relative z-10'>
                        <div className='flex items-center'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-20 w-20  flex justify-center items-center'>
                                <Image src="/imgs/word.png" width={50} height={50} alt='result'></Image>
                            </div>
                            <div className='text-white font-extrabold text-xl ml-5  transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>Case Study</div>
                        </div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Subject: Economics</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Number Of Pages: 8</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Academic Level: Masters</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Document Type: Word</div>
                        <div className='text-gray-200 text-xl font-medium pt-2'>Reference Style: MLA</div>
                        <div className='flex justify-center items-center mt-5'>
                        <button className='bg-yellow-500 w-full py-4 rounded-lg font-medium text-lg
                         hover:bg-white hover:-translate-y-3 transition ease-in duration-200 delay-200 border-[3px] border-black '> View Sample</button>
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                            <div className='text-lg font-medium text-white'>Rating</div>
                            <div className='flex items-center ml-3'>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                            <Star className='stroke-yellow-400 fill-yellow-400'/>
                             </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>
</Swiper>
  </div>
</div>
    
    </div>
  )
}

export default Sample