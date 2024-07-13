'use client'
import { motion } from 'framer-motion'
import React from 'react'
import TransitionLink from '../TransitionLink/TransitionLink'
import { useRouter } from 'next/navigation'

const Button = ({value, href, keyPass}) => {
  const router = useRouter();
  return (
    <TransitionLink href={href} router={router} className={""} key={keyPass}>
        <motion.div
        initial={'init'}
        whileHover={'hover'}
        className='rounded-full border-[0.5px] border-[var(--bor)] bg-yellow flex items-center justify-between gap-[15px] tab:gap-[12px] px-[10px] tab:px-[8px] pl-[20px] tab:pl-[18px] py-[5px] tab:py-[4px]'>
            <div className="text-wrap">
                <h2 className='text-black tab:text-[16px] font-[600]'>
                    {value}
                </h2>
            </div>
            <div className="circle bg-white w-[50px] tab:w-[45px] h-[50px] tab:h-[45px] rounded-full">
                <div className="circle-inner relative rotate-[-40deg] rounded-full w-full h-full flex items-center justify-center overflow-hidden">

                    <motion.div 
                    variants={{
                        init:{
                            scale: 1,
                        },
                        hover:{
                            scale: 0,
                        }
                    }}
                    className="circle-overlay relative h-full w-full bg-black rounded-full scale-1">
                    </motion.div>

                    <motion.img
                    variants={{
                        init:{
                            left:"50%",
                        },
                        hover:{
                            left:"150%",
                            transition:{left:{
                                type:"spring",

                            }},
                            // transition:{type:"spring"}
                        }
                    }}
                    src={'./assets/arrow2.png'} alt="" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] tab:w-[17px] h-[20px] tab:h-[17px]' style={{filter:"invert(1)"}} />

                    <motion.img 
                    variants={{
                        init:{
                            left:"-50%",

                        },
                        hover:{
                            left:"50%",
                            transition:{left:{
                                type:"spring"
                            }},
                            transform:"translateX(-50%) translateY(-50%)",
                        }
                    }}
                    src={'./assets/arrow2.png'} alt="" className='absolute -left-1/2 top-1/2 -translate-y-1/2 w-[20px] h-[20px]' style={{filter:"invert(0)"}} />

                </div>
            </div>
        </motion.div>
    </TransitionLink>
  )
}

export default Button
