"use client"
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Service from './ServiceItem'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { m, motion, useScroll, useTransform } from 'framer-motion'

const services = [
  {
    name:"Art department",
    src:"./assets/art/art1.webp",
    extras:["Commercial Set Design","Props Fabrication","Film Set Design","Stage Design","Video Set Design","Scenic Design","Documentaries Set"],
    p:"Our Art Department provides commercial set design, props fabrication, film and stage design, video and scenic design, and documentary set design. We create visually stunning and immersive environments tailored to your specific needs",
    text:"Projects",
    href:"/work-art-department"
  },
  {
      name:"Event & Artist Management",
      src:"./assets/event/event1.webp",
      extras:["Conference","Birthday party","Wedding","Entertainment & Artist Management","Gift souvenir supply","Product launches","Trade shows","Entertainers promoters"],
      p:"Our Event & Artist Management services include conferences, birthday parties, weddings, gift souvenirs, product launches, trade shows, and entertainer promoters. We ensure seamless execution and talent coordination, making every occasion memorable",
      text:"Projects",
      href:"/work-event-management"
  },
  {
      name:"Advertising department",
      src:"./assets/ad/ad1.webp",
      extras:["Outdoor printing","Indoor printing","Offset printing","Signages Design"],
      p:"Our Advertising Department specializes in outdoor and indoor printing, offset printing, and signage design. We craft impactful campaigns using innovative strategies and dynamic designs to captivate and engage your audience.",
      text:"Projects",
      href:"/work-advertisement"
  },
  {
      name:"Rental Equipments",
      src:"./rentals/vintgeprops.webp",
      extras:["Event furniture","Sport and Games","Kids Party Equipments","Kitchen and crockery","Vintage props","Arabic items","Tents and lighting","SFX machine","Musical instruments"],
      p:"Discover our extensive rental equipment range, including event furniture, sports and games, kids party equipment, kitchen and crockery, vintage props, Arabic items, tents and lighting, SFX machines, and musical instruments. We provide high-quality solutions for any occasion",
      text:"Explore Products",
      href:"/rentals"
  }
]

const HomeServiceSection = () => {
  return (
    <div className='home-services-section bg-black w-full rounded-t-[20px] flex justify-center pt-[10vh] tab:pt-[5vh] mob:pt-[5vh] pb-[18vh] tab:pb-[8vh] mob:pb-[7vh]'>
      <div className="home-services-inner relative w-[93%]">
        <TopText/>
        <ServicesGallery/>
      </div>
    </div>
  )
}

const ServicesGallery = () => {
  const bar = useRef(null)
  const gallery = useRef(null)
  const dotRefs = useRef([])

  useLayoutEffect(()=>{
    gsap.set(bar.current,{
      height:`${gallery.current.offsetHeight}px`
    })
  })

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)

    dotRefs.current.forEach((elem,i)=>{
      ScrollTrigger.create({
        trigger:dotRefs.current[i],
        start:"top 60%",
        end:"top 60%",
        // markers: true,
        onLeave: function(){
          console.log('complete')
          glow(i)
        },
        // onLeaveBack: function(){
        //   console.log('complete')
        //   glow(i)
        // }
      })
    })

  })

  const { scrollYProgress } = useScroll({
    target:gallery,
    offset:["start 55%","end 75%"],
  })

  const glow = (dot) => {
    gsap.to(dotRefs.current[dot],{
      scale: 1,
      opacity: 1,
      onComplete: function(){
        gsap.to(dotRefs.current[dot],{
          scale:0,
          opacity:0,
        })
      }
    })
  }

  const height = useTransform(scrollYProgress, [0,1], ["0%","100%"])

  return (
    <div className="services-gallery relative mt-[5vh] tab:mt-[0vh] mob:mt-[0vh] w-full flex items-start justify-between">

      <div ref={bar} className="bar relative h-[100%] w-[2px] bg-[#ffffff69] rounded-[20px] flex flex-col justify-between">
        <motion.div style={{height}} className="bar-inner w-full bg-[#fff] rounded-[20px]">
        </motion.div>
        {
          [...Array(4)].map((_, i)=>{
            return (
              <div
               className="dot absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-0 w-[10px] h-[10px] rounded-full">
                <div className="dot-inner relative w-full h-full">
                  <div ref={ref => dotRefs.current[i] = ref} className="glow-back absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] scale-0 bg-[#ffffff9c] rounded-full">
                  </div>
                  <div className="dot-front bg-[#ffffff] w-full h-full rounded-full relative">
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      
      <div ref={gallery} className="services-right-wrap flex flex-col items-start justify-start">
        {
          services.map( (item,i) => {
            return (
              <Service btnText={item.text} href={item.href} img={item.src} service={item.name} key={`Service_item_${i}`} description={item.p} count={i+1}/>
            )
          } )
        }
      </div>

    </div>
  )
}

const TopText = () => {
  return (
    <div className="services-top-info pb-[7vh] w-full flex flex-col justify-start">
      <p className='text-[3vw] tab:text-[4vw] mob:text-[7vw] leading-[1.35em]'>
        We offer top-tier services in <span className='text-[3vw] tab:text-[4vw] mob:text-[7vw] para-link'>art direction</span> and <span className='text-[3vw] tab:text-[4vw] mob:text-[7vw] para-link'>custom props</span> that transform spaces and captivate <span className='text-[3vw] tab:text-[4vw] mob:text-[7vw] para-link'>audiences</span>.
      </p>
    </div>
  )
}

export default HomeServiceSection
