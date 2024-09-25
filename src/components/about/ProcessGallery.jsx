"use client"
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProcessItem from './ProcessItem'

let steps = [
    {
        title:"Recieving the project brief",
        desc:"Prior to undertaking any project, we carefully review information to understand the client’s main objective.",
    },
    {
        title:"Brainstorming",
        desc:"Our meticulous and creative process starts at this stage where we prove our unlimited creativity.",
    },
    {
        title:"Plan & Design",
        desc:"We design the visualization of our compiled thoughts and start our strategic plan aiming to achieve the ultimate objective.",
    },
    {
        title:"Approval & Execution",
        desc:"Upon green light of the client, we see to it that all the key metrics and components are executed with high standard and professional ethics.",
    },
    {
        title:"Client Feedback",
        desc:"We welcome constructive feedback from our client in order for us to evolve and raise the bar higher for every project.",
    }
]

const ProcessGallery = () => {
  const bar = useRef(null)
  const gallery = useRef(null)
  const dotRefs = useRef([])

  useLayoutEffect(()=>{
    gsap.set(bar.current,{
      height:`${gallery.current.offsetHeight}px`
    })
  })

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)

    dotRefs.current.forEach((elem,i)=>{
      ScrollTrigger.create({
        trigger:dotRefs.current[i],
        start:"top 60%",
        end:"top 60%",
        // markers: true,
        onLeave: function(){
          console.log('complete')
          glow(i)
        },
        // onLeaveBack: function(){
        //   console.log('complete')
        //   glow(i)
        // }
      })
    })

  })

  const { scrollYProgress } = useScroll({
    target:gallery,
    offset:["start 55%","end 75%"],
  })

  const glow = (dot) => {
    gsap.to(dotRefs.current[dot],{
      scale: 1,
      opacity: 1,
      onComplete: function(){
        gsap.to(dotRefs.current[dot],{
          scale:0,
          opacity:0,
        })
      }
    })
  }

  const height = useTransform(scrollYProgress, [0,1], ["0%","100%"])

  return (
    <div className="process-gallery relative mt-[5vh] tab:mt-[0vh] mob:mt-[0vh] w-full flex items-start justify-between">

      <div ref={bar} className="bar relative h-[100%] w-[2px] bg-[#ffffff69] rounded-[20px] flex flex-col justify-between">
        <motion.div style={{height}} className="bar-inner w-full bg-[#fff] rounded-[20px]">
        </motion.div>
        {
          [...Array(5)].map((_, i)=>{
            return (
              <div
               key={`Bar_dot_services${i}`}
               className="dot absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-0 w-[10px] h-[10px] rounded-full">
                <div className="dot-inner relative w-full h-full">
                  <div ref={ref => dotRefs.current[i] = ref} className="glow-back absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] scale-0 bg-[#ffffff9c] rounded-full">
                  </div>
                  <div className="dot-front bg-[#ffffff] w-full h-full rounded-full relative">
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      
      <div ref={gallery} className="process-right-wrap flex flex-col items-start justify-start">
        {
          steps.map( (item,i) => {
            return (
              <ProcessItem approach={item.title} key={`Approach_item_${i}`} description={item.desc} count={i+1}/>
            )
          } )
        }
      </div>

    </div>
  )
}

export default ProcessGallery

