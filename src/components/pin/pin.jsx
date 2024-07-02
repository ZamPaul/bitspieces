import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import Getdimensions from '../getdimensions/getdimensions'

const Pin = ({children, start, end, trigger, endTrigger}) => {

  const ref = useRef(null)
  const moveRef = useRef(null)

  const dimensions = Getdimensions();

  useGSAP(()=>{
    
    gsap.registerPlugin(ScrollTrigger)

    if(dimensions.w>=1024 && dimensions.h<=1000){

      const moveToTop = gsap.to(moveRef.current,{
        y:"-10vh",
      })

      ScrollTrigger.create({
        trigger:trigger,
        start:start,
        endTrigger:endTrigger,
        end:end,
        // markers:true,
        pin:ref.current,
        pinnedContainer: ref.current,
        scrub:true,
        invalidateOnRefresh:true
      })

      ScrollTrigger.create({
        trigger:trigger,
        start:start,
        endTrigger:endTrigger,
        end:"10% top",
        // markers:true,
        animation: moveToTop,
        scrub:1,
        invalidateOnRefresh:true
      })
    }   

  },[dimensions])
  
  return (
    <div ref={ref} className='pin-element w-full'>
      <div ref={moveRef} className="anim-element w-full flex justify-center">
        {children}
      </div>
    </div>
  )
}

export default Pin
