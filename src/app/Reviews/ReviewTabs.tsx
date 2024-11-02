import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './FormTab'
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

function ReviewTabs() {
  const reviews = [
    {
      name: 'Rebecca Steve',
      text: `GRE exams are one of the toughest and can change the course of one’s education journey. I was struggling to grasp the concepts but then I came across these tutors. They made the whole learning journey fun and exciting. I didn't just manage to clear my exam but I did so with flying colours.`,
      rating: 4.5,
    },
    {
      name: 'Robert Harry',
      text: `I usually study late at night as I have a day job. The problem for me is that I couldn't clear my queries late at night so I needed someone who would be there 24/7. This website solved my problems as their tutors are available round the clock. Now, with my concepts clear, I am ready for my LSAT exams.`,
      rating: 4.5,
    },
    {
      name: 'Noah Solomon',
      text: `Not only are they efficient, they are affordable too. I prepared for my exams within a tight budget and there was no compromise on quality at all. Highly recommended.`,
      rating: 4.5,
    },
    {
      name: 'Sarah Gough',
      text: `I passed my GMAT exams with exceptional grades. This was not a possibility before but when I availed the services of this website, I knew I was in safe hands. Thanks a ton!`,
      rating: 4,
    },
    {
      name: 'Darren Mitchell',
      text: `If I was to give this website a nickname, it would be exam-busters! Superduper expertise over nearly all subjects. I say this out loud that if you want to prepare for your exams then contact these guys!`,
      rating: 5,
    },
    {
      name: 'Maria Warren',
      text: `No need to take physical classes. These folks help you with your exam online. Comfort and excellence at their finest.`,
      rating: 4.5,
    },

  
  ];
  const reviews2 = [
    {
      name: 'Damien',
      text: `I was looking for online classes to help with my BS studies and luckily came across this service. Their engaging lectures and focus on my specific subjects greatly enhanced my understanding and boosted my learning skills.`,
      rating: 4.5,
    },
    {
      name: 'Conor',
      text: `Choosing their online exam service was one of the best decisions I've made. They provide a highly helpful, customized, and dedicated service. `,
      rating: 4.5,
    },
    {
      name: 'Robbie',
      text: `I have used taking my classes online service countless times. They made things so easy for me while I worked and took care of my other tasks. They are reliable and affordable for online learning development.`,
      rating: 4.5,
    },
    {
      name: 'Rory',
      text: `I have used the Taking My Classes Online service numerous times, and they made the process so simple for me while I managed my work and other responsibilities. They are dependable and offer affordable options for online exam assistance.`,
      rating: 4.5,
    },
    {
      name: 'Carlos',
      text: `I'm very pleased with their online exam services and highly recommend them. The staff is incredibly accommodating and professional, and I truly value their dedication and hard work.`,
      rating: 4.5,
    },
    {
      name: 'George',
      text: ` An outstanding and unique online exam service! Their affordable packages were a lifesaver for me when I was struggling financially. Thanks to their budget-friendly option, I could easily access the support I needed. `,
      rating: 4.5,
    },
  
  ];
  const reviews3 = [
    {
      name: 'Tyron',
      text: `I found this service while searching for online classes to support my BS studies, and it turned out to be a great find. Their engaging lectures and tailored focus on my specific subjects significantly improved my understanding and enhanced my learning skills.`,
      rating: 4.5,
    },
    {
      name: 'Colby',
      text: `Opting for their online homework service was one of the best decisions I’ve made. They offer a highly personalized and dedicated approach that’s incredibly helpful. `,
      rating: 4.5,
    },
    {
      name: 'Matt',
      text: `I've relied on Taking My Classes Online service numerous times. They made juggling work and other responsibilities much easier for me. Their service is both reliable and cost-effective for online learning development.`,
      rating: 4.5,
    },
    {
      name: 'Trevor',
      text: `I've used the Taking My Classes Online service several times, and it has consistently simplified the process for me, allowing me to juggle my work and other responsibilities effortlessly. They're reliable and provide affordable options for online exam support.`,
      rating: 4.5,
    },
    {
      name: 'Francis',
      text: `I'm extremely satisfied with their online homework services and wholeheartedly recommend them. The team is exceptionally accommodating and professional, and I deeply appreciate their commitment and effort.`,
      rating: 4.5,
    },
    {
      name: 'Curtis',
      text: ` An exceptional online homework service! Their budget-friendly packages were a real lifesaver during a financially tough time. Thanks to their affordable options, I had access to the support I needed without breaking the bank. `,
      rating: 4.5,
    },
  
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} fill="currentColor" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" fill="currentColor" />);
    }
  
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty-${i}`} />);
    }
  
    return stars;
  };

  const ReviewCard = ({ name, text,rating }:{name:string,text:string,rating:number}) => (
    <div className='group'>
      <div className='w-full  bg-muted/50  rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 '>
        <div className="flex items-center p-2 mt-3">
          <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
            <Image className="object-cover blur-sm" src={'/imgs/tp-rating-1.png'} alt="rating" width={44} height={64} />
          </div>
          <div className='flex-col ml-4'>
            <p className='text-[16px] font-bold'>{name}</p>
            <div className='flex items-center mt-1 text-yellow-500 fill-amber-400'>{renderStars(rating)}</div>
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
          <ReviewCard key={index} name={review.name} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='2'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5 '>
              {reviews2.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='3'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
              {reviews3.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
          </Tabs>

        </div>
    </div>
  )
}

export default ReviewTabs

