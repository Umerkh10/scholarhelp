import React from 'react'
import GedSampleContent from './GedSampleContent'
import GedStudyGuide from './GedStudyGuide'
import GedFaq from './GedFaq'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free GED Sample Paper - Boost Your Learning Experience',
  description: `Ace your exam with our premium GED sample papers. Practice essential topics, strengthen your skills, and gain the confidence to pass with flying colors`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/ged-sample-papers",
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
    <div>
        <GedSampleContent/>
        <GedStudyGuide/>
        <GedFaq/>
    </div>
  )
}

export default page