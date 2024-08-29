import React from 'react'
import HeroSection from './_components/HeroSection'
import Rating from './_components/Rating'
import Academic from './_components/Academic'
import WhyUs from './_components/WhyUs'
import ImageReviews from './_components/ImageReviews'
import WorkFlow from './_components/WorkFlow'

const Page = () => {
  return (
    <>
      <HeroSection />
      <Rating />
      <Academic/>
      <WhyUs/>
      <ImageReviews/>
      <WorkFlow/>
    </>
  )
}

export default Page