"use client"
import React, { useEffect, useState } from 'react'

// W w A a D d Q q'

const Getdimensions = () => {

  const [dimensions, setDimensions] = useState({w:window.innerWidth, h:window.innerHeight})

  const setdimensions = () => {
    setDimensions({w:window.innerWidth, h:window.innerHeight})
  }

  useEffect(()=>{
    window.addEventListener("resize",setdimensions)
    return () => {
      window.removeEventListener("resize",setdimensions)
    }
  },[])

  return dimensions
}

export default Getdimensions
