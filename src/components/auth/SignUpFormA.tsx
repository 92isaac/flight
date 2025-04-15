// import { logo_white } from '@/assets/images'
// import Image from 'next/image'
import React from 'react'

const SignUpFormA = () => {
  return (
    <div className="flex-1 relative flex flex-col sign-up bg-[#30433E] text-white h-full">
        <div className="p-16">
          {/* <Image src={logo_white} alt="logo" className="" /> */}
          <div className="absolute bottom-10">
            <h1 className="font-[700] text-[4rem] font-montserrat leading-[77px] ">
             Catch Flights
             {/* ✈️ */}
            {/* , Not FOMO */}
            </h1>
            <h1 className="font-[700] text-[4rem] font-montserrat leading-[77px] ">
            Book with confidence. 
            </h1>
            <h1 className="font-[700] text-[4rem] font-montserrat leading-[77px] ">
            Travel for less.
            </h1>
            {/* <h1 className="font-[700] text-[4rem] font-montserrat leading-[77px] ">
            and take off on your next adventure — all in one place.
            </h1> */}
          </div>
        </div>
      </div>
  )
}

export default SignUpFormA
