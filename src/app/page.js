"use client"
import React from 'react'
import FooterTest from '@/components/footer/footerTest'
import Hero from '@/components/home/hero'
import Marquee from '@/components/home/marquee'
import Work from '@/components/home/work'

const Page = () => {
  return (
    <>
    <Hero/>
    <Work/>
    <div className='bg-[#F1F1F1]'>
        <Marquee/>
        <FooterTest/>
    </div>
    </>
  )
}

export default Page