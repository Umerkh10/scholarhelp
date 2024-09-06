"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import HeroSection from './_components/HeroSection'
const Rating = dynamic(() => import('./_components/Rating'));
const Academic = dynamic(() => import('./_components/Academic'));
const WhyUs = dynamic(() => import('./_components/WhyUs'));
const ImageReviews = dynamic(() => import('./_components/ImageReviews'));
const WorkFlow = dynamic(() => import('./_components/WorkFlow'));
const Sample = dynamic(() => import('./_components/Sample'));
const TrustReview = dynamic(() => import('./_components/TrustReview'));
const Faq = dynamic(() => import('./_components/Faq'));
import { useInView } from 'react-intersection-observer'
import Aos from 'aos'
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
    <div ref={ref}>
      <HeroSection />
      <Rating />
      <Academic/>
      <WhyUs/>
      <ImageReviews/>
      <WorkFlow/>
      <Sample/>
      <TrustReview/>
      <Faq/>
      </div>
  )
}

export default Page