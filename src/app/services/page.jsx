'use client'
import FooterTest from '@/components/footer/footerTest'
import Marquee from '@/components/home/marquee'
import ServiceHero from '@/components/services/Service-hero'
import ServicesWrap from '@/components/services/services'
import React from 'react'


const Services = () => {
  return (
    <>
    <ServiceHero/>
    <ServicesWrap/>
    <div className='bg-white'>
      <Marquee/>
      <FooterTest/>
    </div>
    </>
  )
}

export default Services