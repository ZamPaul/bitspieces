"use client"
import React, { useRef } from 'react'
import Button from '../button/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Service = ({service, href, btnText, count, key, description, img}) => {

  let text = useRef(null)

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.to(text.current,{
      opacity: 1,
    })
    ScrollTrigger.create({
      trigger:`.bar .dot:nth-child(${count+1})`,
      start:"top 80%",
      end:"top 60%",
      animation: anim,
      scrub: 1,
      // markers: true,
      invalidateOnRefresh: true,
    })
  })

  return (
    <div key={key} className='service-item py-[7vh] tab:py-[5vh] mob:py-[7vh] border-b-[1px] border-b-[var(--bor)] w-full flex mob:flex-col justify-between items-start mob:gap-[5vw]'>
      <div ref={text} className="left-title-description opacity-[0.5] flex tab:flex-col mob:flex-col tab:gap-[3vw] mob:gap-[5vw] justify-between items-start w-[70%] tab:w-[55%] mob:w-full">
        <div className="title-wrap flex gap-[10px]">
          <div className="service-count">
            <h2 className='text-[17px]'>
              0{count}.
            </h2>
          </div>
          <div className="service-title">
            <h2 className='text-[17px]'>
              {service}
            </h2>
          </div>
        </div>
        <div className="service-description text-left tab:w-full mob:w-full">
          <p className='w-[380px] tab:w-full mob:w-full text-[#fffd]'>
            {description}
          </p>
        </div>
      </div>
      {/* <div className="service-image">
        <img src={img} alt="" className='h-[12vw] w-[22vw] object-cover rounded-[15px]' />
      </div> */}
      <div className="service-btn flex">
        <Button value={btnText} href={href} keyPass={"Service_Btn"}/>
      </div>
    </div>
  )
}

export default Service