"use client"
import React from 'react'
import Svg from '../svg/svg'

const Card = ({value1, value2, num, keyrefer, style}) => {
  return (
    <div
     style={style}
     key={keyrefer} className='relative overflow-hidden py-[30px] w-[390px] tab:w-[280px] mob:w-[93vw] rounded-[20px] gap-[20px] mob:gap-[25px] flex flex-col justify-between items-start flex-shrink-0 px-[25px] shadow-[0_35px_60px_-15px_#12121220] border-[0.1px] border-[#12121220]'>
        <div className="bck-svg w-[300px] absolute right-[-80px] bottom-[-80px]">
            <Svg stroke={"#12121210"} fill={"#12121210"} px={"0.5px"}/>
        </div>
        <div className="card-upper relative w-full flex justify-between">
            <div className="title">
                <h1 className='text-black font-[600] text-[20px] tab:text-[17px] mob:text-[22px]'>
                    {value1}
                </h1>
            </div>
            <div className="card-number">
                <h2 className='text-[#121212cc] text-[20px] tab:text-[14px]'>
                    0{num}
                </h2>
            </div>
        </div>
        <div className="card-lower relative flex justify-start pr-[30px]">
            <p className='text-[17px] tab:text-[14px] text-[#121212bd]'>
                {value2}
            </p>
        </div>
    </div>
  )
}

export default Card
