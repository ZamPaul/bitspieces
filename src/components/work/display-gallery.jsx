"use client"
import React, { useRef } from 'react'
import Project from '../home/project'
import gsap from 'gsap'
import getGallery from './getGallery'
import { shuffledArray } from '../hooks/data'


const DisplayGallery = ({service}) => {

  const projects = useRef([])

  let array = service=="All" ? shuffledArray.slice(0,25) : getGallery(service)

  return (
    <div className="gallery-mapper w-full flex justify-between flex-wrap gap-y-[6vh]">
        {
            array.map( (proj,i) => {
                return (
                    <Project key={i} ref={projects} keyValue={i} title={proj.title} subTitle={proj.subTitle} src={proj.src}/>
                )
            })
        }
    </div>
  )
}

export default DisplayGallery
