"use client"
import React from 'react'
import Pin from '../pin/pin'

const PrivacyIntroText = () => {
  return (
    <Pin trigger={"#main"} endTrigger={".policy-wrap"} start={"top top"} end={"top top"} move={true}>
        <div className="intro-text w-full flex justify-start pb-[7vh] tab:pb-[5vh] mob:pb-[5vh]">
            <h1 className='text-[5vw] mob:text-[8vw] uppercase tracking-[0px] font-[mon] leading-[1.1em] mob:leading-[1.2em]'>
                Terms and Condition
            </h1>
        </div>
    </Pin>
  )
}

export default PrivacyIntroText