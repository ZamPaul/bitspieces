'use client'
import React, { useEffect, useRef } from 'react'
import Image from "next/image"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap" 
import { useGSAP } from '@gsap/react'
import Pin from '../pin/pin'
import Getdimensions from '../getdimensions/getdimensions'


const paras = [
    "Bits & Pieces is a Dubai based professional and leading Art Department company in commercial and film industry. Since its humble beginnings, it has established a reputation as the go-to art direction and props construction master with all the well-known and prominent agencies and directors in the UAE and other countries. Our team of talented, results-oriented, dedicated, and passionate staff makes the craft we deliver more impactful.",

    "To meet our clients’ expectations and market demands, we integrate creativity, innovation, technology, and craftsmanship.",

    "From the outset, we established integrity and strong working connections with everyone, and we began to expand our core company to include event services, and we have been successful in providing excellent and memorable events to our satisfied and happy clients.",

    "We aim to improve and provide only the best service."

]

const History = () => {

  let img = useRef(null)

  const dimensions = Getdimensions();

  useGSAP(()=>{
    gsap.registerEffect(ScrollTrigger)
    if(dimensions.w>=1024 && dimensions.h<=1000){
        ScrollTrigger.create({
            trigger:".lower",
            start:"top top",
            endTrigger:".right",
            end:"bottom bottom",
            // markers:true,
            pin:img.current,
            pinnedContainer: img.current,
            
            scrub:true
        })
    }
   
  },[dimensions])

  return (
    <div className="about-info z-[30] w-full pt-[35vh] tab:pt-[30vh] pb-[15vh] tab:pb-[10vh] mob:pb-[10vh] text-black flex flex-col justify-start items-center bg-white">
        <div className="info-wrap w-[93%] flex flex-col gap-[7vh] tab:gap-[5vh] mob:gap-[5vh]">
            <Pin trigger={"#main"} endTrigger={".lower"} start={"top top"} end={"top top"} move={true}>
                <div className="upper-text w-full">
                    <h1 className='text-[5vw] mob:text-[8vw] uppercase tracking-[0px] font-[mon] text-black leading-[1.1em] mob:leading-[1.2em]'>
                    The Bits & Pieces<br/>Approach to Creative<br/>Solutions
                    </h1>
                </div>
            </Pin>
            <div className="lower w-full relative bg-white flex mob:flex-col justify-between pt-[7vh] tab:pt-[5vh] mob:pt-[5vh] border-t-[1px] border-t-[#12121280]">
                <div className="left w-1/2 mob:w-full">
                    <div ref={img} className="pin-wrapper relative flex flex-col items-start gap-[20px]">
                        <div className="image-wrap rounded-[10px] w-[35vw] mob:w-[93vw] h-[35vw] mob:h-[40vh] overflow-hidden">
                            <img src="./assets/art/art14.webp" alt="image" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                        </div>
                        <p className='text-[#121212]'>
                            Human Billiard Table - Fabrication
                        </p>
                    </div>
                </div>
                <div className="right w-1/2 mob:w-full flex flex-col gap-[3vh] mob:mt-[4vh]">
                    {
                        paras.map((value, i) => {
                            return (
                                <p key={i} className='text-[2.2vw] mob:text-[20px] leading-[1.3em] text-black'>
                                    {value}
                                </p>
                            )
                            
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default History
