"use client"
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ProcessGallery from './ProcessGallery'

const Process2 = () => {
  return (
    <div className='about-process-section bg-black w-full rounded-t-[20px] flex justify-center pt-[18vh] tab:pt-[5vh] mob:pt-[5vh] pb-[18vh] tab:pb-[8vh] mob:pb-[7vh]'>
      <div className="about-process-inner relative w-[93%]">
        <TopText/>
        <ProcessGallery/>
      </div>
    </div>
  )
}

const TopText = () => {
  return (
    <div className="approach-title flex justify-start pb-[5vh] tab:pb-[4.5vh] mob:pb-[4vh]">
    <h1 className='text-[#fff] font-[mon] uppercase leading-[1.3em] tracking-[1px] text-[2.6vw] mob:text-[7vw]'>
      Our Step-by-Step Approach
    </h1>
    </div>
     // <div className="services-top-text pb-[7vh] w-full flex flex-col justify-start">
    //   <div className="services-text-wrap flex items-center justify-start"> 
    //     <p className='text-[2.6vw] font-[100] font-[mon] uppercase tracking-[1px] tab:text-[4vw] mob:text-[7vw] leading-[1.55em]'>
    //       providing <span className='rounded-full border-[0px] text-[#121212] bg-yellow border-[#fff] px-[20px] py-[0px] font-[mon] tracking-[1px] tab:text-[4vw] mob:text-[7vw] leading-[1.55em]'>Top Tier</span> Marketing
    //     </p>
    //   </div>
    //   <div className="services-text-wrap flex items-center justify-start gap-[1vw]">
    //     <p className='text-[2.6vw] font-[100] font-[mon] uppercase tracking-[1px] tab:text-[4vw] mob:text-[7vw] leading-[1.55em]'>
    //       services for your brand
    //     </p>
    //   </div>
    // </div>
  )
}


export default Process2
