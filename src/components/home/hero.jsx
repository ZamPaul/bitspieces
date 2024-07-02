'use client'
import React from 'react'
import Button from '@/components/button/button'
import {motion} from "framer-motion"
import Pin from '../pin/pin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Getdimensions from '../getdimensions/getdimensions'
import gsap from 'gsap'

const Hero = () => {

  return (
    <div className="hero-wrapper w-full flex flex-col justify-start items-center pt-[30vh] tab:pt-[25vh] mob:pt-[25vh] bg-[#121212]">
        <Pin trigger={"#main"} endTrigger={".poster"} start={"top top"} end={"top top"} move={true}>
            <div className="hero-content relative w-full flex justify-center">
                <div className="content-inner flex flex-col justify-center w-[93%]">
                    <div className="wrap flex items-center justify-between h-[6.6em] tab:h-[6vh] mob:h-[2.6em] w-full tab:justify-center  mob:justify-center">
                        <h1 className='uppercase font-[mon] text-[7vw] mob:text-[8vw] font-[100] tracking-[0px] leading-none'>
                            We are an
                        </h1>
                        <div className="services flex text-left tab:hidden mob:hidden">
                            <p className='text-[17px] text-[#ffffffd0]'>
                                Art department, advertising,<br/>Film Making, Event Management,<br/>rentals and much more.
                            </p>
                        </div>
                        <div className='tab:ml-[3vw] mob:hidden'>
                            <Button value={"Let's Talk"} href={"/contact"}/>
                        </div>
                    </div>
                    <div className="wrap flex items-center justify-start h-[6.6em] tab:h-[6vh] mob:h-[2.6em] w-full tab:justify-center  mob:justify-center">
                        <h1 className='uppercase font-[mon] text-[7vw] mob:text-[8vw] font-[100] tracking-[0px] leading-none'>winning design</h1>
                    </div>
                    <div className="wrap flex justify-between items-center gap-[3vw] h-[6.6em] tab:h-[6vh] mob:h-[2.6em] w-full tab:justify-center  mob:justify-center">
                        <Graphic w={"50vw"} h={"70%"}/>
                        <Reveal x={"-42vw"}>
                            <h1 className='uppercase mb-[0.04em] relative flex font-[mon] text-[7vw] mob:text-[8vw] font-[100] tracking-[0px] leading-none'>
                                Company
                            </h1>
                        </Reveal>
                    </div>
                    {/* // only for mobile => */}
                    <div className="wrap hidden w-full mt-[3vh] tab:flex mob:flex mob:flex-col justify-center text-center mob:justify-start mob:items-center mob:text-center">
                            <p className='text-[17px] text-[#ffffffe3]'>
                                Art department, advertising, Film Making, Event Management, rentals and much more.
                            </p>
                            <div className="hidden mob:block mt-[3vh]">
                                <Button value={"Let's talk"}/>
                            </div>
                    </div>
                </div>
            </div>
        </Pin>
        <Poster/>
    </div>
  )
}


let blocks = [
    {
        style:{
            rotate:"20deg",
            transformOrigin:"50% 50%",
            top:"-10%",
            left:"50%",
            backgroundColor:"#cd6736"
        },
        elem: <h2 className='graphic-text text-[1.4vw] tab:text-[1.3vw] font-[100]'>Artistic Innovation</h2> 
    },
    {
        style:{
            transformOrigin:"50% 50%",
            top:"50%",
            transform:"translate(0%,-50%) rotate(-45deg) scale(0.9)",
            right:"-8%",
            backgroundColor:"#b8a3f2",
            boxShadow:"0px 0px 30px 50px #12121210"
        },
        elem: <h2 className='graphic-text text-[1.4vw] tab:text-[1.3vw] text-black font-[100]'>Based in dubai</h2> 
    },
    {
        style:{
            rotate:"-10deg",
            transformOrigin:"50% 50%",
            top:"-10%",
            left:"0%",
            backgroundColor:"#04453d",
        },
        elem: <h2 className='graphic-text text-[1.4vw] tab:text-[1.3vw] font-[100]'>Creative Vision</h2> 
    },
    {
        style:{
            transformOrigin:"50% 50%",
            top:"50%",
            transform:"translate(0%,-50%) rotate(-20deg) scale(0.9)",
            left:"25%",
            backgroundColor:"var(--yellow)",
            boxShadow:"0px 0px 30px 50px #12121250"
        },
        elem: <h2 className='graphic-text text-[1.4vw] tab:text-[1.3vw] text-black font-[100]'>Bits & Pieces</h2> 
    },
]

export const Graphic = ({w, h}) => {
    return (
        <motion.div
         style={{
            width:w,
            height:h,
         }}
         variants={{
            init:{
                opacity: 1,
                clipPath:"polygon(0 0, 0% 0, 0% 100%, 0 100%)"
            },
            anim:{
                opacity: 1,
                clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                transition:{delay: 1.2, duration: 1.2, ease:[0.83, 0, 0.17, 1]}
            }
         }}
         initial='init'
         animate='anim'
         className={`graphic mob:hidden select-none overflow-hidden pointer-events-none relative rounded-[10px] w-[${w}] h-[${h}] bg-[#F1F1F1]`}>
            {
                blocks.map( (block, i) => {
                    return (
                        <div 
                         key={`Block_${i}`}
                         className="rounded-[10px] absolute flex justify-center items-center w-[30%] h-[140%]" 
                         style={block.style}>
                            {block.elem}
                        </div>
                    )
                } )
            }
        </motion.div>
    )
}

const Poster = () => {

    const dimensions = Getdimensions();

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)

        const nim = gsap.to(".poster-image img",{
            y:"15vh"
        })
        if(dimensions.w>=1024 && dimensions.h<=1000){
            ScrollTrigger.create({
                start:"4% top",
                end:"bottom top",
                trigger:"#main",
                endTrigger:".poster",
                scrub:1,
                animation:nim,
                // markers:true,
                invalidateOnRefresh: true
            })
        }
    })

    return (
        <div className="poster relative bg-black w-[93%] mt-[2vw] tab:mt-[6vh] mob:mt-[5vh] pt-[6vh] border-t-[1px] border-t-[var(--bor)] flex flex-col gap-[6vh]">
            <div className="top-text flex items-center justify-between w-full">
                <p className='text-grey'>Shaping Perspectives, Crafting Stories</p>
                <p className='text-grey mob:hidden'>What can we do for you?</p>
            </div>
            <div className="poster-image flex items-center justify-center w-full h-screen tab:h-[37vh] mob:h-[25vh] rounded-[15px] overflow-hidden">
                <img src={'./assets/heroposter.webp'} alt="image" className='w-[100%] h-[118%] rounded-[15px] object-cover'/>
            </div>
        </div>
    )
}

export const Reveal = ({children, x}) => {
    return (
        <motion.div 
        variants={{
            init:{
                x:window.innerWidth>=576?x:0
            },
            anim:{
                x:0,
                transition:{delay: 1.2, duration: 1.2, ease:[0.83, 0, 0.17, 1]}
            }
         }}
         initial='init'
         animate='anim'
        className="reveal-text">
            {children}
        </motion.div>
        
    )
}


export default Hero
