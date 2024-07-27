'use client'
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import animatePageIn from '@/components/hooks/animatePageIn'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { getPageName } from '@/components/hooks/getPageName'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import Loader from '@/components/Loader/Loader'
import { LoadContext } from '@/components/LoadContext/LoadContext'

const Template = ({children}) => {

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })

  const { firstLoad, setFirstLoad, heroGraphicDelay, setHeroGraphicDelay } = useContext(LoadContext)

  useLayoutEffect(()=>{
    if(pathname!=="/"){
      setFirstLoad(false)
      setHeroGraphicDelay(1.2)
    }
  },[])

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

    // const lenis = new Lenis({
    //   lerp:0.1
    // })

    // function raf(time) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }

    // requestAnimationFrame(raf)

    // lenis.on('scroll', ScrollTrigger.update)

    // gsap.ticker.add((time)=>{
    //   lenis.raf(time * 1000)
    // })

    // gsap.ticker.lagSmoothing(0)

  },[])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useGSAP(()=>{
    animatePageIn();
  })

  const pathname = usePathname()

  const h1ref = useRef(null)

  const pageName = getPageName();

  return (
    <> 
    <ReactLenis root options={{lerp:0.12}}>
      <main id='main' className='main'>
        {children}
      </main>
    </ReactLenis>

    <div
    style={{clipPath:"polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"}} 
    id='transition-slide-in'
    className="transition-slide h-screen w-full fixed left-0 top-0 z-[3000] bg-yellow rounded-t-[15px] rounded-b-[15px] pointer-events-none">
      <div className="transition-slide-inner h-full w-full relative flex items-center justify-start pl-[3.5%] pb-[0vh]">
        <div className='h1-outer relative overflow-hidden'>
          <div className="h1-back opacity-[0]">
            <h1 ref={h1ref} className='flex uppercase text-black relative font-[mon] text-[5vw] mob:text-[8vw] font-[100] tracking-[0px] leading-none'>
                  {pageName}
            </h1> 
          </div>
          <div className="h1-front absolute top-[100%] left-0">
            <h1 ref={h1ref} className='flex uppercase text-black relative font-[mon] text-[5vw] mob:text-[8vw] font-[100] tracking-[0px] leading-none'>
                {pageName}
            </h1>    
          </div>
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
    {firstLoad && <Loader/>}
    </>
  )
}

export default Template