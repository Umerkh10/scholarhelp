import React from 'react'

const PrivacyBanner = () => {
  return (
    <div className='m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
    <div className='mx-auto max-w-screen-xl'>
        <div className='py-20 px-5 md:py-44'>
    <div className='text-center font-extrabold text-5xl'>Privacy Policy</div>
    <div className='text-center pt-4 font-medium text-lg max-w-screen-md mx-auto'>We value your privacy and are committed to protecting your data. Learn more about our practices in our privacy policy.</div>
    </div>
    </div>
</div>
  )
}

export default PrivacyBanner