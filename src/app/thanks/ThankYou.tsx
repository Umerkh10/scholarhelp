"use client"
import Link from 'next/link'
import React from 'react'
import { Package2 } from 'lucide-react'

function ThankYou() {
    const name = localStorage.getItem("name")
    const number = localStorage.getItem("number")
  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] px-4 pb-10 pt-32 md:pt-2 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-violet-500  px-4 py-2 text-zinc-100">
        <CheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You!</span>
      </div>
      <h1 className="mt-6 text-xl font-medium tracking-tight sm:text-2xl">
        Thank You For Submitting 
      </h1>
      <h1 className="mt-6 text-lg font-medium  sm:text-xl">
        Please Check your Whatsapp {number}  we have sent you 40% discount offer
      </h1>
      <p className="mt-4  mx-auto">
      Thank you for being here! We’re thrilled to have you as part of our journey and appreciate your interest and support. Your visit means a lot to us, and we&apos;re dedicated to providing you with the best experience possible. Whether you&apos;re here to explore, learn, or shop, we’re always here to help and answer any questions you may have. Stay connected with us for the latest updates, special offers, and more. Once again, thank you for being a valued part of our community. We can’t wait to share exciting things with you in the future!
      </p>
      <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-4">
        <Link
          href="/order-now"
          className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[200px] text-black dark:text-zinc-100 border-[2px] border-black dark:border-white rounded-lg"
          prefetch={false}
        >
           <Package2 className='mr-2'/> Order Now
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ThankYou

function CheckIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }