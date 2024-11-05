import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './FormTab'
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

function ReviewTabs() {
  const reviews = [
    {
      name: 'Rebecca Steve',
      text: `Exams are one of the toughest and can change the course of one’s education journey. I was struggling to grasp the concepts but then I came across these tutors. They made the whole learning journey fun and exciting. I didn't just manage to clear my exam but I did so with flying colours. `,
      rating: 4.5,
    },
    {
      name: 'Robert Harry',
      text: `I usually study late at night as I have a day job. The problem for me is that I couldn't clear my queries late at night so I needed someone who would be there 24/7. This website solved my problems as their tutors are available round the clock. Now, with my concepts clear, I am ready for my exams.`,
      rating: 4.5,
    },
    {
      name: 'Noah Solomon',
      text: `Not only are they efficient, they are affordable too. I prepared for my exams within a tight budget and there was no compromise on quality at all. Highly recommended`,
      rating: 4.5,
    },
    {
      name: 'Sarah Gough',
      text: `I passed my exams with exceptional grades. This was not a possibility before but when I availed the services of this website, I knew I was in safe hands. Thanks a ton!`,
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
      name: 'Emily Johnson',
      text: `I couldn’t have asked for a better GRE prep experience than the one I had with taking my classes online. They offered a great mix of live classes, recorded lectures, and interactive quizzes. The instructors really took their time to break down complex topics in quant and verbal reasoning, making them easy to understand. I found the vocabulary flashcards and personalized practice plans super helpful, especially for staying on track. The practice exams were also really close to the actual GRE format, which made test day feel a lot less intimidating. I ended up with a score I’m really proud of—highly recommend this service!`,
      rating: 4.5,
    },
    {
      name: 'Noah Davis',
      text: `The GRE prep at taking my classes online was exactly what I needed to boost my score! I was assigned a personal coach who created a customized study schedule just for me, which really helped me stay organized. The adaptive practice questions were amazing because they focused on my weak areas and helped me improve faster. They also have an extensive library of practice exams and an essay grading service, which was perfect for AWA prep. With all the support and feedback, my score improved by over 10 points in just two months. I’d recommend this service to anyone serious about achieving their target GRE score! `,
      rating: 4.5,
    },
    {
      name: 'Amelia Moore',
      text: `Taking my classes online provided everything I needed to succeed. The live classes were in-depth, and the instructors used an interactive whiteboard, so I could ask questions and get answers in real time. They also had detailed study guides, strategy sessions, and daily practice questions, which kept me constantly improving. The diagnostic test at the beginning helped pinpoint my weak areas, and the weekly progress tracking kept me motivated. Their app was a lifesaver too—I could study on the go! I’ve tried other prep courses, but taking my classes online made the biggest difference. So worth it!`,
      rating: 4.5,
    },
    {
      name: 'Michael Anderson',
      text: `With my hectic work schedule, I needed a GRE service that offered flexibility without sacrificing quality, and takingmyclassesonline.com delivered. They had evening and weekend classes, as well as self-paced video lectures I could watch anytime. The adaptive practice sets were perfect for targeting my weak areas, and I loved the test-taking strategy sessions—they really helped me manage time on the actual exam. Plus, their on-demand Q&A with tutors was super useful when I got stuck. Thanks to their guidance, I raised my score significantly.`,
      rating: 4.5,
    },
    {
      name: 'Scarlett Harris',
      text: `I was really anxious about the GRE, especially the verbal section, but taking my classes online changed everything for me. They provided expert-led classes, and flashcards that made learning new words easy and fun. The essay feedback was spot-on and helped me improve my AWA score too. I really liked the GRE test simulator because it felt just like the real test. It helped me feel confident on the day of the exam. Thanks to the clear lessons and personal coaching, I improved my score by 12 points. I highly recommend taking my classes online for anyone looking to get a top score!`,
      rating: 4.5,
    },
    {
      name: 'Joseph Clark',
      text: `I had a fantastic experience with taking my classes online! The instructors were really helpful and made tough topics easy to understand. They offered great study materials, like practice exams and flashcards, which helped me feel prepared. I felt confident on test day, and I ended up scoring much higher than I expected. I highly recommend this service! `,
      rating: 5,
    },
  
  ];
  const reviews3 = [
    {
      name: 'Lyla peter',
      text: `I was feeling very nervous and anxious because my LSAT test was looming. However, somehow, I landed on their website and ordered their LSAT services. Trust me, They exceeded my expectations. They handled my exam well and completed it on time, making me very happy.`,
      rating: 5,
    },
    {
      name: 'Jemma Maizie',
      text: `This is the first time that I have had online LSAT exam help. I didn't have much faith in online services before, but these guys completed my LSAT exam and organized the online exam very well. They completed the task ahead of schedule. I would suggest you all try their services too. `,
      rating: 4.5,
    },
    {
      name: 'Harper Jack',
      text: `I had an online logical reasoning test, which was quite difficult; I understood some things, and Takingmyclassesonline.com helped everything else. My experience is amazing; their LSAT exam service is very good.`,
      rating: 5,
    },
    {
      name: 'Jaxon Parker',
      text: `Their support is truly amazing. They listened to me carefully, understood all my requirements in detail and implemented them. They finished my LSAT exam 10 minutes before the scheduled time. If you are a student and want to get into a good school, I would recommend that you take their LSAT exam help services. Their team is very professional, and because of them, I have got good marks.`,
      rating: 4.5,
    },
    {
      name: 'Cooper Easton',
      text: `I wanted to get admission to law school but wasn’t Prepared for the LSAT test. When I found out about Takingmyclassesonline.com. I immediately placed an order. Their LSAT exam helper gave me a lot of confidence that I would pass the test, and indeed, I did. With their help, I got excellent grades on the LSAT test.`,
      rating: 4.5,
    },
    {
      name: 'Hailee Jenny',
      text: ` I was not sure I would ever pass the LSAT exam. I was very worried, but when I ordered their LSAT test help service and got full marks, I was very satisfied with their excellent service. Their team is truly amazing, and I would recommend that everyone hire them. `,
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
            <Image className="object-cover" src={'/assets/weblogo.png'} alt="rating" width={44} height={64} />
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
              <TabsTrigger value="3">Take LSAT Exam Online</TabsTrigger>
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

