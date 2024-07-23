"use client"
import { motion } from 'framer-motion'
import gsap from 'gsap'
import React, { forwardRef } from 'react'
import Image from 'next/image'

const Project = forwardRef(({title ,subTitle, keyValue, key ,src}, ref) => {

  const mouseEnter = () => {
    // setting all other projects to opccity 0.3
    ref.current.forEach(project => {
        gsap.to(project,{
            opacity: 0.5,
            duration:.5,
            ease:"power4.inOut"
        })
    });
    
    // setting the hover project to opacity 1
  
    gsap.to(ref.current[keyValue],{
        opacity: 1,
        duration:.5,
        ease:"power4.inOut"
    })
  }

  const mouseLeave = () => {
    // setting every project to opcity 1 n blur 0 on mouseleve 
    ref.current.forEach(project => {
        gsap.to(project,{
            opacity: 1,
            filter:"blur(0px)",
            duration:.5,
            ease:"power4.inOut"
        })
    });
  }

  return (
    <motion.div
        initial={'init'}
        whileHover={'hover'}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        ref={refer => ref.current[keyValue] = refer}
        key={`Project_${keyValue}`} 
        className="project-wrapper flex flex-col gap-[25px] cursor-pointer"
    >

        <motion.div
            variants={{
                init:{
                    scale:1,
                },
                hover:{
                    scale: 0.95,
                    // transition:{duration:.5,ease:[0.65, 0, 0.35, 1]}
                },
            }}
            transition={{type:"keyframes",ease:"linear"}}
            className='project-image pointer-events-none select-none relative w-[43vw] mob:w-[93vw] h-[35vw] tab:h-[38vw] mob:h-[80vw] rounded-[10px] overflow-hidden'>

            <motion.img
                variants={{
                    init:{
                        transform:"translate(-50%,-50%) scale(1)"
                    },
                    hover:{
                        transform:"translate(-50%,-50%) scale(1.2)",
                        // transition:{duration:.5,ease:[0.65, 0, 0.35, 1],delay:0}
                    }
                }}
                transition={{type:"keyframes",ease:"linear"}}
                src={src}
                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover'
            />
    
        </motion.div>

        <div className="project-text w-full flex flex-col">
            <div className="project-upper-heading w-full border-b-[0.1px] pb-[25px] tab:pb-[17px] mob:pb-[20px] border-b-[var(--bor)]">
            <h1 className='text-[1.7vw] tab:text-[2vw] uppercase mob:text-[4.2vw] font-[mon] tracking-[0px]'>
                {title}
            </h1>
            </div>
            <div className="project-text-common flex w-full justify-between mt-[25px] tab:mt-[17px] mob:mt-[20px]">
                <p className=''>{subTitle}</p>
                <p className='text-grey'>2023</p>
            </div>
        </div>

    </motion.div>
  )
})

export default Project
