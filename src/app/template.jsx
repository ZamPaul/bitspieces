'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'
import animatePageIn from '@/components/hooks/animatePageIn'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { getPageName } from '@/components/hooks/getPageName'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Template = ({children}) => {

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      lerp:0.1,
    })

    // function raf(time) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }

    // requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

  },[])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useGSAP(()=>{
    animatePageIn();
  })

  const h1ref = useRef(null)

  const pageName = getPageName();

  useLayoutEffect(()=>{
    const rect = h1ref.current.getBoundingClientRect()
    gsap.set(".h1-outer",{
      height:`${rect.height}px`
    })
    gsap.set(h1ref.current,{
      top:"100%",
    })
  })

  return (
    <> 
    <main id='main' className='main'>
        {children}
    </main>

    <div
    style={{clipPath:"polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"}} 
    id='transition-slide-in'
    className="transition-slide h-screen w-full fixed left-0 top-0 z-[3000] bg-yellow rounded-t-[15px] rounded-b-[15px] pointer-events-none">
      <div className="transition-slide-inner h-full w-full relative flex items-center justify-start pl-[3.5%] pb-[0vh]">
        <div className='h1-outer relative overflow-hidden'>
          <h1 ref={h1ref} className='flex uppercase text-black relative font-[mon] text-[5vw] mob:text-[8vw] font-[100] tracking-[0px] leading-none'>
            {pageName}
          </h1>
        </div>
        <div className="loader-wrapper absolute right-[3.5%] tab:right-[6%] mob:right-[6%] bottom-[5vh] mob:bottom-[7vh]">
          <div className="loader"></div>
        </div>
      </div>
    </div>

    <div
    style={{clipPath:"polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)"}}
    id='transition-slide-out'
    className="transition-slide h-screen w-full fixed left-0 top-0 z-[3000] bg-yellow rounded-t-[15px] rounded-b-[15px] pointer-events-none">
      <div className="transition-slide-inner h-full w-full relative flex items-center justify-start pl-[3.5%]">
      <div className="loader-wrapper absolute right-[3.5%] tab:right-[6%] mob:right-[6%] bottom-[5vh] mob:bottom-[7vh]">
          <div className="loader"></div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Template