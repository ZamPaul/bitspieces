"use client"
import React from 'react'
import Button from '../button/button'

const Service = ({service, href, btnText,count, key, description, img}) => {
  return (
    <div key={key} className='service-item py-[7vh] tab:py-[5vh] mob:py-[7vh] border-b-[1px] border-b-[var(--bor)] w-full flex mob:flex-col justify-between items-start mob:gap-[5vw]'>
      <div className="left-title-description flex tab:flex-col mob:flex-col tab:gap-[3vw] mob:gap-[5vw] justify-between items-start w-[70%] tab:w-[55%] mob:w-full">
        <div className="title-wrap flex gap-[10px]">
          <div className="service-count">
            <h2 className='text-[17px]'>
              0{count}.
            </h2>
          </div>
          <div className="service-title">
            <h2 className='text-[17px]'>
              {service}
            </h2>
          </div>
        </div>
        <div className="service-description text-left tab:w-full mob:w-full">
          <p className='w-[380px] tab:w-full mob:w-full text-[#fffd]'>
            {description}
          </p>
        </div>
      </div>
      {/* <div className="service-image">
        <img src={img} alt="" className='h-[12vw] w-[22vw] object-cover rounded-[15px]' />
      </div> */}
      <div className="service-btn flex">
        <Button value={btnText} href={href} keyPass={"Service_Btn"}/>
      </div>
    </div>
  )
}

export default Service