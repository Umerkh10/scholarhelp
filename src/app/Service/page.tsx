"use client"
import React, { useEffect } from 'react'
import ServiceBanner from './ServiceBanner'
import ServiceLC from './ServiceLC'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos';
import ServiceFlow from './ServiceFlow';
import ServicePoints from './ServicePoints';
import ServiceFormContent from './ServiceFormContent';
import ServiceCF from './ServiceCF';
import ServiceLC2 from './ServiceLC2';
import ServiceFaq from './ServiceFaq';

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
    <div ref={ref}>
        <ServiceBanner/>
        <ServiceLC/>
        <ServiceFlow/>
        <ServicePoints/>
        <ServiceFormContent/>
        <ServiceCF/>
        <ServiceLC2/>
        <ServiceFaq/>
    </div>
  )
}

export default Page