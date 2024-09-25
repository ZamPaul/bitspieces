"use client"
import React, { useRef } from 'react'
import Button from '../button/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ProcessItem = ({approach, count, key, description}) => {

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
    <div key={key} className='process-item py-[9vh] tab:py-[4.5vh] mob:py-[7vh] border-b-[1px] border-b-[var(--bor)] w-full flex mob:flex-col justify-between items-start mob:gap-[5vw]'>
      <div ref={text} className="title-description-wrapper opacity-[0.5] flex tab:flex-col mob:flex-col tab:gap-[1.5vw] mob:gap-[5vw] justify-between items-start w-[70%] tab:w-[90%] mob:w-full">
        <div className="process-title-wrap flex gap-[10px]">
          <div className="process-count">
            <h2 className='text-[1.8vw] tab:text-[2.5vw] mob:text-[6vw]'>
              0{count}.
            </h2>
          </div>
          <div className="process-title">
            <h2 className='text-[1.8vw] tab:text-[2.5vw] mob:text-[6vw]'>
              {approach}
            </h2>
          </div>
        </div>
        <div className="approach-description text-left tab:w-full mob:w-full">
          <p className='w-[380px] tab:w-full mob:w-full text-[#fffd]'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProcessItem