"use client"
import { useGSAP } from '@gsap/react'
import bezier from 'bezier-easing'
import gsap from 'gsap'
import React from 'react'

const animatePageIn = () => {

    const ese = bezier(0.76, 0, 0.24, 1);

    const slideIn = document.getElementById("transition-slide-in")
    
    const tl = gsap.timeline()
    
    tl.set(slideIn,{ clipPath:"polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)" })
    .to("#transition-slide-in .transition-slide-inner .h1-outer .h1-front",{
        top:"0%",
        ease:"power1.inOut",
        duration:.4,
    })
    .to(slideIn,{
        clipPath:"polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)",
        delay:0.2,
        ease:ese,
        duration:.7,
    })
}

export default animatePageIn
