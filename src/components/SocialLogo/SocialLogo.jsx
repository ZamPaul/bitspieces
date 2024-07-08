import React from 'react'
import {motion} from "framer-motion"

const SocialLogo = ({href, src}) => {
  return (
    <motion.a
    href={href}
    target="_blank"
    initial={"init"}
    whileHover={"hover"} 
    className='social-logo-wrap relative w-[45px] h-[45px] rounded-full overflow-hidden border-[0.1px] border-[#1212129a] bg-white grid place-items-center'>
        <motion.div
         variants={{
            init:{
                scale:1,
            },
            hover:{
                scale: 0,
            }
         }}
         className="overlay bg-yellow w-full h-full relative">
        </motion.div>
        <img src={src} alt="" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] object-cover'/>
    </motion.a>
  )
}

export default SocialLogo
