import React from 'react'
import ToeflBanner from './ToeflBanner'
import ToeflLongContent from './ToeflLongContent'
import ToeflFlow from './ToeflFlow'
import ToeflPoints from './ToeflPoints'
import ToeflFormContent from './ToeflFormContent'
import ToeflLongContent2 from './ToeflLongContent2'
import ToeFlFAQ from './ToeFlFAQ'
import ToeflCoreFeature from './ToeflCoreFeature'

function page() {
  return (
    <div>
    <ToeflBanner/>
    <ToeflLongContent/>
    <ToeflFlow/>
    <ToeflPoints/>
    <ToeflFormContent/>
    <ToeflCoreFeature/>
    <ToeflLongContent2/>
    <ToeFlFAQ/>
    </div>
  )
}

export default page