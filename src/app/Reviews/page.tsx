import React from 'react'
import ReviewBanner from './ReviewBanner'
import ReviewTabs from './ReviewTabs'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Valuable Reviews of Our Examination Services',
  description: `Get to read some of the best and most interesting reviews given by our valuable clients. See how we helped them and how in the same way can be of use to you.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/reviews",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function page() {
  return (
    <>
    <ReviewBanner/>
    <ReviewTabs/>
    </>
  )
}

export default page