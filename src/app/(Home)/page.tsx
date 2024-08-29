import React from 'react'
import HeroSection from './_components/HeroSection'
import Rating from './_components/Rating'
import Academic from './_components/Academic'
import WhyUs from './_components/WhyUs'
import ImageReviews from './_components/ImageReviews'
import WorkFlow from './_components/WorkFlow'
import Sample from './_components/Sample'
import TrustReview from './_components/TrustReview'

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
    </>
  )
}

export default Page