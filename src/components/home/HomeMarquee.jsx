import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const imgs = ["./vehicle_desert_shoot.jpg","./desert_bonfire.jpg","./crew.jpg"]

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
    gsap.registerPlugin(ScrollTrigger)

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

    let max = elements.current[0].getBoundingClientRect().width + window.innerWidth*0.03;
    let x = 0;

    const anim = () => {
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
            requestAnimationFrame(anim)
        }
    }

    if(inner.current){
        requestAnimationFrame(anim)
    }

  })
  
  return (
    <>
    <div className='home-marquee-wrapper overflow-hidden relative w-full pt-[7vh] pb-[5vh] tab:pb-[2vh] tab:pt-[3vh] mob:pt-[4vh] mob:pb-[3vh] bg-black pointer-events-none select-none'>
        <div ref={inner} className="home-marquee-inner py-[5vh] mob:py-[4vh] bg-[#fff] border-y-[1px] border-y-[var(--bor)] w-full flex justify-center flex-shrink-0 gap-[3vw]">
            {
                [...Array(3)].map((_, i) => {
                    return (
                        <div key={i} ref={ref => elements.current[i] = ref} className="home-marquee-element flex-shrink-0 flex gap-[3vw]">
                            {
                                imgs.map( (elem, i) => {
                                    return (
                                        <div key={i} className="home-marquee-h1 flex items-center flex-shrink-0 gap-[3vw]">
                                            <div>
                                                <img src={elem} alt="" className='object-cover w-[22vw] tab:w-[25vw] mob:w-[47vw] h-[11vw] tab:h-[13vw] mob:h-[27vw] rounded-[100px]' />
                                            </div>
                                            <h1 className='tracking-[0px] font-[100] uppercase font-[mon] text-[#121212] text-[6vw] leading-none mob:text-[12vw]'>
                                                Bits & Pieces
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

export default HomeMarquee
