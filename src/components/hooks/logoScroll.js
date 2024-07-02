import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

const logoScroll = () => {
  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger)

    gsap.set("header .logo-outer .logo",{
      top:"0%"
    })

    const moveUp = gsap.to("header .logo-outer .logo",{
      top:"-100%"
    })
    
    ScrollTrigger.create({
      start:"top top",
      end:"10px top",
      trigger:"#main",
      animation: moveUp,
      scrub:1,
      // markers:true,
      invalidateOnRefresh: true,
    })

  })
}

export default logoScroll
