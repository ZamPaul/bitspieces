"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from '../button/button'
import Project from './project'

const Work = () => {

  return (
    <div data-scroll-section className='bg-black relative z-[30] w-full py-[10vh] pb-[15vh] flex flex-col items-center gap-[4vw] tab:gap-[8vw] mob:gap-[10vw] rounded-b-[20px]'>
      <TextIntro/>
      <Gallery/>
      <Button value={'View Archive'} href={"/work"} keyPass={"home_work_btn"}/>
    </div>
  )
}

const TextIntro = () => {
  return (
    <div className="text-info w-[93%] flex flex-col justify-start gap-[2vw] mob:gap-[8vw] pr-[15vw] tab:pr-[0] mob:pr-[0]">
      <h2 className='text-grey text-[18px]'>
        Bits & Pieces
      </h2>
      <p className='text-[3vw] tab:text-[4vw] mob:text-[7vw] leading-[1.35em]'>
        Based in the vibrant city of Dubai, we pride ourselves on delivering unparalleled creativity and professionalism in every project we undertake.
      </p>
    </div>
  )
}

const Gallery = () => {

  const projects = useRef([])

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