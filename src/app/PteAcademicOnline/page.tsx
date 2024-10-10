import React from 'react'
import PteBanner from './PteBanner'
import PteLongContent from './PteLongContent'
import PteFlow from './PteFlow'
import PtePoints from './PtePoints'
import PteFormContent from './PteFormContent'
import PteCoreFeatures from './PteCoreFeatures'
import PteLongContent2 from './PteLongContent2'
import PteFaq from './PteFaq'

function page() {
  return (
    <div>
        <PteBanner/>
        <PteLongContent/>
        <PteFlow/>
        <PtePoints/>
        <PteFormContent/>
        <PteCoreFeatures/>
        <PteLongContent2/>
        <PteFaq/>
    </div>
  )
}

export default page