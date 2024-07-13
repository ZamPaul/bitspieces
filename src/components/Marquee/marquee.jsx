"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const services = ['Art department', 'rentals', 'event management', 'advertising']

const Marquee = () => {

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
    gsap.registerPlugin(ScrollTrigger)

    if(!(window.innerWidth<=576 && window.innerHeight<1000)){
        ScrollTrigger.create({
            trigger:"#main",
            start:"top top",
            end:"150% bottom",
            invalidateOnRefresh: true,
            // scrub: true,
            // markers: true,
            onUpdate: (e) => {
                direction = e.direction
            }
        })
    }
  })

  useGSAP(() => {

    let max = elements.current[0].getBoundingClientRect().width + window.innerWidth*0.02;
    let x = 0;

    const anim = () => {
        x += direction*speed;
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
            requestAnimationFrame(anim)
        }
    }

    if(inner.current){
        requestAnimationFrame(anim)
    }

  })
  
  return (
    <>
    <div className='marquee-wrapper overflow-hidden relative shadow-[0_35px_60px_0px_rgba(0,0,0,0.3)] z-[25] w-full mt-[-6vh] tab:mt-[-5vh] pt-[12vh] tab:pt-[10vh] pb-[6vh] tab:pb-[5vh] bg-yellow rounded-b-[20px] pointer-events-none'>
        <div ref={inner} className="marquee-inner w-full flex justify-center flex-shrink-0 gap-[2vw]">
            {
                [...Array(4)].map((_, i) => {
                    return (
                        <div key={i} ref={ref => elements.current[i] = ref} className="marquee-element flex-shrink-0 flex gap-[2vw]">
                            {
                                services.map( (elem, i) => {
                                    return (
                                        <div key={i} className="service-h1 flex items-center gap-[2vw] flex-shrink-0">
                                            <h1 className='tracking-[0px] uppercase font-[mon] text-black text-[6vw] mob:text-[12vw]'>
                                                {elem}
                                            </h1>
                                            <h1 className='tracking-[0px] uppercase font-[mon] text-black text-[6vw] mob:text-[12vw]'>
                                                -
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
    </>
    
  )
}

export default Marquee
