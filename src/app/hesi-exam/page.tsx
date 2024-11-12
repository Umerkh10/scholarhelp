import React from 'react';
import HesiBanner from './HesiBanner';
import HesiExamLC from './HesiExamLC';
import HesiFlow from './HesiFlow';
import HesiPoints from './HesiPoints';
import HesiFormContent from './HesiFormContent';
import HesiCoreFeatures from './HesiCoreFeatures';
import HesiLC2 from './HesiLC2';
import HesiFaq from './HesiFaq';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Hire Expert for HESI A2 Exam | Take My HESI Test for Me Online',
  description: `Are you seeking for a reliable and trustworthy way to take my HESI exam OR A2 online! From takingmyclassesonline.com with experts with tailored study plans.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/hesi-exam",
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

function Page() {
  return (
    <div>
      <Head>
        {/* Schema Markup for Organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Taking My Classes Online",
              "alternateName": "Takingmyclassesonline",
              "url": "https://takingmyclassesonline.com/hesi-exam",
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
            }
          `}
        </script>

        {/* Schema Markup for Website */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Taking My Classes Online",
              "alternateName": "Takingmyclassesonline",
              "url": "https://takingmyclassesonline.com/hesi-exam",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>

        {/* Schema Markup for Product */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/", 
              "@type": "Product", 
              "name": "takingmyclassesonline",
              "image": "https://takingmyclassesonline.com/assets/weblogo.png",
              "description": "Are you seeking for a reliable and trustworthy way to take my HESI exam OR A2 online! From takingmyclassesonline.com with experts with tailored study plans.",
              "brand": {
                "@type": "Brand",
                "name": "Taking My Classes Online"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "36"
              }
            }
          `}
        </script>

        {/* Schema Markup for FAQPage */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Do you have any experts who can give me preparation for the HESI A2 exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Takingmyclassesonline.com is providing its prime service to every student to seek advice from experts and get better marks in their HESI exams."
                }
              },{
                "@type": "Question",
                "name": "Is 10 days enough time to prepare for the HESI test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In general, the preparation for any exams are determined by your concept of the subject. However, a general subject requires a minimum of 1 week of preparation for the exam."
                }
              },{
                "@type": "Question",
                "name": "How many attempts have the HESI test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can attempt the HESI exams 2 times in a period of two years. However, Some institutions allow up to three attempts for the HESI exam."
                }
              },{
                "@type": "Question",
                "name": "Is the HESI exam tough for nurses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your knowledge and your learning skills as to how strong your concepts are. It can be challenging for some students as it determines your critical thinking and judges your nursing concept."
                }
              },{
                "@type": "Question",
                "name": "Do you have any kind of refund policy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you are not satisfied, you are eligible to claim our refund policy. You can also claim it when we didn’t cover your course outlines and couldn’t develop your learning skills."
                }
              },{
                "@type": "Question",
                "name": "Is Calculator Allowed in HESI Test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Calculators are allowed to be used while using any scientific calculator are prohibited to use during the HESI exam."
                }
              },{
                "@type": "Question",
                "name": "Will my identity be confidential while taking online classes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We prioritize our customers' privacy and confidential information, so don’t worry about privacy while engaging with our services."
                }
              },{
                "@type": "Question",
                "name": "Do you receive scratch paper for the HESI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You will be allowed with one pencil, scratch paper and a simple calculator to use in the HESI exams."
                }
              }]
            }
          `}
        </script>
      </Head>

      {/* Page Content */}
      <HesiBanner />
      <HesiExamLC />
      <HesiFlow />
      <HesiPoints />
      <HesiFormContent />
      <HesiCoreFeatures />
      <HesiLC2 />
      <HesiFaq />
    </div>
  );
}

export default Page;