"use client"
import React, { useRef } from 'react'
import Button from '../button/button'
import Project from '../Project/project'

const Work = () => {
  return (
    <div className='home-work-section bg-black relative z-[30] w-full pt-[7vh] tab:pt-[5vh] pb-[15vh] tab:pb-[10vh] flex flex-col items-center gap-[4vw] tab:gap-[8vw] mob:gap-[10vw] rounded-b-[20px]'>
      <TextIntro/>
      <Gallery/>
      <Button value={'View Archive'} href={"/work"} keyPass={"home_work_btn"}/>
    </div>
  )
}

const TextIntro = () => {
  return (
    <div className="text-info w-[93%] flex flex-col justify-start pb-[6vh] tab:pb-[4.5vh] mob:pb-[3vh] border-b-[1px] border-b-[var(--bor)]">
      <p className='text-[3vw] font-[mon] tracking-[1px] leading-none mob:leading-[1.3em] uppercase tab:text-[4vw] mob:text-[7vw]'>
        Featured Projects
      </p>
    </div>
  )
}

let array = [
  {
    title:"Wedding - Rustic Theme",
    subTitle:"Event Management",
    src:"./assets/event/event4.webp",
  },
  {
    title:"Ice Cream & Coffee Cart",
    subTitle:"Advertising",
    src:"./assets/ad/ad2.webp"
  },
  {
    title:"NesCafe Green Set",
    subTitle:"Art department",
    src:"./assets/work/work3.webp"
  },
  {
    title:"Sports & Games",
    subTitle:"Rentals",
    src:"./assets/work/work4.webp"
  }
]

const Gallery = () => {

  const projects = useRef([])
  
  return (
    <div className="gallery-wrapper w-[93%] flex flex-wrap justify-between items-center gap-y-[6vh]">
      {
        array.map( (elem, i) => {
          return (
            <Project ref={projects} title={elem.title} subTitle={elem.subTitle} src={elem.src} keyValue={i} key={`home_project_${i}`}/>
          )
        } )
      }
    </div>
  )
}

export default Work