"use client"
import React, { useLayoutEffect, useRef } from 'react'
import Svg from '../svg/svg'
import Button from '../button/button'
import gsap from 'gsap'
import { usePathname, useRouter } from 'next/navigation'
import TransitionLink from '../TransitionLink/TransitionLink'
import animatePageOut from '../hooks/animatePageOut'
import FooterCtaButton from '../FooterCtaButton/FooterCtaButton'

// W w A a D d Q q'

export const links = [
    {
        label:"Work",
        href:"/work"
    },
    {
        label:"Services",
        href:"/services"
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

export const social = [
    {
        label:"Instagram"
    },
    {
        label:"Tiktok"
    },
    {
        label:"Facebook"
    },
]

const FooterTest = () => {

  let outer = useRef(null)
  let footer = useRef(null)

  useLayoutEffect(()=>{

    const setHeight = () => {
        const rect = footer.current.getBoundingClientRect()
        gsap.set(outer.current,{
            height:`${rect.height}px`
        })
    }

    setHeight()

    window.addEventListener("resize",setHeight)

    return () => {
        window.removeEventListener("resize",setHeight)
    }
    
  },[])

  return (
    <div
     style={{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
     }}
     ref={outer} className="footer-outer w-full relative">
        <footer ref={footer} className='footer w-full fixed mob:relative z-[20] bottom-0 bg-[#F1F1F1] pt-[18vh] tab:pt-[10vh] mob:pt-[10vh] flex flex-col items-center justify-center'>
            <div className="footer-upper w-[93%] flex justify-between mob:flex-col">
                <Left/>
                <Right/>
            </div>
            <div className="footer-lower border-t-[1px] py-[4vh] mob:py-[3vh] border-t-[#00000075] w-[93%] mt-[6vh] mob:mt-[3vh] flex justify-between">
                <h2 className='link text-black mob:text-[14px]'>© Bits & Pieces. All rights reserved</h2>
                <PrivacyPolicyBtn/>
            </div>
       </footer>
    </div>
  )
}

const PrivacyPolicyBtn = () => {

    const router = useRouter();

    return (
        <TransitionLink router={router} href={"/privacy-policy"} className={""} key={"PrivacyPolicyBtn"}>
            <h2 className='link text-black mob:text-[14px]'>
                Terms of Services
            </h2>
        </TransitionLink>
    )
}

const Left = () => {
    return (
        <div className="footer-left w-1/2 tab:w-[25%] mob:w-full flex flex-col justify-between items-start gap-[2vw]">
            <FooterLink href={"/"}>
                <Svg stroke="#121212" fill="#121212" px={"1px"}/>
            </FooterLink>
            <div className='tab:hidden mob:hidden'>
                <CTA/>
            </div>
        </div>
    )
}

const FooterLink = ( {children, href} ) => {

    const pth = usePathname();
  
    const router = useRouter();
  
    const click = () => {
      animatePageOut(href,router,pth)
    }
  
    return (
      <button onClick={click} className='logo-wrap relative w-[130px] tab:w-[90px] mob:w-[100px] h-[130px] mob:h-[100px] tab:h-[90px] mob:left-[-10px] left-[-25px] tab:left-[-10px] mb-[5vh]'>
        {children}
      </button>
    )
}

const CTA = () => {
    return (
        <div className="call-to-action flex flex-col gap-[2vw]">
                <div className=''>
                    <h1 className='font-[mon] font-[100] text-[2.5vw] uppercase leading-[1.2em] text-black tracking-[0px]'>
                        We Are Your<br/>Creative Partners
                    </h1>
                </div>
                <div className="flex items-center gap-[1vw]">
                    <FooterCtaButton value={'info@bitspieces.org'} href={'mailto:info@bitspieces.org'} target={"_self"}/>
                    <FooterCtaButton value={'+971566931759'} href={'tel:+971566931759'} target={"_blank"}/>
                </div>
        </div>
    )
}

const Right = () => {
    const pth = usePathname()
    const router = useRouter();
    return (
        <div className="footer-right w-1/2 tab:w-[75%] mob:w-full flex mob:flex-col justify-start items-start gap-[8vw] tab:gap-[8vw]">
            <div className="sitemap-and-address h-full flex flex-col justify-between gap-[6vh] tab:gap-[8vh] mob:gap-[8vw]">
                <div className="page-links flex flex-col items-start gap-[8px] mob:pl-[2vw]">
                    {
                        links.map((link,i) => {
                            return (
                                <TransitionLink href={link.href} router={router} key={i} className={'flex tab:bg-[] w-[230px] tab:w-[150px]'}>
                                    <h2 className={`${pth == link.href ? "active-link": "link"} text-[2.5vw] tab:text-[3.5vw] mob:text-[10vw] font-[900] text-black leading-[1.2em]`}>
                                        {link.label}
                                    </h2>
                                </TransitionLink>
                            )
                        })
                    }
                </div>
                <div className="address">
                    <p className='text-black text-[14px]'>
                        Warehouse no. 9, 23rd Street, Al Quoz 1st Industrial, . P.O Box 282747, Dubai UAE
                    </p>
                </div>
            </div>
            <div className="social-and-info h-full flex flex-col justify-between mob:gap-[4vw]">
                <div className="social-links flex flex-col items-start">
                    {
                        social.map((link, i) => {
                            return (
                                <a key={i} href="#" target="_blank" className='link text-black font-[900]'>
                                    {link.label}
                                </a>
                            )
                        })
                    }
                </div>
                <div className='info flex flex-col text-start gap-[1vh] mob:gap-[4vw]'>
                    <div className="tab-only-contact py-[4vh] mob:py-[4vw] hidden tab:flex mob:flex gap-[1vw] mob:gap-[3vw] flex-col">
                        <Button value={'info@bitspieces.org'}/>
                        <Button value={'+971566931759'}/>
                    </div>
                    <p className='text-black text-[14px]'>
                        Through constant development and innovation, unwavering professionalism, consistency, timely delivery, and dedication, our machinery of limitless creativity has allowed us to grow professionally our experience and build a solid reputation in the business throughout the years.
                    </p>
                    <p className='text-black text-[14px]'>
                        We strive to continue learning and further improve our skills and craftmanship to ensure top-notch service we deliver to our valued clients.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterTest