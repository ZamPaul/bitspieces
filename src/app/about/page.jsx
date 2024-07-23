'use client'
import React from 'react'
import History from '@/components/about/history'
import Marquee from '@/components/Marquee/marquee'
import Process from '@/components/about/process'
import FooterTest from '@/components/footer/footerTest'
import FAQS from '@/components/FAQS/FAQS'

const About = () => {
  return (
    <>
    <History/>
    <Process/>
    <FAQS/>
    <div className='bg-[#F1F1F1]'>
       <Marquee/>
       <FooterTest/>
    </div>
    </>
  )
}

export default About