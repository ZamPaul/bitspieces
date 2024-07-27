
import React from 'react'
import Button from '../button/button'

const HomeAboutSection = () => {
  return (
    <div className='home-about-section relative bg-black w-full flex justify-center'>
      <div className="home-about-inner flex flex-col gap-[7vh] tab:gap-[5vh] mob:gap-[5vh] py-[10vh] tab:py-[6vh] mob:py-[6vh] w-[93%]">
        <TextIntro/>
        <AboutInfo/>
      </div>
    </div>
  )
}

const TextIntro = () => {
  return (
    <div className="text-info w-full flex flex-col justify-start">
      <p className='text-[3vw] tab:text-[4vw] mob:text-[7vw] leading-[1.35em]'>
        Based in the vibrant city of Dubai, we pride ourselves on delivering unparalleled <span className='text-[3vw] tab:text-[4vw] mob:text-[7vw] para-link'>creativity</span> and <span className='text-[3vw] tab:text-[4vw] mob:text-[7vw] para-link'>professionalism</span> in every project we undertake.
      </p>
    </div>
  )
}

const AboutInfo = () => {
  return (
    <div className="about-info-wrap pt-[7vh] tab:pt-[5vh] mob:pt-[5vh] w-full flex mob:flex-col justify-between items-start border-t-[1px] border-t-[var(--bor)]">
      <div className="about-info flex mob:flex-col mob:gap-[3vh] justify-between items-start w-[70%] mob:w-full">
        <div className="left-text">
        <h2 className='text-[#fffd]'>
          About Us:
        </h2>
        </div>
        <div className="mid-info-text relative w-[38vw] tab:w-[45vw] mob:w-full flex flex-col gap-[2vw] mob:gap-[3vh]">
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



export default HomeAboutSection
