import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const reviews = [
  {
    name: 'Liam',
    text: `I was searching for online classes to get help for my BS studies. Thankfully, I explored this service. They delivered highly engaged lectures regarding my subjects, and they developed my learning skills. I greatly appreciated their tasks.`,
  },
  {
    name: 'James',
    text: `Joining their online service was the best decision of mine. Really helpful service. They are customized and committed to their work. `,
  },
  {
    name: 'Amelia',
    text: `I have used taking my classes online service countless times. They made things so easy for me while I worked and took care of my other tasks. They are reliable and affordable for online learning development.`,
  },
  {
    name: 'Charlotte',
    text: `It is the best online tutoring service I have ever found, and I am so thankful that they are helping me with my classes. Really appreciate your efforts and your work.`,
  },
  {
    name: 'Oliver',
    text: `I am really satisfied with their online classes and highly recommend them. The staff is very accommodating and professional, and I really appreciate their efforts.`,
  },
  {
    name: 'Noah',
    text: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} is an amazing and exclusive online class service. They offer a very affordable package. I was struggling financially, but their cheap package helped me to utilize online writing services. I would highly recommend them`,
  },

];

const ReviewCard = ({ name, text }:{name:string,text:string}) => (
  <div className='group'>
    <div className='w-full bg-muted/50  rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 '>
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
          <Image className="object-cover" src={'/imgs/taking-logo-2.png'} alt="rating" width={44} height={64} />
        </div>
        <div className='flex-col ml-4'>
          <div className='text-[16px] font-bold'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
          <Link href={'/'}>
          <div className='text-gray-500 font-medium text-sm'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}.com</div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const TrustReview = () => {


  return (
    <div className='mx-auto max-w-screen-xl p-4 md:p-0 mt-10'  data-aos="zoom-in">
      <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 text-center'>
      What Our Satisfied Customers Say About Us
      </h2>


      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
        {reviews.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} />
        ))}
      </div>

      <div className='flex justify-center items-center'>
         <div className='py-3 px-5 bg-gradient-to-r from-violet-600 to bg-indigo-600 text-zinc-100 hover:scale-105 transition ease-in duration-200 delay-200 rounded-lg shadow-xl'><Link href='/Reviews'>More Reviews </Link></div>
      </div>

    </div>
  );
}

export default TrustReview;
