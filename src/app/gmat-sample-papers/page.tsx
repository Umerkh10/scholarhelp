import React from 'react'
import GmatSampleContent from './GmatSampleContent'
import GmatStudyGuide from './GmatStudyGuide'
import GmatFaq from './GmatFaq'

function page() {
  return (
    <div>
        <GmatSampleContent/>
        <GmatStudyGuide/>
        <GmatFaq/>
    </div>
  )
}

export default page