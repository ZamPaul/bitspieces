import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FormComponent from './FormComponent'
// W w A a D d Q q'

const ContactForm = () => {
  return (
    <div className='contact-form-wrap w-full relative z-[35] rounded-b-[20px] bg-black flex justify-center'>
      <div className="contact-form-inner w-[93%] flex mob:flex-col justify-between items-start border-t-[1px] border-t-[var(--bor)] py-[10vh] tab:py-[6vh] mob:py-[5vh] mob:pb-[10vh] mob:gap-[10vw]">
        <div className="left w-1/2 tab:w-[40%] mob:w-full">
            <p className='text-[#ffffff] text-[2.2vw] tab:text-[2.5vw] mob:text-[20px] w-[80%] mob:w-full'>
                We would love to respond you. Feel free to get touch in touch with us.
            </p>
        </div>
        <div className="right-form w-1/2 tab:w-[55%] mob:w-full">
            <FormComponent/>
        </div>
      </div>
    </div>
  )
}


export default ContactForm
