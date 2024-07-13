"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../button/button'
import { answerContent, answerWrap, imgVariants } from './animations'


const Accordion = ({num, query, answer, key, img}) => {
  
  const [open, setOpen] = useState(num==0?true:false)   
   
  const click = () => {
    setOpen(!open)
  }

  return (
    <div key={key} className='accordion-item relative h-fit w-full py-[4vw] tab:py-[4.5vw] mob:py-[8.5vw] border-t-[1px] border-t-[var(--bor)] flex flex-col items-start justify-start'>
      <div className="accordion-query flex justify-between items-center gap-[3vw] w-full">
        <div className="left-query flex items-center gap-[2vw]">
            <div className="num mob:hidden">
              <h2 className='text-[2vw] tab:text-[2.5vw] leading-none'>
                  0{num+1}:
              </h2>
            </div>
            <div className="query">
              <p className='text-[2vw] tab:text-[2.5vw] mob:text-[18px] mob:leading-[1.35em] leading-none'>
                  {query}
              </p>
            </div>
        </div>
        <button onClick={click} className='content-btn'>
          <h2 className={`para-link ${open ? "text-[#ffffff8e]" : "text-[#fff]" } tab:text-[16px] mob:text-[16px] uppercase transition-all ease-in-out`}>
            Read
          </h2>
        </button>
      </div>

      <motion.div 
        initial={"init"}
        animate={open?"open":"close"}
        variants={answerWrap}
        className={`answer-wrapper grid overflow-hidden w-full`}>

        <motion.div className='overflow-hidden w-full flex mob:flex-col mob:gap-[0vw] justify-between items-start'>

          <motion.div initial={"init"} variants={imgVariants} animate={open?"open":"close"} className="left-img pointer-events-none w-[300px] tab:w-[25vw] mob:w-[93vw] h-[200px] mob:h-[45vw] tab:h-[15vw] rounded-[15px] overflow-hidden flex items-center justify-center mt-[4vw] mob:mt-[8vw]">
            <Image src={img} style={{objectFit:"cover"}}/>
          </motion.div>
          <p className='w-[30vw] text-[#fffd] tab:w-[50vw] mt-[4vw] mob:mt-[5vw] mob:w-full text-left'>
            {answer}
          </p>
          <div className="query-cta-btn flex tab:hidden mt-[4vw] mob:hidden">
            <Button href={"/contact"} value={"Ask a question"} keyPass={"faq_contact_btn"}/>
          </div>

        </motion.div>

      </motion.div>
    </div>
  )
}

export default Accordion
