import React from 'react'
import HesiBanner from './HesiBanner'
import HesiExamLC from './HesiExamLC'
import HesiFlow from './HesiFlow'
import HesiPoints from './HesiPoints'
import HesiFormContent from './HesiFormContent'
import HesiCoreFeatures from './HesiCoreFeatures'
import HesiLC2 from './HesiLC2'
import HesiFaq from './HesiFaq'

function page() {
  return (
    <div>
        <HesiBanner/>
        <HesiExamLC/>
        <HesiFlow/>
        <HesiPoints/>
        <HesiFormContent/>
        <HesiCoreFeatures/>
        <HesiLC2/>
        <HesiFaq/>
    </div>
  )
}

export default page