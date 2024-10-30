import React from 'react'
import GedSampleContent from './GedSampleContent'
import GedStudyGuide from './GedStudyGuide'
import GedFaq from './GedFaq'

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