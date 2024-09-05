import Image from 'next/image';
import React from 'react';



const reviews = [
  {
    name: 'Chris',
    text: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} is a reliable website for students needing academic support, offering various resources like tutoring and research assistance.`,
  },
  {
    name: 'Adam',
    text: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} made my academic life so much easier! Their team is professional, really detail oriented, responsive, and delivers excellent results.`,
  },
  {
    name: 'Emily',
    text: `They handled my online coursework and assignments with great attention to detail, saving me a lot of time and stress. I was impressed with their expertise in various subjects.`,
  },
  {
    name: 'James',
    text: `Ive had a great experience with ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. The team is professional, responsive, really helpful and truly dedicated to helping students succeed.`,
  },
  {
    name: 'David',
    text: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} has been a lifesaver! The service is reliable, and the staff is knowledgeable and supportive. They made the entire process of managing my online classes.`,
  },
  {
    name: 'Michael',
    text: `The platform is user-friendly and their customer support is top-notch.Very good team responsive they provided clear guidance and quick resolutions to any issues I faced.`,
  },
  {
    name: 'Skyler',
    text: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} offers an outstanding service. The platform is intuitive and easy to navigate, and their support team is exceptionally nice and helpful.`,
  },
  {
    name: 'Amy',
    text: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} provides a seamless experience for managing online coursework. The interface is straightforward and the support team is both friendly and efficient.`,
  },
];

const ReviewCard = ({ name, text }:{name:string,text:string}) => (
  <div className='group'>
    <div className='w-full bg-muted/50 lg:h-[275px] rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 '>
      <div className="flex items-center p-2 mt-3">
        <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
          <Image className="object-cover blur-sm" src={'/imgs/tp-rating-1.png'} alt="rating" width={44} height={64} />
        </div>
        <div className='flex-col ml-4'>
          <div className='text-[16px] font-bold'>{name}</div>
          <div><Image src={'/imgs/tp-rating.png'} width={130} height={60} alt='rating'></Image></div>
        </div>
      </div>
      <div className='p-2 font-medium text-sm'>{text}</div>
      <div className='border-b-2 border-muted translate-y-2 w-full'></div>
      <div className="flex items-center p-2 mt-3">
        <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
          <Image className="object-cover" src={'/imgs/scholarly-help-logo.png'} alt="rating" width={44} height={64} />
        </div>
        <div className='flex-col ml-4'>
          <div className='text-[16px] font-bold'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
          <div className='text-gray-500 font-medium text-sm'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}.com</div>
        </div>
      </div>
    </div>
  </div>
);

const TrustReview = () => {


  return (
    <div className='mx-auto max-w-screen-xl p-4 md:p-0 mt-10'  data-aos="zoom-in">
      <div className='font-extrabold text-xl md:text-5xl dark:text-zinc-100 text-indigo-950 text-center'>
        What Students Think of Us
      </div>
      <div className='flex justify-center items-center mt-5'>
        <Image className='-translate-y-1' src={'/imgs/trust-pilot.png'} width={40} height={60} alt='trust'></Image>
        <div className='text-lg sm:text-3xl font-bold ml-2'>TrustPilot</div>
        <Image className='ml-3' src={'/imgs/tp-rating.png'} width={130} height={60} alt='trust'></Image>
      </div>
      <div className='text-center mt-2 text-gray-500 font-medium'>
        Trusted by 1,000+ Students with a 4.7/5 Rating
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
        {reviews.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} />
        ))}
      </div>

    </div>
  );
}

export default TrustReview;
