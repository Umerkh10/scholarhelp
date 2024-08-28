import React from 'react'
import HeroSection from './_components/HeroSection'
import Rating from './_components/Rating'
import Academic from './_components/Academic'
import WhyUs from './_components/WhyUs'
import ImageReviews from './_components/ImageReviews'

const Page = () => {
  return (
    <>
      <HeroSection />
      <Rating />
      <Academic/>
      <WhyUs/>
      <ImageReviews/>
    </>
  )
}

export default Page