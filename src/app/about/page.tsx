"use client"
import React, { useEffect } from 'react'
import AboutBanner from './AboutBanner'
import AboutProcess from './AboutProcess'
import AboutVision from './AboutVision'
import AboutNumbers from './AboutNumbers'
import AboutEmail from './AboutEmail'
import { useInView } from 'react-intersection-observer'
import Aos from 'aos'
import 'aos/dist/aos.css';


function Page() {
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
    <AboutBanner/>
    <AboutProcess/>
    <AboutVision/>
    <AboutNumbers/>
    <AboutEmail/>
    </div>
  )
}

export default Page