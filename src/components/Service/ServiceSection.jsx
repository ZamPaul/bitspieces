import React, { useEffect, useState } from 'react'
import ServiceGallery from './ServiceGallery'
import gsap from 'gsap'

const ServiceSection = () => {

  const [selected, setSelected] = useState(1)

  useEffect(()=>{
      gsap.to(`.service-headings-wrapper .service-heading .service-line .line-inner`,{
        width:"3vw"
      })
      gsap.to(`.service-headings-wrapper .service-heading:nth-child(${selected}) .service-line .line-inner`,{
        width:"7vw"
      })
  },[selected])

  return (
    <div className="service-section w-full flex justify-center py-[12vh]">
      <div className="service-inner-section w-[93%] flex flex-col gap-[0vh] justify-center items-center">
        <TopText/>
        <ServiceGallery selected={selected} setSelected={setSelected}/>
      </div>
    </div>
  )
}

const TopText = () => {
  return (
    <div className="services-top-text pb-[6vh] mb-[7vh] border-b-[0.1px] border-b-[var(--bor)] w-full flex flex-col justify-start">
      <div className="services-text-wrap flex items-center justify-start"> 
        <p className='text-[2.6vw] font-[100] font-[mon] uppercase tracking-[1px] tab:text-[3.5vw] mob:text-[6vw] leading-[1.55em] tab:leading-[1.3em]'>
          providing <span className='rounded-full border-[0px] text-[#121212] bg-yellow border-[#fff] px-[20px] py-[0px] font-[mon] tracking-[1px] tab:text-[3.5vw] mob:text-[6vw] leading-[1.55em]'>Top Tier</span> Marketing
        </p>
      </div>
      <div className="services-text-wrap flex items-center justify-start gap-[1vw]">
        <p className='text-[2.6vw] font-[100] font-[mon] uppercase tracking-[1px] tab:text-[3.5vw] mob:text-[6vw] leading-[1.55em] tab:leading-[1.3em]'>
          services for your brand
        </p>
      </div>
    </div>
  )
}

export default ServiceSection
