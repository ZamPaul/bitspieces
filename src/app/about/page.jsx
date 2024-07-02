'use client'
import React from 'react'
import History from '@/components/about/history'
import Marquee from '@/components/home/marquee'
import Process from '@/components/about/process'
import FooterTest from '@/components/footer/footerTest'

const About = () => {
  return (
    <>
    <History/>
    <Process/>
    <div className='bg-[#F1F1F1]'>
       <Marquee/>
       <FooterTest/>
    </div>
    </>
  )
}

export default About