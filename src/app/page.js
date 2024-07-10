"use client"
import React from 'react'
import FooterTest from '@/components/footer/footerTest'
import Hero from '@/components/home/hero'
import Marquee from '@/components/Marquee/marquee'
import Work from '@/components/home/work'
import HomeAboutSection from '@/components/home/HomeAboutSection'
import HomeServiceSection from '@/components/home/HomeServices'
import HomeMarquee from '@/components/home/HomeMarquee'

const Page = () => {
  return (
    <>
    <Hero/>
    <HomeMarquee/>
    <HomeAboutSection/>
    <HomeServiceSection/>
    <Work/>
    <div className='bg-[#F1F1F1]'>
        <Marquee/>
        <FooterTest/>
    </div>
    </>
  )
}

export default Page