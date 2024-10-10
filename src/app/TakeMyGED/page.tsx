import React from 'react'
import GedBanner from './GedBanner'
import GedLongContent from './GedLongContent'
import GedFlow from './GedFlow'
import GedPoints from './GedPoints'
import GedFormContent from './GedFormContent'
import GedCoreFeatures from './GedCoreFeatures'
import GedLongContent2 from './GedLongContent2'
import GedFaq from './GedFaq'

function page() {
  return (
    <div>
        <GedBanner/>
        <GedLongContent/>
        <GedFlow/>
        <GedPoints/>
        <GedFormContent/>
        <GedCoreFeatures/>
        <GedLongContent2/>
        <GedFaq/>
    </div>
  )
}

export default page