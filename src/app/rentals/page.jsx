'use client'
import Rentalsoffer from '@/components/rentals/Rentalsoffer'
import Marquee from '@/components/Marquee/marquee'
import React from 'react'
import RentalEquipments from '@/components/rentals/RentalEquipments'
import FooterTest from '@/components/footer/footerTest'

const Rentals = () => {

  return (
    <>
    {/* <div className="rentals-back-anim relative z-[30] rounded-b-[20px] bg-black"> */}
        <Rentalsoffer/>
        {/* <RentalEquipments/> */}
    {/* </div> */}
    <div className='bg-[#F1F1F1]'>
       <Marquee/>
       <FooterTest/>
    </div>
    </>
  )
}

export default Rentals