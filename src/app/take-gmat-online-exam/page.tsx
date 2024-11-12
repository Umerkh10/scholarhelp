import React from 'react';
import TGmatBanner from './TGmatBanner';
import TGMATLongContent from './TGMATLongContent';
import TGmatFlow from './TGmatFlow';
import TGmatPoints from './TGmatPoints';
import TGmatFormContent from './TGmatFormContent';
import TGmatCf from './TGmatCf';
import TGmatLC2 from './TGmatLC2';
import TGmatFAQ from './TGmatFAQ';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Hire an Expert to Take My GMAT Exam for Me | Surety A+ Result',
  description: 'Takingmyclassesonline.com offers take my GMAT exam for me with Installment fees option, Location must be mentioned of your area for taking the online exam.',
  alternates: {
    canonical: 'https://www.takingmyclassesonline.com/take-gmat-online-exam',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Taking My Classes Online",
          "alternateName": "Takingmyclassesonline",
          "url": "https://takingmyclassesonline.com/take-gmat-online-exam",
          "logo": "https://takingmyclassesonline.com/assets/weblogo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1 9179331132",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.instagram.com/takingmyclassesonline/",
            "https://www.facebook.com/takingmyclassesonline/",
            "https://www.pinterest.com/takingmyclassesonline/",
            "https://x.com/takemyclas19231/",
            "https://www.linkedin.com/company/takingmyclassesonline/",
            "https://www.youtube.com/@takingmyclassesonline"
          ]
        }) }} />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Taking My Classes Online",
          "alternateName": "Takingmyclassesonline",
          "url": "https://takingmyclassesonline.com/take-gmat-online-exam",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "takingmyclassesonline",
          "image": "https://takingmyclassesonline.com/assets/weblogo.png",
          "description": "Takingmyclassesonline.com offers take my GMAT exam for me with Installment fees option, Location must be mentioned of your area for taking the online exam.",
          "brand": {
            "@type": "Brand",
            "name": "Taking My Classes Online"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "36"
          }
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Exactly how many times can I take the GMAT Exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "How many attempts am I allowed to take the GMAT? Your five (5) GMAT exam online test attempts within a rolling 12-month period and your eight (8) total lifetime restrictions will be determined by all of your efforts on the GMAT exam, across all editions, whether they are taken online or in person."
              }
            },
            {
              "@type": "Question",
              "name": "What is the Focus Edition of the GMAT exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The GMAT Focus edition is shorter than the original GMAT. Furthermore, The new test format has three 45-minute sections: Data Insights, Verbal Reasoning and Quantitative Reasoning. Resulting the total of 2 hours and 15 minutes."
              }
            },
            {
              "@type": "Question",
              "name": "Can I cancel my GMAT score, or have it not been reported earlier?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You cannot reverse your GMAT result while canceling your score can be a solution if you think that you’ve not done better in the test. Depending on your test center. You have 72 hours after the exam to change your score if you accept it. It could take up to 24 hours. If you do so after leaving the test place, you will be charged $25."
              }
            },
            {
              "@type": "Question",
              "name": "Is there any check-in procedure to attempt the GMAT test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! It is the part of the GMAT examination, where you’re required to answer the questions regarding the information that you’ve put in the form."
              }
            },
            {
              "@type": "Question",
              "name": "Can we leave during the GMAT test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Significant breaks are given to you to relax yet it is not allowed to go during the exam. Should an emergency arise, please notify the proctor and it will be taken care of for you. As much as possible, plan your time so that you will minimize your need to leave the testing room."
              }
            },
            {
              "@type": "Question",
              "name": "Should I use a calculator during the test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, calculators are not permitted, but you will have an on-screen calculator you can use for this section. For all other sections, you'll be doing calculations longhand."
              }
            }
          ]
        }) }} />
      </Head>

      <div>
        <TGmatBanner />
        <TGMATLongContent />
        <TGmatFlow />
        <TGmatPoints />
        <TGmatFormContent />
        <TGmatCf />
        <TGmatLC2 />
        <TGmatFAQ />
      </div>
    </>
  );
};

export default Page;