import React, { useEffect, useRef, useState } from 'react'
import Project from '../Project/project'
import getGallery from './getGallery'
import { shuffledArray } from '../hooks/data'

const DisplayGallery = ({service}) => {

  const projects = useRef([])

  const [array, setArray] = useState([])

  useEffect(()=>{
    service=="all" ? setArray(shuffledArray.slice(0,25)) : setArray(getGallery(service))
  },[])


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
