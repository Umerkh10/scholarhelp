import Image from "next/image";
import React  from "react";
import { CtaButtons } from "./HeroSection";

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
      title: "Take My Exam",
      description:
        "Wondering to get expert guidance to cover the whole syllabus? Say no more! We are here to help you in taking online classes as well as to support you in achieving desirable results",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/online-exam.png",
      title: "Take My GRE Exam",
      description:"Are you having trouble preparing for the GRE exams? Take a look at our platform and get sufficient help from our experts to ace your GRE exam.",
      animation: "flip-right",
    },
    {
      imageSrc: "/imgs/online-homework.png",
      title: "Take GMAT Online Exam",
      description:
        "Passing the GMAT online exam could be challenging, but our service will help you to lead you to academic success.",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/essay.png",
      title: "Take LSAT Online Exam",
      description:"It is hard to prepare for LSAT exams without any guidelines. However, Our experts are here to help you get the LSAT exam with achievable results.",
      animation: "flip-right",
    },


    
  ];

  return (
    <div className="mx-auto max-w-screen-xl mt-10">
      <h2 className="text-2xl md:text-5xl text-center dark:text-zinc-100 text-violet-950 font-extrabold">
        We are your partners in Academic Success!
      </h2>
      <h3 className="py-3 px-4 text-xl md:text-3xl text-center dark:text-zinc-100 text-violet-950 font-bold">
      Take our help and get reliable support in academic learning
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 lg:mt-10 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
     <div className="flex justify-center mt-4 items-center">
      <CtaButtons/>
      </div>
    </div>
  );
}

export default Academic;
