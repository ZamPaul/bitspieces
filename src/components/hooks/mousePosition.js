"use client"
import { useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useState } from 'react'

// W w A a D d Q q'

const MousePosition = () => {
  
  const [mouse, setMouse] = useState({x:0, y:0})

  // const mouse = {
  //   x: useMotionValue(0),
  //   y: useMotionValue(0)
  // }

  const mousemove = (e) => {
    const {clientX, clientY} = e
    setMouse({x:clientX, y:clientY})
  }

  useEffect(()=>{
    window.addEventListener("mousemove",mousemove)
    return () => {
        window.removeEventListener("mousemove",mousemove)
    }
  },[])

  return mouse
}

export default MousePosition
