"use client"
import React, { useRef } from 'react'
import { faqs } from '../hooks/data'
import Accordion from './accordion'
import Button from '../button/button'

const FAQS = () => {

  const accordions = useRef([])

  return (
    <div className='faqs-section z-[30] bg-black w-full flex justify-center relative pt-[5vh] mob:pt-[2vh] pb-[20vh] tab:pb-[10vh] mob:pb-[15vh]'>
      <div className="faqs-inner w-[93%] flex flex-col justify-center items-center">
        <TopText/>
        <div className="accordions-wrapper w-full flex-col items-start justify-center">
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
      <div className="text-info w-full mb-[10vh] tab:mb-[5vh] mob:mb-[5vh] flex justify-between items-end">
        <p className='text-[2.6vw] font-[mon] tracking-[1px] uppercase leading-[1.3em] mob:leading-[1.4em] tab:text-[3.5vw] mob:text-[6vw]'>
          FAQs: Addressing<br/>Your Most Common Queries
        </p>
        <div className="cta-button flex tab:hidden mob:hidden">
          <Button value={"Ask a Question"} href={"/contact"} keyPass={"cta_button_faq"}/>
        </div>
      </div>
    )
}

export default FAQS
