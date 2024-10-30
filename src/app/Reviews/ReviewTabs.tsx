import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './FormTab'
import Image from 'next/image';

function ReviewTabs() {
  const reviews = [
    {
      name: 'Alice Ruth',
      text: `I was searching for expert guidance to get support for my GRE exam until I found this website. The tutors are very supportive and efficient in guiding me throughout the course. Highly recommended for the newcomers.`,
    },
    {
      name: 'John Gary',
      text: `This website is a miracle to me. They not only help me in preparation for the LSAT exams but their 24/7 service gets me to clear my concepts anytime I want. Thank you.`,
    },
    {
      name: 'Jennifer Smith',
      text: `I have used their exam services countless times, and every time I have gotten the same amazing treatment from them. Reliable and affordable service in the town.`,
    },
    {
      name: 'Oliver Stewart',
      text: `The experts are amazing; their resources for GMAT exams help me to achieve desirable results in the exams. I can’t thank them enough for their support and help.`,
    },
    {
      name: 'Johnson Taylor',
      text: `The staff is very accommodating and professional, and I really appreciate their efforts. Really satisfied with their services`,
    },
    {
      name: 'Amanda Clark',
      text: `This platform is amazing. Taking my classes online is the only platform where I have received valuable information for the TOEFL with expert insights. I'm very happy to be the one to avail their service.`,
    },
    {
      name: 'Andrew WALLACE',
      text: `I was really struggling with my HESI exam preparation but then my friend recommended this website. Truly inspiring, the amount of effort that the experts put in to help me is just phenomenal.`,
    },
    {
      name: 'Joshua GIBSON',
      text: `I was overwhelmed with my online classes and couldn’t understand better if the experts hadn’t helped me out.`,
    },
    {
      name: 'Willie Robert',
      text: `I have failed multiple times in GED exams, but this service made all the difference. Informative, Supportive, and truly inspiring lead me to success`,
    },
    {
      name: ' Bruce Kennedy',
      text: `Very frustrated with my assignments and exams. Thankfully, the writers did a great job in the remaining time-frame. Highly recommendable! `,
    },
    {
      name: ' Sophia Walter',
      text: `I’d almost given up on passing the TEAS until I found this service. The support here made a huge difference that brought the confidence in me to do the TEAS exams, and I have passed the exam with desirable marks.  `,
    },
    {
      name: ' Ruby Murray',
      text: `I was searching for online classes to get help for my PTE exam. Thankfully, I explored this website. The tutors help me with engaging content, supportive guidelines, and exam resources to help me pass the exam. I truly appreciate their efforts. `,
    },

  
  ];
  const reviews2 = [
    {
      name: 'Damien',
      text: `I was looking for online classes to help with my BS studies and luckily came across this service. Their engaging lectures and focus on my specific subjects greatly enhanced my understanding and boosted my learning skills.`,
    },
    {
      name: 'Conor',
      text: `Choosing their online exam service was one of the best decisions I've made. They provide a highly helpful, customized, and dedicated service. `,
    },
    {
      name: 'Robbie',
      text: `I have used taking my classes online service countless times. They made things so easy for me while I worked and took care of my other tasks. They are reliable and affordable for online learning development.`,
    },
    {
      name: 'Rory',
      text: `I have used the Taking My Classes Online service numerous times, and they made the process so simple for me while I managed my work and other responsibilities. They are dependable and offer affordable options for online exam assistance.`,
    },
    {
      name: 'Carlos',
      text: `I'm very pleased with their online exam services and highly recommend them. The staff is incredibly accommodating and professional, and I truly value their dedication and hard work.`,
    },
    {
      name: 'George',
      text: ` An outstanding and unique online exam service! Their affordable packages were a lifesaver for me when I was struggling financially. Thanks to their budget-friendly option, I could easily access the support I needed. `,
    },
  
  ];
  const reviews3 = [
    {
      name: 'Tyron',
      text: `I found this service while searching for online classes to support my BS studies, and it turned out to be a great find. Their engaging lectures and tailored focus on my specific subjects significantly improved my understanding and enhanced my learning skills.`,
    },
    {
      name: 'Colby',
      text: `Opting for their online homework service was one of the best decisions I’ve made. They offer a highly personalized and dedicated approach that’s incredibly helpful. `,
    },
    {
      name: 'Matt',
      text: `I've relied on Taking My Classes Online service numerous times. They made juggling work and other responsibilities much easier for me. Their service is both reliable and cost-effective for online learning development.`,
    },
    {
      name: 'Trevor',
      text: `I've used the Taking My Classes Online service several times, and it has consistently simplified the process for me, allowing me to juggle my work and other responsibilities effortlessly. They're reliable and provide affordable options for online exam support.`,
    },
    {
      name: 'Francis',
      text: `I'm extremely satisfied with their online homework services and wholeheartedly recommend them. The team is exceptionally accommodating and professional, and I deeply appreciate their commitment and effort.`,
    },
    {
      name: 'Curtis',
      text: ` An exceptional online homework service! Their budget-friendly packages were a real lifesaver during a financially tough time. Thanks to their affordable options, I had access to the support I needed without breaking the bank. `,
    },
  
  ];

  const ReviewCard = ({ name, text }:{name:string,text:string}) => (
    <div className='group'>
      <div className='w-full  bg-muted/50  rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 '>
        <div className="flex items-center p-2 mt-3">
          <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
            <Image className="object-cover blur-sm" src={'/imgs/tp-rating-1.png'} alt="rating" width={44} height={64} />
          </div>
          <div className='flex-col ml-4'>
            <p className='text-[16px] font-bold'>{name}</p>
            <div><Image src={'/imgs/tp-rating.png'} width={130} height={60} alt='rating'></Image></div>
          </div>
        </div>
        <p className=' p-2 font-medium  text-sm'>{text}</p>
        <div className='border-b-2 border-muted translate-y-2 w-full'></div>
        <div className="flex items-center p-2 mt-3">
          <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
            <Image className="object-cover" src={'/imgs/taking-logo-2.png'} alt="rating" width={44} height={64} />
          </div>
          <div className='flex-col ml-4'>
            <div className='text-[16px] font-bold'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
            <div className='text-gray-500 font-medium text-sm'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}.com</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='py-10 max-w-screen-xl mx-auto'>
        <h2 className='text-center text-3xl font-extrabold my-4 '>Our Client’s Review</h2>
        <div>
          <Tabs defaultValue='1'>
            <TabsList className='flex flex-col md:flex-row'>
              <TabsTrigger value="1">Take My Exam</TabsTrigger>
              <TabsTrigger value="2">Take My GRE Exam</TabsTrigger>
              <TabsTrigger value="3">Take GMAT Online Exam</TabsTrigger>
            </TabsList>
            <TabsContent value='1'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5 '>
              {reviews.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='2'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5 '>
              {reviews2.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='3'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
              {reviews3.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} />
        ))}
              </div>

            </TabsContent>
          </Tabs>

        </div>
    </div>
  )
}

export default ReviewTabs

