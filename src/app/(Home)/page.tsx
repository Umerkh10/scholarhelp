"use client"
import React, { useEffect } from 'react'
import {HeroSection} from './_components/HeroSection'
import Rating from './_components/Rating'
import Academic from './_components/Academic'
import WhyUs from './_components/WhyUs'
import ImageReviews from './_components/ImageReviews'
import WorkFlow from './_components/WorkFlow'
import Sample from './_components/Sample'
import TrustReview from './_components/TrustReview'
import Faq from './_components/Faq'
import { useInView } from 'react-intersection-observer'
import Aos from 'aos'
import 'aos/dist/aos.css';
import AboutContent from './_components/AboutContent'
import FormContent from './_components/FormContent'
import LongContent from './_components/LongContent'
import SmallDivider from './_components/SmallDivider'



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
      <WorkFlow/>
      <AboutContent/>
      <FormContent/>
      <LongContent/>
      <WhyUs/>
      <Faq/>
      <SmallDivider/>
      <TrustReview/>
      <Rating />
      <Academic/>
      <ImageReviews/>
      <Sample/>
      </div>
  )
}

export default Page