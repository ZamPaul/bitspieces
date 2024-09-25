"use client"
import React, { useEffect, useRef } from "react";
import { services } from "../home/HomeServices";
import Button from "../button/button";
import gsap from "gsap";
import ServiceCount from "./ServiceCount";
import ServiceDescription from "./ServiceDescription";
import ServiceImage from "./ServiceImage";

const ServiceGallery = ({selected,setSelected}) => {
  return (
    <div className="service-gallery w-full flex tab:flex-col justify-start items-start">
        <Left selected={selected} setSelected={setSelected}/>
        <Right selected={selected}/>
    </div>
  );
};

const Left = ({selected,setSelected}) => {

  const serviceHeadings = useRef([])

  useEffect(()=>{
    serviceHeadings.current.forEach((elem)=>{
        gsap.to(elem,{
            opacity:0.5,
        })
    })
    gsap.to(serviceHeadings.current[selected-1],{
        opacity: 1,
    })
  },[selected])

  const mouseEnter = (i) => {
    gsap.to(serviceHeadings.current[i],{
        opacity: 1,
    })
  }

  const mouseLeave = (i) => {
    if(i+1 !== selected){
        gsap.to(serviceHeadings.current[i],{
            opacity: 0.5,
        })
    }
  }

  const click = (i) => {
    setSelected(i+1)
  }

  return (
    <div className="service-left w-[50%] tab:flex tab:w-full tab:justify-between tab:items-end">
        <div className="service-headings-wrapper flex flex-col gap-[0vw] items-start">
            {
                services.map((service,i)=>{
                    return (
                        <div
                         onMouseEnter={() => {mouseEnter(i)}}
                         onMouseLeave={() => {mouseLeave(i)}}
                         ref={ref => serviceHeadings.current[i] = ref}
                         onClick={() => {click(i)}}
                         key={`Service_Item_${i}`} 
                         className={`service-heading opacity-[0.5] cursor-pointer px-[0vw] py-[1.2vw] border-b-[var(--bor)] border-b-[0px] rounded-[2px] flex items-center justify-start gap-[20px]`}>
                            <div className="service-line rounded-[50px] overflow-hidden w-[7vw] h-[1px]">
                                <div className="line-inner bg-yellow h-full w-[3vw]"></div>
                            </div>
                            {service.textElement}
                        </div>
                    )
                })
            }
        </div>
        <div className="projects-button flex gap-[1vw] mt-[2.5vw]">
                <Button value={"Projects"} href={"/work"}/>
                <Button value={"Rentals"} href={"/rentals"}/>
        </div>
    </div>
  )
};

const Right = ({selected}) => {
  return (
    <div className="service-right flex flex-col items-end">
        <div className="service-content-wrapper flex flex-col gap-[1vw]">
            <div className="service-images-wrapper relative w-[40vw] tab:w-[93vw] h-[28vw] tab:h-[60vw]">
                {
                    services.map( (service,i) => {
                        return (
                            <ServiceImage key={`Service_Image_${i}`} img={service.img} selected={selected} i={i}/>
                        )
                    } )
                }
            </div>
            <div className="servive-text-content-wrapper w-[40vw] tab:w-[93vw] flex justify-between items-start">
                <div className="service-count-wrap w-[5vw] relative overflow-hidden">
                    {
                        [...Array(4)].map((_,i)=>{
                            return (
                                <ServiceCount key={`Service_count_${i}`} num={i+1} selected={selected} i={i}/>
                            )
                        })
                    }
                </div>
                <div className="service-descriptions-wrap w-[30vw] relative">
                    {
                        services.map((service,i)=>{
                            return (
                                <ServiceDescription key={`Service_description_${i}`} p={service.p} selected={selected} i={i}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
};

export default ServiceGallery;
