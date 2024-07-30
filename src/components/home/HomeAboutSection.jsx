"use client"
import React, { useEffect } from 'react'
import Button from '../button/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HomeAboutSection = () => {
  return (
    <div className='home-about-section relative bg-black w-full flex justify-center'>
      <div className="home-about-inner flex flex-col gap-[6.5vh] tab:gap-[4.5vh] mob:gap-[5vh] py-[10vh] tab:py-[6vh] mob:py-[6vh] w-[93%]">
        <TextIntro/>
        <AboutInfo/>
      </div>
    </div>
  )
}

const TextIntro = () => {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const rotate = gsap.to(".home-about-left-img",{
      rotate:360,
    })
    ScrollTrigger.create({
      start:"top bottom",
      end:"bottom top",
      animation:rotate,
      trigger:".home-about-left-img",
      scrub:1,
      // markers: true
    })
  },[])

  return (
    <div className="text-info w-full flex mob:flex-col items-center mob:items-start gap-[2vw] mob:gap-[4vw] relative -left-[5px] mob:left-0">
      <div className="home-about-left-img h-[100px] w-[100px] mob:w-[80px] mob:h-[80px]"></div>
      <div className="text-wrap flex flex-col justify-start">
        <p className='text-[2.6vw] tab:text-[3.5vw] font-[100] font-[mon] tracking-[1px] uppercase mob:text-[6vw] leading-[1.3em]'>
          Dubai's Premier Creative<br/>Solutions Provider
        </p>
      </div>
    </div>
  )
}

const AboutInfo = () => {
  return (
    <div className="about-info-wrap relative pt-[7vh] tab:pt-[5vh] mob:pt-[5vh] w-full flex mob:flex-col justify-between items-start border-t-[1px] border-t-[var(--bor)]">
      <div className="about-info flex mob:flex-col mob:gap-[3vh] justify-between items-start w-[70%] mob:w-full">
        <div className="left-info-text relative w-[60vw] tab:w-[55vw] mob:w-full flex flex-col gap-[2vw] mob:gap-[3vh]">
          <p className='text-[#fff]'>
            Bits & Pieces is a premier art direction and props construction company based in Dubai, renowned for its exceptional craftsmanship in the commercial and film industries. With a dedicated team of creative and passionate professionals, we deliver impactful and innovative solutions that meet the highest standards. 
          </p>
          <p className='text-[#fff]'>
            Our commitment to integrity and excellence has established us as the go-to partner for prominent agencies and directors in the UAE and beyond. From art direction to event services, we strive to provide memorable experiences and top-notch service to our valued clients.
          </p>
        </div>
      </div>
      <div className="right-about-page-btn flex mob:mt-[5vh]">
        <Button href={"/about"} value={"Discover Us"} keyPass={"about_page_btn"}/>
      </div>
    </div>
  )
} 

// const Globe = () => {
//   return (
//     <div className="globe relative rounded-full w-[6vw] h-[6vw]">
//       {
//         [...Array(4)].map((_,i)=>{
//           return (
//             <div key={i} className="globe-line absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.1px] border-[#fff]">

//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

export default HomeAboutSection
