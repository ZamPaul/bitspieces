'use client'
import React, { forwardRef, useEffect, useLayoutEffect, useRef} from 'react'
import Svg from '../svg/svg'
import { useSpring } from 'framer-motion'
import gsap from 'gsap'
import { usePathname, useRouter } from 'next/navigation'
import Toggle from '../toggle/toggle'
import animatePageOut from '../hooks/animatePageOut'
import Link from 'next/link'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Header = () => {

  let h1ref = useRef(null)

  let outer = useRef(null)

  let svgLink = useRef(null)

  useLayoutEffect(()=>{
    gsap.set(outer.current,{
      height:`${svgLink.current.getBoundingClientRect().height}px`,
    })
  })

  let svg = {
    stroke:useSpring("#ffd100"),
    fill:useSpring("#ffd100")
  }

  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger)

    gsap.set("header .logo-outer .logo",{
      top:"0%"
    })

    const moveUp = gsap.to("header .logo-outer .logo",{
      top:"-100%"
    })
    
    ScrollTrigger.create({
      start:"top top",
      end:"10px top",
      trigger:"#main",
      animation: moveUp,
      scrub:1,
      // markers:true,
      invalidateOnRefresh: true,
    })

  })

  return (
    <header className='header flex justify-center pointer-events-none z-[1000] fixed w-[93%] mob:w-[90%] left-1/2 -translate-x-1/2 top-[5vh] tab:top-[2.5vh] mob:top-[4vh]'>
        <div className="header-inner w-full relative flex items-center justify-between">
            <div
            style={{
              pointerEvents:"all"
            }} 
            ref={outer} className="logo-outer relative overflow-hidden">
                <LogoLink href={"/"} ref={svgLink}>
                  <div className="flex items-center">
                    <div className="logo-svg w-[70px] h-[70px] mob:w-[80px] mob:h-[80px]">
                        <Svg stroke={svg.stroke} fill={svg.fill} px={'1px'}/>
                    </div>
                    <div className="logo-text mob:hidden flex select-none pointer-events-none">
                        <h1 ref={h1ref} className={`font-[nue] font-[100] leading-none text-[1.6vw] tab:text-[2.7vw] mob:text-[17px]`}>
                            Bits & Pieces.
                        </h1>
                    </div>
                  </div>
                </LogoLink>
            </div>
            <Toggle/>
        </div>
    </header>
  )
}

const LogoLink = forwardRef( ( {children, href}, ref ) => {

  const pth = usePathname();

  const router = useRouter();

  const click = (e) => {
    e.preventDefault()
    animatePageOut(href,router,pth)
  }

  return (
    <Link ref={ref} href={href} onClick={click} className='logo relative -left-[10px]'>
      {children}
    </Link>
  )
})

export default Header