import { Facebook, Instagram, LinkedinIcon, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



const Footer = () => {

  return (
    <div className=''>
        <div  className='bg-gradient-to-b from-blue-200 via-violet-200 to-zinc-100 dark:bg-gradient-to-b dark:from-purple-900 dark:via-indigo-900 dark:to-zinc-950 grid lg:grid-cols-6 grid-cols-1 p-5 container  '>
          <div className=' col-span-2 p-4'>
            <div className='font-bold md:text-xl text-lg  '>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
            <div className='font-medium mt-4 md:text-base text-sm'>{process.env.NEXT_PUBLIC_WEBSITE_NAME} Help delivers academic writing services. Our team of qualified subject experts can help you with your challenging online classes, homework, assignments, quizzes, and exams</div>

          </div>
          <div className='p-4'>
            <div className='font-bold text-lg md:text-xl'>Explore</div>
            <ul className='md:mt-3 mt-1  '>
              <li className='font-medium  mt-1 md:text-base text-sm dark:hover:text-gray-100  hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/"} >Home</Link> </li>
              <li className='font-medium  mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"about"} >About Us</Link> </li>
              <li className='font-medium  mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/contact"} >Contact Us </Link> </li>            
            </ul>
          </div>

          <div className='p-4'>
            <div className='font-bold text-lg md:text-xl'>Services</div>
            <ul className='md:mt-3 mt-1  '>
              <li className='font-medium   mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Online Class</Link> </li>
              <li className='font-medium   mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Online Exam</Link> </li>
              <li className='font-medium   mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Online Homework</Link> </li>
              <li className='font-medium   mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Online Assignment</Link> </li>
              <li className='font-medium   mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"#"} >Essay Writing</Link> </li>
            
            </ul>
          </div>

          
          <div className='p-4'>
            <div className='font-bold text-lg md:text-xl+'>Legal Info</div>
            <ul className='md:mt-3 mt-1 '>
              <li className='font-medium   mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/terms"} >Terms & Conditions</Link> </li>
              <li className='font-medium   mt-1 md:text-base text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/privacy"} >Privacy Policy</Link> </li>
          
            
            </ul>
          </div>

          <div className='p-4'>
            <div className='font-bold md:text-xl text-lg'>Contact Info</div>
            <div className="flex items-center md:mt-4 mt-2 text-indigo-7900"> 
            <Phone className="stroke-indigo-700 fill-indigo-700 font-medium mr-2  mt-1 md:text-base text-sm"/> 1-716-708-1869 </div>
            <div className='flex items-center gap-3 mt-2 text-muted-foreground'>
              <Instagram className=' mt-1 md:text-base text-sm dark:hover:text-white transition ease-in duration-200 delay-150' />
              <Facebook className=' mt-1 md:text-base text-sm dark:hover:text-white transition ease-in duration-200 delay-150'/>
              <LinkedinIcon className=' mt-1 md:text-base text-sm dark:hover:text-white transition ease-in duration-200 delay-150'/>
            </div>
            <div className='flex items-center mt-2'>
              <Image className='m-1' src={'/imgs/americanExpressIcon.webp'} width={30} height={30} alt='american'></Image>
              <Image className='m-1' src={'/imgs/masterCardIcon.webp'} width={30} height={30} alt='master'></Image>
              <Image className='m-1' src={'/imgs/payPal.webp'} width={30} height={30} alt='paypal'></Image>
              <Image className='m-1' src={'/imgs/visa.webp'} width={30} height={30} alt='visa'></Image>
            </div>
          </div>

        </div>
        <div className=' container py-4 bg-zinc-900 text-center text-zinc-200  mt-1 md:text-base text-sm '>Copyrights © 2024 All Rights Reserved by {process.env.NEXT_PUBLIC_WEBSITE_NAME}
        </div>
      </div>
  
  )
}

export default Footer