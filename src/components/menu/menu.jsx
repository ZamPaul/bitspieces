// W w A a D d Q q'
"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { social } from '../footer/footerTest'
import { usePathname, useRouter } from 'next/navigation'
import Getdimensions from '../hooks/getdimensions'
import TransitionLink from '../TransitionLink/TransitionLink'

const links = [
    {
        label:"Home",
        href:"/"
    },
    {
        label:"Work",
        href:"/work"
    },
    {
        label:"Blog",
        href:"/blog"
    },
    {
        label:"About",
        href:"/about"
    },
    {
        label:"Rentals",
        href:"/rentals"
    },
    {
        label:"Contact",
        href:"/contact"
    },
]

const linksVariants = {
    init:{
        opacity:0,
    },
    enter:(i)=>({
        opacity:1,
        transition:{delay: 0.5 + (i * 0.1),duration:.4,ease:[0.65, 0, 0.35, 1]}
    }),
    exit:(i)=>({
        opacity:0,
        transition:{delay:0,duration:.4,ease:[0.65, 0, 0.35, 1]}
    })
}

const socialVariants = {
    init:{
        opacity:0,
    },
    enter:(i)=>({
        opacity:1,
        transition:{delay: 0.5 + (i * 0.1),duration:.4,ease:[0.65, 0, 0.35, 1]}
    }),
    exit:(i)=>({
        opacity:0,
        transition:{delay:0,duration:.4,duration:.4,ease:[0.65, 0, 0.35, 1]}
    })
}

const headingVariants = {
    init:{
        opacity:0,
    },
    enter:{
        opacity:1,
        transition:{delay:0.5,duration:.4,ease:[0.65, 0, 0.35, 1]}
    },
    exit:{
        opacity:0,
        transition:{duration:.4,ease:[0.65, 0, 0.35, 1]}
    }
}

const Menu = () => {

  let pth = usePathname()

  const dimensions = Getdimensions();
  
  const router = useRouter();

  return (
    <motion.div 
    initial="close"
    variants={{
        close:{
            scale: 0,
            transformOrigin:"100% 0%",
            top:"15px",
            right:"15px",
        },
        open:{
            scale: 1,
            transformOrigin:"100% 0%",
            top:dimensions.w<=576?"-11px":"-15px",
            right:dimensions.w<=576?"-11px":"-15px",
            transition:{
                delay:0, 
                duration:.75, 
                ease:[0.76, 0, 0.24, 1],
            }
        },
        exit:{
            scale: 0,
            transformOrigin:"100% 0%",
            top:"15px",
            right:"15px",
            transition:{delay:0.2,duration:.75, ease:[0.76, 0, 0.24, 1]}
        }
    }}
    animate={"open"}
    exit={"exit"}
    className='menu-wrapper flex flex-col bg-yellow items-start justify-between w-[28vw] tab:w-[45vw] mini-tab:w-[50vw] mob:w-[95vw] h-[32vw] tab:h-[55vw] mini-tab:h-[60vw] mob:h-[125vw] absolute right-0 top-0 py-[30px] pt-[37px] pb-[40px] px-[40px] rounded-[20px]'>
      <div className="menu-links flex flex-col items-start gap-[5px]">
        <motion.div variants={headingVariants} initial={"init"} animate="enter" exit={"exit"} className="nav-heading w-[170%] border-b-[1px] pb-[8px] mb-[1.2vw] tab:mb-[2.3vw] mob:mb-[5vw] border-b-[#1212126b]">
            <h2 className='uppercase text-[#121212b2] text-[1vw] tab:text-[1.7vw] mob:text-[3.3vw] font-[900]'>
                navigation
            </h2>
        </motion.div>
        {
            links.map((link,i)=>{
                return (
                    <TransitionLink key={`Menu_link_${i}`} href={link.href} router={router} className={""}>
                        <motion.h2 custom={i} initial={"init"} variants={linksVariants} animate={"enter"} exit={"exit"} className={`${pth == link.href ? "active-link": "link"} text-[2.2vw] tab:text-[3.8vw] mob:text-[8.4vw] font-[900] text-black leading-[1.2em]`}>
                            {link.label}
                        </motion.h2>
                    </TransitionLink>
                )
            })
        }
      </div>
      <div className="social-links flex items-center gap-[15px]">
        {
            social.map((link, i) => {
                return (
                    <motion.a custom={i} initial={"init"} variants={socialVariants} animate={"enter"} exit={"exit"} key={i} href="#" className='link text-black font-[900]'>
                        {link.label}
                    </motion.a>
                )
            })
        }
      </div>
    </motion.div>
  )
}

export default Menu
