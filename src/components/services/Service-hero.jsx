"use client";
import React from 'react'
import { Graphic, Reveal } from '../home/hero';
import Pin from '../pin/pin';

const ServiceHero = () => {
  return (
    <div className='service-hero-wrap bg-black w-full pt-[35vh] tab:pt-[30vh] flex justify-center'>
      <Pin trigger={"#main"} endTrigger={".services-gallery"} start={"top top"} end={"top top"} move={true}>
        <div className="hero-inner w-[93%]">
          <div className="intro-text w-full flex flex-col items-start">
            <h1 className='text-[5vw] mob:hidden mob:text-[8vw] font-[mon] uppercase tracking-[0px] leading-none mob:leading-[1.1em] tab:leading-[1.2em]'>
              Creative Services
            </h1>
            <div className="wrap mob:hidden w-full flex justify-start items-center gap-[2.5vw] h-[5.5em] tab:h-[6.6vw] mob:h-[2.2em]">
              <Graphic w={"40vw"} h={"70%"}/>
              <Reveal x={"-40vw"}>
                <h1 className='text-[5vw] tab:mb-[0.05em] mob:text-[8vw] font-[mon] uppercase tracking-[0px] leading-none mob:leading-[1.1em]'>
                  Bringing
                </h1>
              </Reveal>
            </div>
            <h1 className='text-[5vw] mob:hidden mob:text-[8vw] font-[mon] uppercase tracking-[0px] leading-none mob:leading-[1.1em] tab:leading-[1.2em]'>
              Your Ideas to Life
            </h1>
            {/* only on mobile */}
            <h1 className='text-[5vw] hidden mob:block mob:text-[8vw] font-[mon] uppercase tracking-[0px] mob:leading-[1.2em]'>
              Creative Services that bring Your Ideas to Life
            </h1>
          </div>
        </div>
      </Pin>
    </div>
  )
}

export default ServiceHero
