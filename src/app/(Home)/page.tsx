import React from 'react'
import HeroSection from './_components/HeroSection'
import Rating from './_components/Rating'
import Academic from './_components/Academic'
import WhyUs from './_components/WhyUs'
import ImageReviews from './_components/ImageReviews'
import WorkFlow from './_components/WorkFlow'
import Sample from './_components/Sample'
import TrustReview from './_components/TrustReview'
import Faq from './_components/Faq'

const Page = () => {
  return (
    <>
      <HeroSection />
      <Rating />
      <Academic/>
      <WhyUs/>
      <ImageReviews/>
      <WorkFlow/>
      <Sample/>
      <TrustReview/>
      <Faq/>
    </>
  )
}

export default Page