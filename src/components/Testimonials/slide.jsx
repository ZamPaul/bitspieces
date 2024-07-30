import React from 'react'
import Svg from '../svg/svg'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { Circle } from '../about/process'
import Image from 'next/image'
import quote from "../../../public/quote.png"

const Slide = ({review, flag, color, name, occupation, key, date, customerImg}) => {
    
  const quoteColor = useSpring("#fff")

  return (
    <motion.div 
     onMouseEnter={()=>{quoteColor.set("#ffd92f")}}
     onMouseLeave={()=>{quoteColor.set("#fff")}}
     variants={{
        init:{
            scale: 1,
        },
        tap:{
            scale:0.9,
        }
     }}
     transition={{type:"keyframes",ease:"linear"}}
     style={{
        backgroundColor:"var(--sli)",
     }}
     key={key} className='review-slide w-[32vw] tab:w-[45vw] mob:w-[93vw] h-[32vw] tab:h-[50vw] mob:h-[520px] px-[45px] py-[45px] mob:px-[30px] bg-[var(--sli)] relative overflow-hidden flex flex-col items-start justify-between flex-shrink-0 rounded-[15px]'>
        <div className="client-photo pointer-events-none w-[60px] h-[60px] rounded-full overflow-hidden">
            <Image 
             src={customerImg}
             className="object-cover w-full h-full"
            />
        </div>
        <div className="review relative top-[-1vw]">
            <p className={`${flag?"text-black":""} text-[1.5vw] tab:text-[2.3vw] mob:text-[24px]`}>
                "{review}"
            </p>
        </div>
        <div className="client-details">
            <div className="client-name mb-[3px]">
                <h2 className={`${flag?"text-black":""} font-[100] tracking-[0.5px] tab:text-[16px]`}>
                    {name}
                </h2>
            </div>
            <div className="client-position">
                <p className={`${flag?"text-[#121212ea]":"text-[#fffd] text-[16px] tab:text-[15px]"}`}>
                    {occupation}
                </p>
            </div>
        </div>
        <motion.div
         style={{backgroundColor:quoteColor}}
         className="review-slide-quote absolute pointer-events-none right-[30px] top-[40px] w-[5vw] tab:w-[6.5vw] mob:w-[13vw] h-[5vw] tab:h-[6.5vw] mob:h-[13vw]">
        </motion.div>
    </motion.div>
  )
}

export default Slide
