'use client'
import Rentalsoffer from '@/components/rentals/Rentalsoffer'
import Marquee from '@/components/home/marquee'
import React from 'react'
import RentalEquipments from '@/components/rentals/RentalEquipments'
import FooterTest from '@/components/footer/footerTest'

// W w A a D d Q q'

const Rentals = () => {

  return (
    <>
    <div className="rentals-back-anim relative z-[30] rounded-b-[20px] bg-white">
        <Rentalsoffer/>
        <RentalEquipments/>
    </div>
    <div className='bg-[#F1F1F1]'>
       {/* <Marquee/> */}
       {/* <FooterTest/> */}
    </div>
    </>
  )
}

export default Rentals