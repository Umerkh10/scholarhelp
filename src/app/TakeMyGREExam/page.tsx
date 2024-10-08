import React from 'react'
import TmGreExamBanner from './TmGreExamBanner'
import TmGreExamLC from './TmGreExamLC'
import TmGreExamFlow from './TmGreExamFlow'
import TmGreExamPoints from './TmGreExamPoints'
import TmGreExamFc from './TmGreExamFc'
import TmGreExamLC2 from './TmGreExamLC2'
import TmGreExamFAQ from './TmGreExamFAQ'

function page() {
  return (
    <div>
    <TmGreExamBanner/>
    <TmGreExamLC/>
    <TmGreExamFlow/>
    <TmGreExamPoints/>
    <TmGreExamFc/>
    <TmGreExamLC2/>
    <TmGreExamFAQ/>
    </div>
  )
}

export default page