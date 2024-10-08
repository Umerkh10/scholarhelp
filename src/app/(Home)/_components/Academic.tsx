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
      title: "Take My Exam",
      description:
        "Overwhelmed with the daily tasks of your online courses? Dont worry! We are here to help you ace your online classes and secure top grades effortlessly!",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/online-exam.png",
      title: "Take My GRE Exam",
      description:"Looking to excel in your GRE exam without the hassle? Our expert tutors are here to help, ensuring top results in your GRE exam",
      animation: "flip-right",
    },
    {
      imageSrc: "/imgs/online-homework.png",
      title: "Take GMAT Online Exam",
      description:
        "Taking the GMAT online can be challenging and tiring, but our dependable and affordable service ensures a smooth and stress-free experience.",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/essay.png",
      title: "Take LSAT Online Exam",
      description:"Looking for a reliable way to ace your LSAT online exam? Trust our expert tutors for top notch assistance and timely results",
      animation: "flip-right",
    },


    
  ];

  return (
    <div className="mx-auto max-w-screen-xl mt-10">
      <div className="text-xl md:text-5xl text-center dark:text-zinc-100 text-violet-950 font-extrabold">
        We are your partners in Academic Success!
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 lg:mt-10 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

    </div>
  );
}

export default Academic;
