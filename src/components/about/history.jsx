'use client'
import React, { useRef } from 'react'
import Pin from '../pin/pin'
import Button from '../button/button'

const paras = [
    "Bits & Pieces is a Dubai based professional and leading Art Department company in commercial and film industry. Since its humble beginnings, it has established a reputation as the go-to art direction and props construction master with all the well-known and prominent agencies and directors in the UAE and other countries. Our team of talented, results-oriented, dedicated, and passionate staff makes the craft we deliver more impactful.",

    "To meet our clients’ expectations and market demands, we integrate creativity, innovation, technology, and craftsmanship.",

    "From the outset, we established integrity and strong working connections with everyone, and we began to expand our core company to include event services, and we have been successful in providing excellent and memorable events to our satisfied and happy clients.",

    "We aim to improve and provide only the best service."

]

const History = () => {

  let img = useRef(null)

  return (
    <div className="about-info z-[30] w-full pt-[35vh] tab:pt-[30vh] mob:pb-[10vh] flex flex-col justify-start items-center">
        <div className="info-wrap w-[93%] flex flex-col gap-[7vh] tab:gap-[5vh] mob:gap-[5vh]">
            <Pin trigger={"#main"} endTrigger={".lower"} start={"top top"} end={"top top"} move={true}>
                <div className="upper-text w-full">
                    <h1 className='text-[5vw] mob:text-[8vw] uppercase tracking-[0px] font-[mon] leading-[1.1em] mob:leading-[1.2em]'>
                    The Bits & Pieces<br/>Approach to Creative<br/>Solutions
                    </h1>
                </div>
            </Pin>
            <div className="lower bg-black w-full relative flex mob:flex-col justify-between mob:items-start pt-[7vh] tab:pt-[5vh] mob:pt-[5vh] border-t-[1px] border-t-[var(--bor)] mob:gap-[8vw]">
                <div className="right w-2/3 mob:w-full flex flex-col gap-[3vh] mob:mt-[0vh]">
                    {
                        paras.map((value, i) => {
                            return (
                                <p key={i} className='text-[17px] mob:text-[17px] leading-[1.3em]'>
                                    {value}
                                </p>
                            )
                            
                        })
                    }
                </div>
                <div className="about-button flex flex-col items-end">
                    <Button href={"/work"} value={"Our Works"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History
