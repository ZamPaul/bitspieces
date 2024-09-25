"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { forwardRef, useEffect, useState } from 'react'
import Button from '../button/button'
import { answerWrap, imgVariants } from './animations'
import { useLenis } from 'lenis/react'


const Accordion = forwardRef( ( {num, query, answer, key, img}, ref ) => {
  
  const [open, setOpen] = useState(num==0?true:false) 

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const click = () => {
    setOpen(!open)
    if(!open){
      lenis.scrollTo(`#accordion${num+1}`,{
        lerp:0.07,
        offset:-100,
      })
    }
  }

  return (
    <div key={key} id={`accordion${num+1}`} ref={refer => ref.current[num] = refer} className='accordion-item relative h-fit w-full py-[3vw] tab:py-[4.5vw] mob:py-[8.5vw] border-t-[1px] border-t-[var(--bor)] flex flex-col items-start justify-start'>
      <div className="accordion-query flex justify-between items-center mob:items-start w-full">
        <div className="left-query flex items-center gap-[2vw]">
            <div className="num mob:hidden">
              <h2 className='text-[1.7vw] tab:text-[2.4vw] leading-none'>
                  0{num+1}:
              </h2>
            </div>
            <div className="query mob:w-[70vw]">
              <p className='text-[1.7vw] tab:text-[2.5vw] mob:text-[18px] mob:leading-[1.35em] leading-none'>
                  {query}
              </p>
            </div>
        </div>
        <button onClick={click} className={`relative flex items-center justify-center px-[10px] py-[3px] border-[1px] border-[var(--bor)] rounded-full ${open?"bg-yellow border-[0px]":"bg-black border-[1px]"} transition-all ease-linear duration-300 tab:mt-[10px] mob:mt-[5px]`}>
          <div className="text-wrapper relative flex justify-center items-center overflow-hidden">
            <h2 className={`text-[#fff] relative ${open ? "-top-[40px]":"top-0"} font-[100] tab:text-[16px] mob:text-[16px] uppercase transition-all ease-in-out duration-300`}>
              Read
            </h2>
            <h2 className={`absolute ${open ? "top-0 text-black":"top-full text-[#fffd]"} font-[900] left-1/2 -translate-x-1/2 tab:text-[16px] mob:text-[16px] uppercase transition-all ease-linear duration-300`}>
              Hide
            </h2>  
          </div>
        </button>
      </div>

      <motion.div 
        initial={"init"}
        animate={open?"open":"close"}
        variants={answerWrap}
        className={`answer-wrapper grid overflow-hidden w-full`}>

        <motion.div className='overflow-hidden w-full flex mob:flex-col mob:gap-[0vw] justify-between items-start'>

          <p className='w-full text-[#fffd] mob:text-[16px] tab:w-full mt-[2vw] mob:mt-[4.5vw] mob:w-full text-left'>
            {answer}
          </p>

        </motion.div>

      </motion.div>
    </div>
  )
})

export default Accordion
