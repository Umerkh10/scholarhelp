import React from 'react'
import LSATBanner from './LSATBanner'
import LSATLongContent from './LSATLongContent'
import LSATFlow from './LSATFlow'
import LSATPoints from './LSATPoints'
import LSATFormContent from './LSATFormContent'
import LSATCoreFeature from './LSATCoreFeature'
import LSATLongContent2 from './LSATLongContent2'
import LSATFaq from './LSATFaq'

function page() {
  return (
    <div>
        <LSATBanner/>
        <LSATLongContent/>
        <LSATFlow/>
        <LSATPoints/>
        <LSATFormContent/>
        <LSATCoreFeature/>
        <LSATLongContent2/>
        <LSATFaq/>
    </div>
  )
}

export default page