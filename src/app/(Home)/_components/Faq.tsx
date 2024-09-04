"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import {  SwordsIcon } from 'lucide-react';


const Faq = () => {



    const [openIndex, setOpenIndex] = useState(null);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: 'Will anyone be aware that I’m using your services?', answer: 'Rest assured, your work will remain completely confidential and will not be shared with any third parties. Your personal information and data will be securely protected.' },

        { question: 'Could you help me find an expert on this subject?', answer: 'You have the option to select a subject expert for your project. If you’re unsure, we’ll assign your work to the most suitable expert for you.' },

        { question: 'Can you provide a plagiarism report along with the final document?', answer: 'Ensuring customer satisfaction is our priority. To achieve this, we thoroughly check every document for plagiarism and include the report with the final draft for our customers' },

        { question: 'How quickly can you finish my project?', answer: 'We offer urgent writing services to help meet tight deadlines. If your assignment is approaching its due date, you can rely on our subject experts to handle your project. Rest assured, the quality of your work will be top-notch.' },

        { question: 'What if I am not happy with the results?', answer: 'We guarantee better grades on your online exams or assignments, and offer unlimited revisions. If you are not satisfied with the quality of our work, we will provide a full refund.' },
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
        <div className='text-center text-3xl lg:text-5xl font-extrabold dark:text-zinc-100 text-indigo-950 '>Frequently Asked Questions
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-5'>
        <div  data-aos="zoom-in-down" className=''>
                <div  className='flex items-center justify-center sm:pb-24'>
                    <Image loading='eager' className=' rounded-2xl' src="/imgs/faq_section_1.webp" width={600} height={600} alt='about-faq-bg'></Image>
                </div>
            </div>

            <div className=''>

            {questions.map((item, index) => (
                <div  data-aos="flip-down" className="md:pt-6 pt-8 "  key={index}>
                    <div 
                        className="cursor-pointer py-6 px-4 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group bg-gradient-to-r from-yellow-600 to-indigo-700 text-white transition ease-in duration-150 delay-100 "
                        onClick={() => toggleAccordion(index) }  >
                        {item.question}
                        <SwordsIcon className='  group-hover:rotate-180 group-hover:stroke-gray-100 transition ease-in duration-200 delay-100 '/>
                    </div>
                    {openIndex === index && (
                        <div className="  py-4 px-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm bg-gradient-to-r from-yellow-600 to-indigo-900 text-white italic ">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Faq