import React from 'react'
import TmtBanner from './TmtBanner'
import TmtLongContent from './TmtLongContent'
import TmtFlow from './TmtFlow'
import TmtPoints from './TmtPoints'
import TmtFormContent from './TmtFormContent'
import TmtCoreFeatures from './TmtCoreFeatures'
import TmtLongContent2 from './TmtLongContent2'
import TmtFaq from './TmtFaq'

function page() {
  return (
    <div>
        <TmtBanner/>
        <TmtLongContent/>
        <TmtFlow/>
        <TmtPoints/>
        <TmtFormContent/>
        <TmtCoreFeatures/>
        <TmtLongContent2/>
        <TmtFaq/>
    </div>
  )
}

export default page