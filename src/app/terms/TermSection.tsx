"use client"
import Aos from 'aos';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';

function TermSection() {
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
    <div className='mx-auto max-w-screen-xl py-10' ref={ref} >
        <div className='pt-10 text-center font-extrabold text-3xl lg:text-5xl'data-aos='flip-up'>Terms Of Service</div>

        <div className='py-3 text-center font-medium text-lg max-w-screen-md mx-auto'data-aos='flip-down' >By accessing or using {process.env.NEXT_PUBLIC_WEBSITE_NAME}, you agree to adhere to our terms and conditions. These terms govern your use of the platform, including all courses, materials, and support services provided. You commit to using the platform responsibly and not engaging in any activity that could compromise its functionality or the experience of other users. We reserve the right to update these terms at any time, and continued use of the platform constitutes acceptance of any changes. If you do not agree to these terms, please discontinue use of our services.</div>
    </div>
  )
}

export default TermSection