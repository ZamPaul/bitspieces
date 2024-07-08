"use client"
import React, { useEffect, useState } from 'react'
import DisplayGallery from './display-gallery'
import GetUpperText from './getUpperText'
import { findGallery } from '../hooks/data'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Pin from '../pin/pin'
import TransitionLink from '../TransitionLink/TransitionLink'


const WorkGallery = ({service}) => {

  return (
    <div className='work-wrapper w-full relative z-[30] rounded-b-[20px] bg-black pt-[35vh] tab:pt-[30vh] tab:pb-[5vh] flex justify-center'>
      <div className="work-inner w-[93%] flex flex-col">
        <Pin trigger={"#main"} endTrigger={".gallery-wrapper"} start={"top top"} end={"top top"} move={true}>
            <GetUpperText service={service}/>
        </Pin>
        <div className="gallery-wrapper relative bg-black w-full border-t-[0.1px] py-[10vh] tab:py-[5vh] mob:py-[5vh] mob:pb-[10vh] mt-[10vh] tab:mt-[5vh] mob:mt-[5vh] border-t-[var(--bor)]">
          <Filter service={service}/>
          <DisplayGallery service={service}/>
        </div>
      </div>
    </div>
  )
}

const Filter = ({service}) => {

    let filterArray = [
        {
            value:"All",
            href:"/work"
        },
        {
            value:"Event",
            href:"/work-event-management"
        },
        {
            value:"Art",
            href:"/work-art-department"
           
        },
        {
            value:"Advertisement",
            href:"/work-advertisement"
        }
    ]

    let curr = service=="All"?"All" : filterArray[findGallery.indexOf(service) + 1].value
    
    return (
        <div className="filter-wrapper relative w-full flex mob:flex-col justify-between items-center mob:items-start mb-[10vh] tab:mb-[5vh] mob:mb-[5vh] mob:gap-[30px]">
            <div className="left">
                <h2 className='text-[#ffffffc7]'>
                    Filter: {curr}
                </h2>
            </div>
            <div className="right absolute tab:relative mob:relative left-[65%] tab:left-0 mob:left-0 -translate-x-1/2 tab:-translate-x-0 mob:-translate-x-0 flex mob:flex-wrap mob:gap-y-[20px] gap-[15px]">
                {
                    filterArray.map((elem,i)=>{
                        return (
                            <FilterBtn key={`filter_btn_${i}`} value={elem.value} href={elem.href}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

const FilterBtn = ({value, key, href}) => {

    const pth = usePathname();

    const router = useRouter();

    return (
        <TransitionLink href={href} key={key} router={router} className={""}>
            <motion.div
             initial={"init"}
             whileHover={"hover"}
             variants={{
                init:{
                    backgroundColor:pth==href?"#ffd100":"#121212"
                },
                hover:{
                    backgroundColor:"#ffd100"
                }
             }}
             className={`py-[10px] mob:py-[8px] cursor-pointer rounded-full border-[0.1px] border-yellow px-[30px] mob:px-[25px]`}>
                <motion.h2 
                 variants={{
                    init:{
                        color:pth==href?"#121212":"#fff"
                    },
                    hover:{
                        color:"#121212"
                    }
                 }}
                 className='text-[20px] tab:text-[18px] mob:text-[17px]'>
                    {value}
                </motion.h2>
            </motion.div>
        </TransitionLink>
    )
}

export default WorkGallery
