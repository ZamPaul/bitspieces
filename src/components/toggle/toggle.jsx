"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Menu from '../menu/menu'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

const lines = [
  {
    style:{
      top:"0px",
      transformOrigin:"25% 50%"
    },
    variants:{
      close:{
        // transform:"rotte()"
        rotate:"0deg",
        x:0,
      },
      open:{
        rotate:"45deg",
        x:"2px",
      }
    }
  },
  {
    style:{
      bottom:"0px",
      transformOrigin:"25% 50%"
    },
    variants:{
      close:{
        // transform:"rotte()"
        rotate:"0deg",
        x:0
      },
      open:{
        rotate:"-45deg",
        x:"2px"
      }
    }
  }
]

const Toggle = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const overlay = useRef(null)

  const pth = usePathname()

  const click = () => {
    setMenuOpen(!menuOpen)
  }

  const turnColor = (color) =>{
    gsap.to(overlay.current,{
      backgroundColor:color
    })
  }

  const overlaySetter = (blur, bri, pointer) => {
    gsap.set(".menu-overlay",{
      backdropFilter: `blur(${blur}px) brightness(${bri}%)`,
      pointerEvents:pointer
    })
  }

  useGSAP(()=>{
    menuOpen ? overlaySetter(2,50,"all") : overlaySetter(0,100,"none")
    if(menuOpen){
      setTimeout(() => {
        setMenuOpen(false)
      }, 500);
    }
  },[pth])

  const changeOverlay = (blur, bri, pointer) => {
    gsap.to(".menu-overlay",{
      backdropFilter: `blur(${blur}px) brightness(${bri}%)`,
      pointerEvents:pointer,
      ease:"power1.inOut",
      duration:.4,
    })
  }

  useGSAP(()=>{

    menuOpen ? turnColor("#fff") : turnColor("#ffd100")
    menuOpen ? changeOverlay(2, 50, "all") : changeOverlay(0, 100, "none")
    changeOverlay();

  },[menuOpen])

  return (
    <motion.div
     style={{
      pointerEvents:"all"
     }} 
     className='toggle-wrapper cursor-pointer w-[60px] h-[60px] rounded-full relative'>


      <AnimatePresence mode="wait">
          {menuOpen && <Menu/>}
      </AnimatePresence>
      
      <motion.div 
        onClick={click}
        initial="init"
        whileHover={"hover"}
        className="toggle relative w-full h-full bg-[#fff] rounded-full flex items-center justify-center shadow-[0_0_50px_-5px_#12121260]">
        <motion.div
         ref={overlay}
         variants={{
          init:{
            transform:`translateX(-50%) translateY(-50%) scale(1)`,
          },
          hover:{
            transform:`translateX(-50%) translateY(-50%) scale(0)`,
          }
         }}
         className="back-overlay bg-yellow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"/>
        <div className="lines-wrapper h-[12px] w-[28px] relative flex flex-col justify-center gap-[5px]">
          {
            lines.map( (line, i) => {
              return (
                <motion.div
                 initial="close"
                 animate={menuOpen?"open":"close"}
                 variants={line.variants}
                 key={i}
                 style={line.style}
                 className="line absolute w-full h-[2px] rounded-[50px] left-0 bg-black"
                />
              )
            } )
          }
        </div>
      </motion.div>

    </motion.div>
  )
}

export default Toggle
