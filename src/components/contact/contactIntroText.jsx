import React from 'react'
import Pin from '../pin/pin'
import ContactGraphic from '../contactgraphic/contactGraphic'
import { Reveal } from '../home/hero'

const ContactIntroText = () => {
  return (
    <div className="contact-intro-wrap pt-[35vh] tab:pt-[30vh] pb-[7vh] tab:pb-[5vh] mob:pb-[5vh] w-full flex flex-col items-center">
      <Pin trigger={"#main"} endTrigger={".contact-form-wrap"} start={"top top"} end={"top top"} move={true}>
        <div className="contact-intro-inner w-[93%] flex flex-col items-center justify-center">
          <div className="wrap flex justify-start items-center h-[5em] tab:h-[6.6vw] mob:h-[10.5vw] gap-[2vw] w-full">
            <ContactGraphic/>
            <Reveal x={"-18vw"}>
              <h1 className='text-[5vw] mb-[0.05em] mob:text-[8vw] uppercase tracking-[0px] font-[mon] leading-[1.1em] mob:leading-[1.2em]'>
              LET’S START A
            </h1>
            </Reveal>
          </div>
          <div className="wrap flex justify-start h-[4.5em] tab:h-[6.6vw] items-center gap-[2vw] w-full">
            <h1 className='text-[5vw] mob:text-[8vw] uppercase tracking-[0px] font-[mon] leading-[1.1em] mob:leading-[1.2em]'>
              Project Together
            </h1>
          </div>
        </div>
      </Pin>
    </div>
  )
}


export default ContactIntroText
