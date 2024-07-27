"use client"
import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  init:{
    // opacity: 1,
    clipPath:"polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
  },
  anim:{
    // opacity:0,
    clipPath:"polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)",
  }
}

const Loader = () => {
  return (
    <motion.div
    variants={variants}
    initial="init"
    animate="anim"
    transition={{duration:0.7,ease:[0.76, 0, 0.24, 1],type:"keyframes",delay:1.9}}
    className='w-screen h-screen z-[4000] fixed pointer-events-none left-0 top-0 bg-yellow flex justify-center items-center'>
      <div className="loader-svg flex items-center gap-[1vw]">
        <Svg/>
        {/* <h1 className='font-[mon] text-[3vw] uppercase text-black'>
          Bit & Pieces
        </h1> */}
      </div>
     
    </motion.div>
  )
}

const paths = ['M60 0, L20 40 L40 60 L60 40 L40 20','M23.5 83, L63.5 43 L83.5 63 L63.5 83 L43.5 63']

const Svg = () => {
  return (
    <div className='flex w-[15vw] h-[15vw] items-center justify-center'>
      <svg viewBox='0 0 100 100'>
        {
          paths.map((path,i) => {
            return (
              <motion.path 
                variants={{
                  init:{
                    pathLength:0,
                    fill:"#12121200",
                  },
                  anim:{
                    pathLength:1,
                    fill:"#121212",
                    transition:{
                      duration:0.7,
                      type:"keyframes",
                      ease:[0.45, 0, 0.55, 1],
                      fill:{
                        delay:0.6,
                        duration:1,
                      }
                    }
                  }
                }}
                initial="init"
                animate="anim"
                className="logo-svg-path" 
                style={{stroke:"#121212"}} 
                key={i} 
                d={path}
                strokeWidth={"1px"}
              />
            )
          })
        }
      </svg>
    </div>
  )
}

export default Loader

