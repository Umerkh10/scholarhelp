import React from 'react'
import TGmatBanner from './TGmatBanner'
import TGMATLongContent from './TGMATLongContent'
import TGmatFlow from './TGmatFlow'
import TGmatPoints from './TGmatPoints'
import TGmatFormContent from './TGmatFormContent'
import TGmatCf from './TGmatCf'
import TGmatLC2 from './TGmatLC2'
import TGmatFAQ from './TGmatFAQ'

function page() {
  return (
    <div>
    <TGmatBanner/>
    <TGMATLongContent/>
    <TGmatFlow/>
    <TGmatPoints/>
    <TGmatFormContent/>
    <TGmatCf/>
    <TGmatLC2/>
    <TGmatFAQ/>
    </div>
  )
}

export default page