'use client'
import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'

const paths = ['M60 0, L20 40 L40 60 L60 40 L40 20','M23.5 83, L63.5 43 L83.5 63 L63.5 83 L43.5 63']

const Svg = ( {stroke, fill, px} ) => {
  return (
    <div className='flex items-center justify-center'>
      <svg viewBox='0 0 100 100'>
        {
          paths.map((path,i) => {
            return (
              <motion.path className="logo-svg-path" style={{fill:fill, stroke:stroke}} key={i} d={path} strokeWidth={px}/>
            )
          })
        }
      </svg>
    </div>
  )
}

export default Svg

