import Image from "next/image";
import React  from "react";

const ServiceCard = ({ imageSrc, title, description, animation }:any) => {
  

  return (
    <div  data-aos={animation} className="group p-4">
      <div className="flex flex-col items-center border-[5px] border-transparent
       bg-gradient-to-t from-violet-400 to-indigo-400 dark:bg-gradient-to-b dark:from-indigo-800 dark:via-zinc-800 dark:to-violet-800 md:h-[370px] w-full rounded-lg px-4 py-5 md:scale-100 scale-90 group-hover:scale-95 md:group-hover:scale-105 group-hover:border-y-yellow-400  group-hover:shadow-xl transition-transform duration-200 ease-in">

        <div className="flex items-center justify-center bg-yellow-400 rounded-full h-24 w-24">
          <Image src={imageSrc} width={60} height={60} alt={title} />
        </div>
        <div className="flex flex-col mt-4">
          <div className="text-base sm:text-xl text-white font-semibold">{title}</div>
          <div className="text-zinc-200 font-medium lg:text-base text-xs ">{description}</div>
        </div>
      </div>
    </div>
  );
};

function Academic() {


  const services = [
    {
      imageSrc: "/imgs/webinar.png",
      title: "Online Class",
      description:
        "Stuck with extensive daily tasks of your online classes? Fret not, we are here to help you complete your online classes with perfect grades!",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/online-exam.png",
      title: "Online Exam Help",
      description:
        "Want to ace your online exams without stress? Our tutors are at your service with guaranteed best results in your online exams.",
      animation: "flip-right",
    },
    {
      imageSrc: "/imgs/online-homework.png",
      title: "Online Homework Help",
      description:
        "Online homework can be tricky and exhausting, but our reliable and affordable service makes it smooth and easy.",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/essay.png",
      title: "Essay Writing Services",
      description:
        "Want a compelling, plagiarism-free essay? Trust our credible tutors for excellent essay writing services with timely delivery.",
      animation: "flip-right",
    },

    {
      imageSrc: "/imgs/assignment.png",
      title: "Assignment Help",
      description:
        "Struggling to complete assignments correctly and on time? Our 24/7 homework aid with reliable client support is here for you.",
      animation: "flip-left",
    },
    {
        imageSrc: "/imgs/assignment.png",
        title: "Assignment Help",
        description:
          "Struggling to complete assignments correctly and on time? Our 24/7 homework aid with reliable client support is here for you.",
        animation: "flip-right",
      },
      {
        imageSrc: "/imgs/assignment.png",
        title: "Assignment Help",
        description:
          "Struggling to complete assignments correctly and on time? Our 24/7 homework aid with reliable client support is here for you.",
        animation: "flip-left",
      },
      {
        imageSrc: "/imgs/assignment.png",
        title: "Assignment Help",
        description:
          "Struggling to complete assignments correctly and on time? Our 24/7 homework aid with reliable client support is here for you.",
        animation: "flip-right",
      },
    
  ];

  return (
    <div className="mx-auto max-w-screen-xl mt-10">
      <div className="text-xl md:text-5xl text-center dark:text-zinc-100 text-violet-950 font-extrabold">
        We are your partners in Academic Success!
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 lg:mt-5">
        <button className="bg-gradient-to-r from-indigo-500  to-violet-500 dark:bg-gradient-to-r dark:from-indigo-800 dark:via-zinc-800 dark:to-violet-800 px-4 py-4 rounded-lg border-[4px] border-amber-400 md:scale-100 scale-90 hover:scale-95 md:hover:scale-105 hover:shadow-xl transition ease-in duration-200 text-white font-medium text-lg">
          Place Your Order Today
        </button>
      </div>
    </div>
  );
}

export default Academic;
