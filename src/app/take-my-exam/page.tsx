import React from 'react'
import TmeBanner from './TmeBanner'
import TmeLc from './TmeLc'
import TakeMyExamFlow from './TakeMyExamFlow'
import TakeMyExamPoints from './TakeMyExamPoints'
import TmeFormContent from './TmeFormContent'
import TakeMyExamCF from './TakeMyExamCF'
import TakeMyExamLC2 from './TakeMyExamLC2'
import TmeFaq from './TmeFaq'

function page() {
  return (
    <div>
        <TmeBanner/>
        <TmeLc/>
        <TakeMyExamFlow/>
        <TakeMyExamPoints/>
        <TmeFormContent/>
        <TakeMyExamCF/>
        <TakeMyExamLC2/>
        <TmeFaq/>
    </div>
  )
}

export default page