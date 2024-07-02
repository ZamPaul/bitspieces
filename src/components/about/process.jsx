"use client"
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import Svg from '../svg/svg'
import Getdimensions from '../getdimensions/getdimensions'

let slides = [
    {
        title:"Recieving the project brief",
        desc:"Prior to undertaking any project, we carefully review information to understand the client’s main objective.",
        bg:"var(--sli)",
        flag:false
    },
    {
        title:"Brainstorming",
        desc:"Our meticulous and creative process starts at this stage where we prove our unlimited creativity.",
        bg:"#e0fd60f3",
        flag:true,
    },
    {
        title:"Plan & Design",
        desc:"We design the visualization of our compiled thoughts and start our strategic plan aiming to achieve the ultimate objective.",
        bg:"#F1F1F1",
        flag:true
    },
    {
        title:"Approval & Execution",
        desc:"Upon green light of the client, we see to it that all the key metrics and components are executed with high standard and professional ethics.",
        bg:"#04443c",
        flag:false
    },
    {
        title:"Client Feedback",
        desc:"We welcome constructive feedback from our client in order for us to evolve and raise the bar higher for every project.",
        bg:"var(--purp)",
        flag:true
    }
]

const Process = () => {

  const dimensions = Getdimensions();

  const [constraints,setconstraints] = useState(0)

  useEffect(()=>{
    if(dimensions.w<=1024 && dimensions.h>=1000){
        setconstraints(-dimensions.w*1.5)
    }else if(dimensions.w<=576 && dimensions.h<1000){
        setconstraints(-dimensions.w*4)
    }else{
        setconstraints(-dimensions.w)
    }
  },[dimensions])

  return (
    <div className='process relative rounded-t-[15px] rounded-b-[20px] z-[30] w-full py-[20vh] tab:py-[12vh] mob:py-[10vh] overflow-hidden bg-black flex justify-center'>
        <div className="process-inner w-[93%] flex flex-col gap-[8vh] tab:gap-[5vh]">
            <div className="process-title">
                <h1 className='text-[#fff] leading-[1.1em] tracking-[0px] uppercase text-[4.5vw] mob:text-[7vw] font-[mon]'>
                    Our Step-by-Step<br/>Approach
                </h1>
            </div>
            <div className="slider-wrapper w-full">
                <motion.div
                 drag="x"
                 dragConstraints={{left:constraints, right:0}}
                 initial={"init"}
                 whileTap={"tap"}
                 variants={{
                    init:{
                        cursor:"grab",
                    },
                    tap:{
                        cursor:"grabbing"
                    }
                 }}
                 className="slider-inner flex items-center justify-start gap-[4vw] mob:gap-[7vw] flex-shrink-0">
                    <Slider/>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Process


const Slider = () => {
    return (
        slides.map( (slide, i) => {
            return (
                <motion.div key={`Slide_${i}`} className="slide w-[32vw] tab:w-[40vw] mob:w-[93vw] h-[32vw] tab:h-[50vw] mob:h-[500px] relative flex-shrink-0">
                    <motion.div
                     variants={{
                        init:{
                            scale: 1,
                        },
                        tap:{
                            scale: 0.9,
                            transition:{ease:[0.33, 1, 0.68, 1],duration:0.4}
                        }
                     }}
                     style={{backgroundColor:slide.bg}}
                     className="slide-inner relative overflow-hidden w-full h-full px-[50px] tab:px-[45px] py-[50px] rounded-[15px] flex flex-col gap-[40px] tab:gap-[30px] mob:gap-[30px]">

                        <div className="back-svg absolute right-[-8vw] mob:right-[-25vw] bottom-[-8vw] mob:bottom-[-20vw] w-[30vw] tab:w-[35vw] mob:w-[100vw] h-[30vw] tab:h-[35vw] mob:h-[100vw]">
                            <Svg fill={slide.flag?"#12121230":"#ffffff10"} stroke={slide.flag?"#12121212":"#ffffff07"} px={"0.5px"}/>
                        </div>
                        <div className="title relative">
                            <h2 className={`text-[18px] tab:text-[17px] uppercase tracking-[0.5px] font-[900] ${slide.flag ? "text-black": "text-[#fff]"}`}>
                                {slide.title}
                            </h2>
                        </div>
                        <div className="description w-full pr-[15px] tab:pr-[5px] mob:pr-[0px] relative">
                            <p className={`text-[1.8vw] tab:text-[2.4vw] mob:text-[25px] ${slide.flag ? "text-black": "text-[#fff]"}`}>
                                {slide.desc}
                            </p>
                        </div>
                        <div className="phase absolute left-[50px] bottom-[50px] tab:left-[45px]">
                            <h2 className={`text-[18px] tab:text-[18px] ${slide.flag ? "text-[#121212]": "text-[#ffffff95]"}`}>
                                Phase {i+1}
                            </h2>
                        </div>
                        <Circle flag={slide.flag}/>

                    </motion.div>
                </motion.div>
            )
        })
    )
}

export const Circle = ({flag}) => {
    return (
        <div className={`circle ${flag?"bg-[var(--grey)]":"bg-[#121212]"} w-[40px] h-[40px] rounded-full absolute right-[50px] bottom-[40px] tab:right-[45px]`}>
            <div className="circle-inner relative rotate-[0deg] rounded-full w-full h-full flex items-center justify-center overflow-hidden">

                <motion.div 
                variants={{
                    init:{
                        scale: 1,
                    },
                    tap:{
                        scale: 0,
                    }
                }}
                className={`circle-overlay relative h-full w-full ${flag?"bg-[#121212]":"bg-[var(--grey)]"} rounded-full scale-1`}>
                </motion.div>

                <motion.img
                variants={{
                    init:{
                        left:"50%",
                    },
                    tap:{
                        left:"150%",
                        transition:{left:{
                            type:"spring",

                        }},
                    }
                }}
                src={'./assets/arrow2.png'} alt="" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]' style={{filter:flag?"invert(1)":"invert(0)"}} />

                <motion.img 
                variants={{
                    init:{
                        left:"-50%",

                    },
                    tap:{
                        left:"50%",
                        transition:{left:{
                            type:"spring"
                        }},
                        transform:"translateX(-50%) translateY(-50%)",
                    }
                }}
                src={'./assets/arrow2.png'} alt="" className='absolute -left-1/2 top-1/2 -translate-y-1/2 w-[20px] h-[20px]' style={{filter:flag?"invert(0)":"invert(1)"}} />

            </div>
        </div>
    )
}