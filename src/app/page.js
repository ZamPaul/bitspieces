"use client"
import React, { useEffect, useState } from 'react'
import FooterTest from '@/components/footer/footerTest'
import Hero from '@/components/home/hero'
import Marquee from '@/components/Marquee/marquee'
import Work from '@/components/home/work'
import HomeAboutSection from '@/components/home/HomeAboutSection'
import HomeServiceSection from '@/components/home/HomeServices'
import HomeMarquee from '@/components/home/HomeMarquee'
import Testimonials from '@/components/Testimonials/Testimonials'
import FAQS from '@/components/FAQS/FAQS'
import ServiceSection from '@/components/Service/ServiceSection'

const Page = () => {

  return (
    <>
    <Hero/>
    <HomeMarquee/>
    <HomeAboutSection/>
    {/* <HomeServiceSection/> */}
    <ServiceSection/>
    <Work/>
    <Testimonials/>
    <FAQS/>
    <div className='bg-[#F1F1F1]'>
        <Marquee/>
        <FooterTest/>
    </div>
    </>
  )
}

export default Page