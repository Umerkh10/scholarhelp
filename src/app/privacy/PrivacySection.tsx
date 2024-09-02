"use client"
import Aos from 'aos';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';

function PrivacySection() {
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
    <div className='mx-auto max-w-screen-xl py-10' ref={ref}>
    <div className='pt-10 text-center font-extrabold text-3xl lg:text-5xl' data-aos='flip-down'>Data Protection and Privacy</div>

    <div className='py-3 text-center font-medium text-lg max-w-screen-md mx-auto'data-aos='flip-up' >At {process.env.NEXT_PUBLIC_WEBSITE_NAME}, we prioritize the privacy and security of your personal information.
         As an academic platform dedicated to enhancing your learning experience, we understand the importance of safeguarding your data. Our privacy policy outlines how we collect, use, and protect your information to ensure a secure and respectful environment for all users. We are committed to maintaining the highest standards of data protection and transparency, so you can focus on your academic pursuits with confidence.
         </div>
</div>
  )
}

export default PrivacySection


