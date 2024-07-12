import React from 'react'
import Svg from '../svg/svg'
import { motion } from 'framer-motion'
import { Circle } from '../about/process'

const Slide = ({review, flag, color, name, occupation, key, date}) => {
  return (
    <motion.div
     variants={{
        init:{
            scale: 1,
        },
        tap:{
            scale:0.9,
            transition:{ease:[0.33, 1, 0.68, 1],duration:0.4},
        }
     }}
     style={{
        backgroundColor:color
     }}
     key={key} className='review-slide w-[32vw] tab:w-[45vw] mob:w-[93vw] h-[32vw] tab:h-[50vw] mob:h-[520px] px-[45px] py-[45px] mob:px-[30px] bg-[var(--sli)] relative overflow-hidden flex flex-col items-start justify-between flex-shrink-0 rounded-[15px]'>
        <div className="date-project relative">
            <h2 className={`${flag?"text-black":"text-[#fff]"} uppercase`}>
                {date}
            </h2>
        </div>
        <div className="review relative top-[-1vw]">
            <p className={`${flag?"text-black":""} text-[1.6vw] tab:text-[2.4vw] mob:text-[24px]`}>
                "{review}"
            </p>
        </div>
        <div className="client-details">
            <div className="client-name mb-[3px]">
                <h2 className={`${flag?"text-black":""} font-[900] tracking-[0.5px] tab:text-[16px]`}>
                    {name}
                </h2>
            </div>
            <div className="client-position">
                <p className={`${flag?"text-[#121212ea]":"text-[#fffd] text-[16px] tab:text-[15px]"}`}>
                    {occupation}
                </p>
            </div>
        </div>
        <div className="back-svg absolute right-[-8vw] mob:right-[-25vw] bottom-[-8vw] mob:bottom-[-20vw] w-[30vw] tab:w-[35vw] mob:w-[100vw] h-[30vw] tab:h-[35vw] mob:h-[100vw]">
            <Svg fill={flag?"#12121230":"#ffffff10"} stroke={flag?"#12121212":"#ffffff07"} px={"0.5px"}/>
        </div>
    </motion.div>
  )
}

export default Slide
