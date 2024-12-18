import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* left side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
      <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
        Your doctor is a click away. <br className='hidden sm:block'/>
        Book your appointment with us
      </p>

      <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
        <p>TELEM is among the leading telemedicine service across the globe,
        <br className='hidden sm:block' /> With an extensive list of trusted doctors </p>
      </div>
      <div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-primary text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Book appointment <FaArrowRightLong className='w-3'/></a>
      </div>
      </div>
      {/* right side */}

    <div className='md:w-1/2 relative'>
    <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src="/Images/header2.png" alt="header-image" />
      </div>
     
    </div>
  )
}

export default Header
