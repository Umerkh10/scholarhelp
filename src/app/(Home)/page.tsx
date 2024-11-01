import React, { useEffect } from 'react'
import {HeroSection} from './_components/HeroSection'
import Rating from './_components/Rating'
import Academic from './_components/Academic'
import WhyUs from './_components/WhyUs'
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
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: ' Take My Online Class for me ',
  description: 'Pay Someone to Taking My Classes Online for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!',
};

const Page = () => {

  
  return (
    <div >
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
      <Sample/>
      </div>
  )
}

export default Page