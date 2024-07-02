import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import React from 'react'
import Getdimensions from '../getdimensions/getdimensions'
import gsap from 'gsap'
import bezier from 'bezier-easing'

const ContactGraphic = () => {

  const dimensions = Getdimensions();

  const ese = bezier(0.83, 0, 0.17, 1)

  useGSAP(()=>{
    if(dimensions.w>=576){
      gsap.fromTo(".contact-graphic",
        { 
          clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" 
        },
        {
          clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
          delay: 1.2, 
          duration: 1.2, 
          ease: ese
        }
      )
    }
  },[dimensions])

  return (
    <motion.div 
    //  variants={{
    //     init:{
    //         clipPath:"polygon(0 0, 0% 0, 0% 100%, 0 100%)"
    //     },
    //     anim:{
    //         clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    //         transition:{delay: 1.2, duration: 1.2, ease:[0.83, 0, 0.17, 1]}
    //     }
    //  }}
    //  initial='init'
    //  animate='anim'
     style={{
      clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
     }}
     className='contact-graphic w-[17vw] mob:hidden tab:w-[20vw] h-[70%] tab:h-[70%] pointer-events-none select-none relative overflow-hidden rounded-[10px] flex items-center justify-center bg-[#04453d]'>
        <img src="./assets/arrow-up.png" alt="" className='w-[43%] z-[2] pointer-events-none absolute left-[-0.5vw] object-cover rotate-[90deg]'/>
        <div
         style={{
            transform:"rotateY(10deg)",
            rotate:"20deg"
         }}
         className="inner-box h-[100%] px-[1.5vw] absolute right-[1vw] bg-white rounded-[10px] flex justify-center items-center shadow-[0px_0px_50px_10px_#ffffff80]">
            <h2 className='uppercase text-black tab:text-[1.5vw]'>
                Start Now
            </h2>
        </div>
    </motion.div>
  )
}

export default ContactGraphic
