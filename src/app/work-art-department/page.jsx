'use client'
import FooterTest from '@/components/footer/footerTest'
import Marquee from '@/components/Marquee/marquee'
import WorkGallery from '@/components/work/work-gallery'
import React from 'react'

const Page = () => {
  return (
    <>
    <WorkGallery service={"art-department"}/>
    <div className='bg-white'>
      <Marquee/>
      <FooterTest/>
    </div>
    </>
  )
}

export default Page
