"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';


const SlideContent = ({ imageSrc, title, subject, pages, level, docType, refStyle, animation }:any) => (
  <div className='group mt-5' data-aos={animation}>
    <div className='relative scale-95 group-hover:-translate-y-5 group-hover:border-yellow-400 border-[5px]    bg-gradient-to-t from-violet-400 to-indigo-400
       dark:bg-gradient-to-b dark:from-indigo-800 dark:via-zinc-800 dark:to-violet-800 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden'>
      <div className='relative z-10'>
        <div className='flex items-center'>
          <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-20 w-20 flex justify-center items-center'>
            <Image src={imageSrc} width={50} height={50} alt='result' />
          </div>
          <div className='text-white font-extrabold text-xl ml-5 transition ease-in duration-200 delay-100 group-hover:text-yellow-400'>
            {title}
          </div>
        </div>
        <div className='text-gray-200 text-xl font-medium pt-2'>Subject: {subject}</div>
        <div className='text-gray-200 text-xl font-medium pt-2'>Number Of Pages: {pages}</div>
        <div className='text-gray-200 text-xl font-medium pt-2'>Academic Level: {level}</div>
        <div className='text-gray-200 text-xl font-medium pt-2'>Document Type: {docType}</div>
        <div className='text-gray-200 text-xl font-medium pt-2'>Reference Style: {refStyle}</div>
        <div className='flex justify-center items-center mt-5'>
          <button className='bg-amber-400 w-full py-4 rounded-lg font-medium text-lg text-zinc-800 hover:bg-white hover:-translate-y-3 transition ease-in duration-200 delay-200 border-[3px] border-black'>
            View Sample
          </button>
        </div>
        <div className='flex items-center justify-center mt-5'>
          <div className='text-lg font-medium text-white'>Rating</div>
          <div className='flex items-center ml-3'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className='stroke-yellow-400 fill-yellow-400' />
              
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Sample = () => {


  const slides = [
    { imageSrc: '/imgs/pdf.png', title: 'Research Project', subject: 'Biology', pages: '10', level: 'Masters', docType: 'PDF', refStyle: 'APA', animation: 'flip-up' },
    
    { imageSrc: '/imgs/excel.png', title: 'Numerical Project', subject: 'Business', pages: '5', level: 'Masters', docType: 'Excel', refStyle: 'None', animation: 'flip-down' },
    
    { imageSrc: '/imgs/word.png', title: 'Case Study', subject: 'Economics', pages: '8', level: 'Masters', docType: 'Word', refStyle: 'MLA', animation: 'flip-up' },

    { imageSrc: '/imgs/excel.png', title: 'Numerical Project', subject: 'Business', pages: '5', level: 'Masters', docType: 'Excel', refStyle: 'None', animation: 'flip-down' },

    { imageSrc: '/imgs/pdf.png', title: 'Research Project', subject: 'Biology', pages: '10', level: 'Masters', docType: 'PDF', refStyle: 'APA', animation: 'flip-up' },
    { imageSrc: '/imgs/word.png', title: 'Case Study', subject: 'Economics', pages: '8', level: 'Masters', docType: 'Word', refStyle: 'MLA', animation: 'flip-up' },
  ];

  return (
    <div className='mt-10'>
      <div  data-aos="zoom-in-up" className='py-56' style={{ backgroundImage: "url('/imgs/samplebg-1.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='mx-auto max-w-screen-xl'>
          <div className='-translate-y-10 text-3xl md:text-5xl text-center font-extrabold text-gray-100'>Our Samples</div>

          <Swiper
            loop={true}
            spaceBetween={20}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              325: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <SlideContent {...slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Sample;
