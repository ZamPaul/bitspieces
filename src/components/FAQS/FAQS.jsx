"use client"
import React, { useEffect, useRef, useState } from 'react'
import { faqs } from '../hooks/data'
import Accordion from './accordion'
import Button from '../button/button'
import gsap from 'gsap'

const FAQS = () => {

  const accordions = useRef([])

  return (
    <div className='faqs-section z-[30] bg-black w-full flex justify-center relative pt-[5vh] mob:pt-[2vh] pb-[20vh] tab:pb-[10vh] mob:pb-[15vh]'>
      <div className="faqs-inner w-[93%] flex flex-col justify-center items-center">
        <TopText/>
        <div className="accordions-wrapper mt-[5vh] tab:mt-[0vh] mob:mt-[0vh] w-full flex-col items-start justify-center">
            {
                faqs.map((faq,i)=>{
                    return (
                        <Accordion ref={accordions} img={faq.img} num={i} query={faq.query} answer={faq.answer} key={`FAQ_${i}`}/>
                    )
                })
            }
        </div>
        <div className="cta-button hidden tab:flex mob:flex mt-[8vw] mob:mt-[10vw]">
          <Button value={"Ask a Question"} href={"/contact"} keyPass={"cta_button_faq"}/>
        </div>
      </div>
    </div>
  )
}


const TopText = () => {
    return (
      <div className="text-info w-full mb-[7vh] tab:mb-[5vh] mob:mb-[5vh] flex flex-col justify-start">
        <p className='text-[3.5vw] leading-none mob:leading-[1.4em] tab:text-[4vw] mob:text-[7vw]'>
          Customer FAQs: Addressing Your Most Common Queries
        </p>
      </div>
    )
}

export default FAQS
