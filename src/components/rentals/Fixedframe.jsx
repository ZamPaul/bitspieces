"use client"
import { motion, motionValue, useMotionValue } from 'framer-motion'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import MousePosition from '../hooks/mousePosition'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// W w A a D d Q q'

const images = [
  {
    src:"./rentals/eventfurniture.webp"
  },
  {
    src:"./assets/event/event3.webp"
  },
  {
    src:"./assets/heroposter2.webp"
  },
  {
    src:"./assets/work/work4.webp"
  },
  {
    src:"./rentals/kicrockery.webp"
  },
  {
    src:"./rentals/vintgeprops.webp"
  },
  {
    src:"./assets/art/art2.webp"
  },
  {
    src:"./rentals/music.webp"
  },
]

const Fixedframe = ( {frameOpen} ) => {
  
  const mouse = MousePosition();

  const frame = useRef(null)

  useGSAP(()=>{
    gsap.to(frame.current,{
      left:mouse.x - 320/2,
      top:mouse.y - 220/2,
      ease:"back",
      duration:0.8
    })
  },[mouse])

  return (
    <motion.div
     ref={frame}
     className="fixed-frame fixed tab:hidden mob:hidden top-0 left-0 pointer-events-none z-[200] w-[320px] h-[220px] rounded-[20px]">
      
      <div className="frame-inner w-full h-full relative">
        <motion.div
        ref={frame}
        animate={frameOpen?"open":"init"}
        variants={{
          init:{
            height:"0%",
            boxShadow:"0px 35px 60px -15px #12121200",
          },
          open:{
            height:"100%",
            boxShadow:"0px 35px 60px -15px #12121240",
          }
        }}
        transition={{ease:[0.85, 0, 0.15, 1],duration:.5}}
        className="frame-slider absolute overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-[20px] flex items-center justify-center"
        >

          <div className="frame-images-wrapper relative h-[220px] w-[320px]">
            {
              images.map( (elem, i) => {
                return (
                  <img key={`img_${i+1}`} className='h-full w-full opacity-0 absolute left-0 top-0' src={elem.src} alt="" />
                )
              } )
            }
          </div>

        </motion.div>
      </div>
      
    </motion.div>
  )
}

export default Fixedframe
