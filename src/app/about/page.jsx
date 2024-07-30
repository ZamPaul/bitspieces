'use client'
import React from 'react'
import History from '@/components/about/history'
import Marquee from '@/components/Marquee/marquee'
import Process from '@/components/about/process'
import FooterTest from '@/components/footer/footerTest'
import FAQS from '@/components/FAQS/FAQS'
import ImageCarousel from '@/components/aboutcarousel/ImageCaraosel'
import Cursor from '@/components/Cursor/cursor'
import Process2 from '@/components/about/process2'

const About = () => {
  return (
    <>
    <History/>
    <ImageCarousel/>
    {/* <Process/>   */}
    <Process2/>
    <Cursor moveDiv={".about-cursor-helper"} scaleUpDiv={".about-cursor-scale-up"} text={"Drag"}/>
    <FAQS/>
    <div className='bg-[#F1F1F1]'>
       <Marquee/>
       <FooterTest/>
    </div>
    </>
  )
}

export default About