"use client"
import Button from '@/components/button/button'
import FooterTest from '@/components/footer/footerTest'
import Marquee from '@/components/Marquee/marquee'
import React from 'react'
// W w A a D d Q q'

const NotFound = () => {
  return (
    <>
    <NotFoundUpper/>
    <div className='bg-[#F1F1F1]'>
      <Marquee/>
      <FooterTest/>
    </div>
    </>
  )
}

const NotFoundUpper = () => {
  return (
    <div
     className="not-found-wrap relative z-[30] pt-[35vh] tab:pt-[30vh] pb-[10vh] bg-black w-full flex justify-center">
      <div className="not-found-inner relative w-[93%] flex flex-col gap-[20px] items-start justify-center">
        <h1 className='text-[5vw] text-[#fff] mob:text-[8vw] uppercase tracking-[0px] font-[mon] leading-[1.1em] mob:leading-[1.2em]'>
          Error 404
        </h1>
        <p className='text-[#ffffffd0]'>
          We broke the internet
        </p>
        <div className="home-btn flex w-full border-t-[0.1px] pt-[5vh] tab:pt-[3vh] bottom-t-[var(--bor)]">
            <Button value={"Return to Home"} href={"/"}/>
        </div>
      </div>
    </div>
  )
}

export default NotFound
