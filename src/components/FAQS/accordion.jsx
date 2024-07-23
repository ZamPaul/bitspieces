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
    <div key={key} id={`accordion${num+1}`} ref={refer => ref.current[num] = refer} className='accordion-item relative h-fit w-full py-[4vw] tab:py-[4.5vw] mob:py-[8.5vw] border-t-[1px] border-t-[var(--bor)] flex flex-col items-start justify-start'>
      <div className="accordion-query flex justify-between items-center mob:items-start gap-[3vw] w-full">
        <div className="left-query flex items-center gap-[2vw]">
            <div className="num mob:hidden">
              <h2 className='text-[2vw] tab:text-[2.5vw] leading-none'>
                  0{num+1}:
              </h2>
            </div>
            <div className="query mob:w-[70vw]">
              <p className='text-[2vw] tab:text-[2.5vw] mob:text-[18px] mob:leading-[1.35em] leading-none'>
                  {query}
              </p>
            </div>
        </div>
        <button onClick={click} className='relative h-[2em] overflow-hidden flex flex-col justify-start content-btn mob:mt-[5px]'>
          <h2 className={`relative para-link ${open ? "text-[#ffffff] -top-full left-0":"text-[#fff] top-0 right-0"} tab:text-[16px] mob:text-[16px] uppercase transition-all ease-in-out duration-300`}>
            Read
          </h2>
          <h2 className={`absolute para-link ${open ? "text-[#ffffff] top-[-25px] left-0":"text-[#fff] top-full right-0"} tab:text-[16px] mob:text-[16px] uppercase transition-all ease-linear duration-300`}>
            Hide
          </h2>
        </button>
      </div>

      <motion.div 
        initial={"init"}
        animate={open?"open":"close"}
        variants={answerWrap}
        className={`answer-wrapper grid overflow-hidden w-full`}>

        <motion.div className='overflow-hidden w-full flex mob:flex-col mob:gap-[0vw] justify-between items-start'>

          <motion.div 
           initial={"init"}
           variants={imgVariants}
           animate={open?"open":"close"}
           className="left-img pointer-events-none rounded-[15px] flex items-center overflow-hidden justify-center mt-[4vw] mob:mt-[8vw]">
            <Image src={img} alt="" style={{objectFit:"cover"}} className='w-[300px] tab:w-[25vw] mob:w-[93vw] h-[200px] mob:h-[60vw] tab:h-[15vw]'/>
          </motion.div>
          <p className='w-[30vw] text-[#fffd] tab:text-[16px] tab:w-[50vw] mt-[4vw] mob:mt-[5vw] mob:w-full text-left'>
            {answer}
          </p>
          <div className="query-cta-btn flex tab:hidden mt-[4vw] mob:hidden">
            <Button href={"/contact"} value={"Ask a question"} keyPass={"faq_contact_btn"}/>
          </div>

        </motion.div>

      </motion.div>
    </div>
  )
})

export default Accordion
