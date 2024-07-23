"use client"
import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useRouter } from 'next/navigation'
import TransitionLink from '../TransitionLink/TransitionLink'
import SocialButton from '../SocialButton/Socialbutton'
import SocialLogo from '../SocialLogo/SocialLogo'

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
        label:"Instagram",
        src:"./instagram.png",
        href:"https://instagram.com/bits.pieces.events?igshid=YmMyMTA2M2Y="
    },
    {
        label:"Tiktok",
        src:"./tik-tok.png",
        href:"https://vt.tiktok.com/ZSdvMBvyn/"
    },
    {
        label:"Facebook",
        src:"./facebook.png",
        href:"https://www.facebook.com/profile.php?id=100082252547665"
    },
]

const lowerLinks = [
    {
        value:"Privacy Policy",
        href:"/privacy-policy"
    },
    {
        value:"Terms of Services",
        href:"/terms-of-services"
    }
]

const FooterTest = () => {

  let outer = useRef(null)
  let footer = useRef(null)

  let [lowerText, setLowerText] = useState("© Bits & Pieces. All rights reserved")

  useLayoutEffect(()=>{

    const setHeight = () => {
        const rect = footer.current.getBoundingClientRect()
        gsap.set(outer.current,{
            height:`${rect.height}px`
        })
    }

    setHeight()

    window.addEventListener("resize",setHeight)

    if(window.innerWidth<=576 && window.innerHeight<1000){
        setLowerText("© 2024")
    }

    return () => {
        window.removeEventListener("resize",setHeight)
    }
    
  },[])

  return (
    <div
     style={{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
     }}
     ref={outer} className="footer-outer w-full">
        <footer ref={footer} className='footer w-full fixed z-[20] mob:relative bottom-0 bg-[#F1F1F1] pt-[18vh] tab:pt-[10vh] mob:pt-[10vh] flex flex-col items-center justify-center'>
            <div className="footer-upper w-[93%] flex justify-between mob:flex-col mob:gap-[6vw]">
                <Left/>
                <Right/>
            </div>
            <div className="footer-lower border-t-[1px] py-[4vh] mob:py-[3vh] border-t-[#00000075] w-[93%] mt-[6vh] mob:mt-[3vh] flex justify-between">
                <h2 className='link text-black mob:text-[14px] mob:leading-none'>
                    {lowerText}
                </h2>
                <div className="links flex gap-[20px]">
                    {
                        lowerLinks.map( (link,i) => 
                            <FooterLowerLink key={`footer_link_${i}`} value={link.value} href={link.href} keyPass={`Footer_lower_link_${i}`}/>
                        )
                    }
                </div>
            </div>
       </footer>
    </div>
  )
}

const FooterLowerLink = ({href, value, keyPass}) => {

    const router = useRouter();

    return (
        <TransitionLink router={router}  href={href} className={""} key={keyPass}>
            <h2 className='link text-black mob:text-[14px]'>
                {value}
            </h2>
        </TransitionLink>
    )
}

const Left = () => {
    return (
        <div className="footer-left w-[50%] tab:w-[45%] mob:w-full flex flex-col justify-between items-start gap-[4vw] mob:gap-[10vw]">
            <h1 className='font-[mon] font-[900] text-[3vw] mob:text-[8vw] uppercase leading-[1.2em] text-black tracking-[1px]'>
                We are Your<br/>Creative Partners
            </h1>
            <CTA/>
        </div>
    )
}

const CTA = () => {
    return (
        <div className="call-to-action flex flex-col justify-between items-start gap-[1vw]">
            <h2 className='text-[#121212b4] font-[900] uppercase mb-[8px] mob:mb-[12px]'>
                Connect with Us:
            </h2>
            <div className="contact-wrap flex flex-col items-start gap-[1vw] mob:gap-[2vw]">
                <div className="upper flex tab:flex-col mob:flex-col tab:items-start gap-[1vw] mob:gap-[2vw]">
                    <div className="hidden tab:flex mob:flex">
                        <SocialButton value={'Locate Us'} href={'https://maps.app.goo.gl/WYEXbw32Mp1pFp3A9'} target={"_blank"}/>
                    </div>
                    <SocialButton value={'+971566931759'} href={'tel:+971566931759'} target={"_blank"}/>
                    <div className="tab:hidden mob:hidden">
                        <SocialButton value={'Locate Us'} href={'https://maps.app.goo.gl/WYEXbw32Mp1pFp3A9'} target={"_blank"}/>
                    </div>
                </div>
                <div className="lower">
                    <SocialButton value={'info@bitspieces.org'} href={'mailto:info@bitspieces.org'} target={"_self"}/>
                </div>
            </div>
        </div>
    )
}

const Right = () => {
    return (
        <div className="footer-right w-[45%] tab:w-[55%] mob:w-full flex mob:flex-col justify-start items-start gap-[0vw] tab:gap-[8vw]">
            <div className="social-and-info mob:w-full pl-[2vw] mob:pl-[0] h-full flex flex-col justify-between items-start gap-[2vw] tab:gap-[10vw] mob:gap-[6vw]">
                <div className='info mob:w-full flex flex-col text-start gap-[2vh] mob:gap-[4vw]'>

                    <p className='text-black text-[17px] mob:text-[15px]'>
                        Through constant development and innovation, unwavering professionalism, consistency, timely delivery, and dedication, our machinery of limitless creativity has allowed us to grow professionally our experience and build a solid reputation in the business throughout the years.
                    </p>
                    <p className='text-black text-[17px] mob:text-[15px]'>
                        We strive to continue learning and further improve our skills and craftmanship to ensure top-notch service we deliver to our valued clients.
                    </p>

                </div>
                <div className="social-links mob:w-full mob:justify-between mob:items-center flex flex-col gap-[1vw]">
                    <div className="social-heading">
                        <h2 className='text-[#121212b4] uppercase font-[600] mb-[5px]'>
                            Socials:
                        </h2>
                    </div>
                    <div className="social-links-wrap flex gap-[1vw] mob:gap-[2vw] items-start">
                        {
                            social.map((link, i) => {
                                return (
                                    <SocialLogo href={link.href} src={link.src} key={`Social_logo_${i}`}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTest