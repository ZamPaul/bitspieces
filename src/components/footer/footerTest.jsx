"use client"
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePathname, useRouter } from 'next/navigation'
import TransitionLink from '../TransitionLink/TransitionLink'
import SocialButton from '../SocialButton/Socialbutton'
import SocialLogo from '../SocialLogo/SocialLogo'
import { m } from 'framer-motion'

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
                <h2 className='link text-black mob:text-[14px]'>
                    © Bits & Pieces. All rights reserved
                </h2>
                <div className="links flex gap-[20px]">
                    {
                        lowerLinks.map( (link,i) => 
                            <FooterLowerLink value={link.value} href={link.href} keyPass={`Footer_lower_link_${i}`}/>
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
        <div className="footer-left w-[50%] tab:w-[25%] mob:w-full flex flex-col justify-between items-start gap-[5vw]">
            <h1 className='font-[mon] font-[900] text-[3vw] uppercase leading-[1.2em] text-black tracking-[1px]'>
                We are Your<br/>Creative Partners
            </h1>
            <CTA/>
        </div>
    )
}

const CTA = () => {
    return (
        <div className="call-to-action tab:hidden mob:hidden flex justify-between items-end gap-[2.5vw]">
            <div className="contact-wrap flex flex-col items-start gap-[1vw]">
                <h2 className='text-[#121212b4] font-[900] uppercase mb-[8px]'>
                    Contact:
                </h2>
                <SocialButton value={'+971566931759'} href={'tel:+971566931759'} target={"_blank"}/>
                <SocialButton value={'info@bitspieces.org'} href={'mailto:info@bitspieces.org'} target={"_self"}/>
            </div>
            <div className="location-wrap flex flex-col items-start gap-[1vw]">
                <p className='text-[#121212] font-[100] mb-[5px]'>
                    Warehouse no. 9, 23rd Street, Al Quoz 1st Industrial, . P.O Box 282747, Dubai UAE
                </p>
                <SocialButton value={'Locate Us'} href={'https://maps.app.goo.gl/WYEXbw32Mp1pFp3A9'} target={"_blank"}/>
            </div>
        </div>
    )
}

const Right = () => {
    return (
        <div className="footer-right w-[45%] tab:w-[75%] mob:w-full flex mob:flex-col justify-start items-start gap-[0vw] tab:gap-[8vw]">
            <div className="social-and-info pl-[2vw] h-full flex flex-col justify-between items-start gap-[2vw] mob:gap-[4vw]">

                <div className="social-links flex flex-col gap-[1vw]">
                    <div className="social-heading">
                        <h2 className='text-[#121212b4] uppercase font-[600] mb-[8px]'>
                            Socials:
                        </h2>
                    </div>
                    <div className="social-links-wrap flex gap-[1vw] items-start">
                        {
                            social.map((link, i) => {
                                return (
                                    <SocialLogo href={link.href} src={link.src} key={`Social_logo_${i}`}/>
                                )
                            })
                        }
                    </div>
                    
                </div>

                <div className='info flex flex-col text-start gap-[2vh] mob:gap-[4vw]'>
                    {/* // visible only on tablets */}

                    <div className="tab-only-contact py-[4vh] mob:py-[4vw] hidden tab:flex mob:flex gap-[1vw] mob:gap-[3vw] flex-col">
                        <SocialButton value={'info@bitspieces.org'} href={"mailto:info@bitspieces.org"} target="_blank"/>
                        <SocialButton value={'+971566931759'} href={'tel:+971566931759'} target="_self"/>
                    </div>

                    <p className='text-black text-[17px] mob:text-[15px]'>
                        Through constant development and innovation, unwavering professionalism, consistency, timely delivery, and dedication, our machinery of limitless creativity has allowed us to grow professionally our experience and build a solid reputation in the business throughout the years.
                    </p>
                    <p className='text-black text-[17px] mob:text-[15px]'>
                        We strive to continue learning and further improve our skills and craftmanship to ensure top-notch service we deliver to our valued clients.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default FooterTest