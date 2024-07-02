'use client'
import FooterTest from '@/components/footer/footerTest'
import Marquee from '@/components/home/marquee'
import WorkGallery from '@/components/work/work-gallery'
import React from 'react'

const Page = () => {
  return (
    <>
    <WorkGallery service={"advertisement"}/>
    <div className='bg-white'>
      <Marquee/>
      <FooterTest/>
    </div>
    </>
  )
}

export default Page

