'use client'
import ContactForm from '@/components/contact/contactForm'
import ContactIntroText from '@/components/contact/contactIntroText'
import Reach_Us from '@/components/contact/reachUs'
import FooterTest from '@/components/footer/footerTest'
import Marquee from '@/components/Marquee/marquee'
import React from 'react'

const Contact = () => {
  return (
    <>
    <ContactIntroText/>
    <ContactForm/>
    <Reach_Us/>
    <div className='bg-white'>
      <Marquee/>
      <FooterTest/>
    </div>
    </>
  )
}

export default Contact