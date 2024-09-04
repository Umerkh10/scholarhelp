"use client"
import React, { useEffect } from 'react'
import HeroSection from './_components/HeroSection'
import dynamic from 'next/dynamic';
const Rating = dynamic(() => import('./_components/Rating'), {
  ssr: false,
});
const Academic = dynamic(() => import('./_components/Academic'), {
  ssr: false,
});
const WhyUs = dynamic(() => import('./_components/WhyUs'), {
  ssr: false,
});
const ImageReviews = dynamic(() => import('./_components/ImageReviews'), {
  ssr: false,
});
const WorkFlow = dynamic(() => import('./_components/WorkFlow'), {
  ssr: false,
});
const Sample = dynamic(() => import('./_components/Sample'), {
  ssr: false,
});
const TrustReview = dynamic(() => import('./_components/TrustReview'), {
  ssr: false,
});
const Faq = dynamic(() => import('./_components/Faq'), {
  ssr: false,
});
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