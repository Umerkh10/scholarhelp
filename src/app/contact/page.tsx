"use client"
import React, { useEffect } from 'react'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    Aos.init({
      duration: 800,
      disable: "mobile",
      offset: 100,
    });
  }, [inView]);

  return (
    <div  ref={ref}>
        <ContactBanner/>
        <ContactForm/>
    </div>
  )
}

export default Page