"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import VideoComponent from './VideoComponent';
gsap.registerPlugin(ScrollTrigger)

const values = ["teamwork","integrity","Creativity","Commitment","Timely Delivery"]

const HomeMarquee = () => {

  let inner = useRef(null)
  let elements = useRef([])
  let direction = 1;
  let speed = 2;

  useEffect(()=>{
    if(window.innerWidth<=1024 && window.innerHeight<=800){
        speed = 1.5;
    }
  })

  useGSAP(()=>{
    // gsap.registerPlugin(ScrollTrigger)

    if(!(window.innerWidth<=576 && window.innerHeight<1000)){
        ScrollTrigger.create({
            trigger:"#main",
            start:"top top",
            end:"bottom bottom",
            invalidateOnRefresh: true,
            scrub: true,
            // markers: true,
            onUpdate: (e) => {
                direction = e.direction
            }
        })
    }
  })

  useGSAP(() => {
     
    let gap = window.innerWidth<=576 ? window.innerWidth*0.06 : window.innerWidth*0.03
    let max = elements.current[0].getBoundingClientRect().width + gap;
    let x = 0;

    const animateX = () => {
        x += direction*speed
        if(x>=max){
            x=0;
        }else if(x<= -1*max){
            x=0;
        }
        if(elements.current[0]){
            elements.current.forEach((marquee) => {
                gsap.set(marquee, {
                    x:x
                })
            })
        }
        if(inner.current){
            requestAnimationFrame(animateX)
        }
    }

    if(inner.current){
        requestAnimationFrame(animateX)
    }

  })
  
  return (
    <>
    <div className='home-marquee-wrapper relative w-full pt-[7vh] pb-[5vh] tab:pb-[2vh] tab:pt-[3vh] mob:pt-[4vh] mob:pb-[3vh] bg-black pointer-events-none select-none'>
        <div className="home-marquee border-y-[var(--bor)] border-y-[0.1px] w-full overflow-hidden bg-[#fff] rounded-[20px]">
            <div ref={inner} className="home-marquee-inner py-[7vh] tab:py-[5vh] mob:py-[6vh] w-full flex justify-center flex-shrink-0 gap-[3vw] mob:gap-[6vw]">
            {
                [...Array(3)].map((_, i) => {
                    return (
                        <div key={i} ref={ref => elements.current[i] = ref} className="home-marquee-element flex-shrink-0 flex gap-[3vw] mob:gap-[6vw]">
                            {
                                values.map( (elem, i) => {
                                    return (
                                        <div key={i} className="home-marquee-h1 flex items-center flex-shrink-0 gap-[3vw] mob:gap-[6vw]">
                                            <VideoComponent/>
                                            <h1 className='tracking-[0px] font-[100] font-[mon] uppercase text-[#121212] text-[6.5vw] leading-none mob:text-[12vw]'>
                                                {elem}
                                            </h1>
                                        </div>
                                    )
                                } )
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
    </>
    
  )
}

export default HomeMarquee
