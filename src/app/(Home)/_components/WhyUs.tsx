"use client"
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';     
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import Aos from 'aos';

const WhyUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        Aos.init({
            duration: 800,
            offset: 100,
        });
    }, [inView]);
  return (


    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
    <div className='text-center text-2xl md:text-5xl font-bold text-violet-950'> The Benefits of Taking My Online Classes</div>
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
            <div className='group mt-5' ref={ref} data-aos="flip-left">
                <div className='relative scale-95 group-hover:scale-100 group-hover:border-yellow-400 border-[5px]  group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[350px] w-full rounded-xl p-4 overflow-hidden'>
                    <div style={{ backgroundImage: "url('/imgs/bg-why-us.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                    <div className='relative z-10'>
                        <div className='flex justify-between'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/result-1.png" width={64} height={64} alt='result'></Image>
                            </div>
                            <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>01</div>
                        </div>
                        <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Deliver Effective Results</div>
                        <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We offer solutions to help you manage your online class tasks efficiently. We respect your deadlines and ensure your work is delivered on time. Say goodbye to concerns about missing deadlines and let Taking My Classes Online Help handle everything for you.</div>

                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='group mt-5' ref={ref} data-aos="flip-right">
                <div className='relative scale-95 group-hover:scale-100 group-hover:border-yellow-400 border-[5px]  group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[350px] w-full rounded-xl p-4 overflow-hidden'>
                    <div style={{ backgroundImage: "url('/imgs/bg-why-us.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                    <div className='relative z-10'>
                        <div className='flex justify-between'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/elite.png" width={64} height={64} alt='pen'></Image>
                            </div>
                            <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-500'>02</div>
                        </div>
                        <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Elite Subject Specialists</div>
                        <div className='pt-3 text-base font-medium group-hover:text-gray-200'>
                        Taking My Classes Online Help comprises multiple teams of native experts with deep knowledge in their respective subject areas. They possess a strong command of the English language, allowing them to create error-free high-quality content.</div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='group mt-5' ref={ref} data-aos="flip-left">
                <div className='relative scale-95 group-hover:scale-100 group-hover:border-yellow-400 border-[5px]  group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[350px] w-full rounded-xl p-4 overflow-hidden'>
                    <div style={{ backgroundImage: "url('/imgs/bg-why-us.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                    <div className='relative z-10'>
                        <div className='flex justify-between'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/superior.png" width={64} height={64} alt='pen'></Image>
                            </div>
                            <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-500'>03</div>
                        </div>
                        <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Deliver Superior Content</div>
                        <div className='pt-3 text-base font-medium group-hover:text-gray-200'>Our team of academic experts is dedicated to delivering high-quality content to meet all your needs. We handle your online tasks, such as classes, assignments, homework, exams discussions and essays following your instructions to achieve top grades.</div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='group mt-5' ref={ref} data-aos="flip-right">
                <div className=' relative scale-95 group-hover:scale-100 group-hover:border-yellow-400 border-[5px]  group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[350px] w-full rounded-xl p-4 overflow-hidden'>
                    <div style={{ backgroundImage: "url('/imgs/bg-why-us.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                    <div className='relative z-10'>
                        <div className='flex justify-between'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/live-chat.png" width={64} height={64} alt='pen'></Image>
                            </div>
                            <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>04</div>
                        </div>
                        <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Live Chat Support Hours</div>
                        <div className='pt-3 text-base font-medium group-hover:text-gray-200'>
                        We are here to provide you with the best experience, offering 24/7 live chat support to address your questions anytime, day or night. Whether it is the middle of the night or the weekend, feel free to reach out to us for assistance.</div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='group mt-5' ref={ref} data-aos="flip-left">
                <div className='relative scale-95 group-hover:scale-100 group-hover:border-yellow-400 border-[5px]  group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[350px] w-full rounded-xl p-4 overflow-hidden'>
                    <div style={{ backgroundImage: "url('/imgs/bg-why-us.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                    <div className='relative z-10'>
                        <div className='flex justify-between'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/original.png" width={64} height={64} alt='pen'></Image>
                            </div>
                            <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>05</div>
                        </div>
                        <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Original Content</div>
                        <div className='pt-3 text-base font-medium group-hover:text-gray-200'>Taking My Classes Online Help delivers content that is completely free from plagiarism. our team specializes in thesis writing, ensuring you can trust their expertise to create authentic, plagiarism-free work for you</div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='group mt-5' ref={ref} data-aos="flip-right">
                <div className='relative scale-95 group-hover:scale-100 group-hover:border-yellow-400 border-[5px]  group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[350px] w-full rounded-xl p-4 overflow-hidden'>
                    <div style={{ backgroundImage: "url('/imgs/bg-why-us.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                    <div className='relative z-10'>
                        <div className='flex justify-between'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/budget.png" width={64} height={64} alt='pen'></Image>
                            </div>
                            <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>06</div>
                        </div>
                        <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>
                        Budget-Friendly Prices</div>
                        <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We offer a flexible pricing strategy that caters to everyone’s needs. Our prices depend on factors such as academic level, required services, chosen subject experts, and deadlines. Don’t stress about the cost if you’re working with a tight budget.</div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='group mt-5' ref={ref} data-aos="flip-left">
                <div className='relative scale-95 group-hover:scale-100 group-hover:border-yellow-400 border-[5px]  group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600
                 lg:h-[350px] w-full rounded-xl p-4 overflow-hidden'>
                    <div style={{ backgroundImage: "url('/imgs/bg-why-us.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                    <div className='relative z-10'>
                        <div className='flex justify-between'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/confidential-folder.png" width={64} height={64} alt='pen'></Image>
                            </div>
                            <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>07</div>
                        </div>
                        <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>
                        Total Confidentiality for Users</div>
                        <div className='pt-3 text-base font-medium group-hover:text-gray-200'>
                        Taking My Classes Online Help is committed to protecting your privacy. We only request an email and contact number, which are optional. Rest assured, any information provided is kept confidential and is only accessible to authorized personnel.</div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='group mt-5' ref={ref} data-aos="flip-right">
                <div className='relative scale-95 group-hover:scale-100 group-hover:border-yellow-400 border-[5px]  group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600
                 lg:h-[350px] w-full rounded-xl p-4 overflow-hidden'>
                    <div style={{ backgroundImage: "url('/imgs/bg-why-us.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                    <div className='relative z-10'>
                        <div className='flex justify-between'>
                            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/grammar.png" width={64} height={64} alt='pen'></Image>
                            </div>
                            <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-500 '>08</div>
                        </div>
                        <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>
                        Flawless Grammar</div>
                        <div className='pt-3 text-base font-medium group-hover:text-gray-200'>With Taking My Classes Online Help, you can be confident in flawless grammar and punctuation. Additionally, they verify grammatical accuracy using online tools for complete assurance.</div>
                   
                    </div>
                </div>
            </div>
        </SwiperSlide>

    </Swiper>
</div>
  );
};

export default WhyUs