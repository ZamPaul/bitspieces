"use client"
import React, { useEffect, useRef, useState } from "react";
import fabrication from "../../../public/fabricationunit.webp";
import hallowen from "../../../public/assets/halloween.webp";
import photoshoot from "../../../public/vehicle_desert_shoot.webp";
import heroposter from "../../../public/assets/heroposter.webp";
import heroposter2 from "../../../public/assets/heroposter2.webp";
import crew from "../../../public/assets/crew.jpg"
import kitchen from "../../../public/assets/wooden_kitchen.jpg"
import fire from "../../../public/assets/desert_bonfire.jpg"
import sfx from "../../../public/assets/sfx_desert_fire.jpg"
import Image from "next/image";
import Getdimensions from "../hooks/getdimensions";
import { motion } from "framer-motion";
import Cursor from "../Cursor/cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const imgs = [
  {
    src: hallowen,
    width: "20vw",
    height: "16vw",
  },
  {
    src: crew,
    width: "25vw",
    height: "20vw",
  },
  {
    src: fabrication,
    width: "25vw",
    height: "30vw",
  },
  {
    src: photoshoot,
    width: "35vw",
    height: "25vw",
  },
  {
    src: fire,
    width: "28vw",
    height: "21vw",
  },
  {
    src: kitchen,
    width: "20vw",
    height: "16vw",
  },
  {
    src: heroposter,
    width: "28vw",
    height: "23vw",
  },
  {
    src: sfx,
    width: "20vw",
    height: "16vw",
  },
  {
    src: heroposter2,
    width: "35vw",
    height: "25vw",
  },
];

const ImageCarousel = () => {

  const dimensions = Getdimensions();

  const [constraints,setconstraints] = useState(0)

  useEffect(()=>{
    if(dimensions.w<=1024 && dimensions.h>=1000){
        setconstraints(dimensions.w*1.8)
    }else if(dimensions.w<=576 && dimensions.h<1000){
        setconstraints(dimensions.w*4)
    }else{
        setconstraints(dimensions.w)
    }
  },[dimensions])

  const ref = useRef(null)

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.to(ref.current,{
      x:"-20vw"
    })
    ScrollTrigger.create({
        start:"-20% bottom",
        end:"120% top",
        trigger:".image-carousel-wrapper .carousel-inner",
        scrub: true,
        animation:anim,
        // markers: true,
    })
  },[])

  return (
    <>
    <div ref={ref} className="image-carousel-wrapper relative w-full flex justify-center pt-[18vh] mob:py-[6vh] tab:py-[7vh] bg-black">
      <motion.div
       drag="x"
       dragConstraints={{left:-constraints, right:constraints}}
       initial={"init"}
       whileTap={"tap"}
       variants={{
          init:{
              cursor:"grab",
          },
          tap:{
              cursor:"grabbing"
          }
       }}
       className="carousel-inner about-cursor-scale-up overflow-hidden w-fit flex flex-shrink-0 justify-center items-center gap-[3vw]">
        {imgs.map((elem, i) => {
          return (
            <motion.div
             variants={{
                init:{
                    scale:1,
                },
                tap:{
                    scale:0.9,
                }
             }}
             transition={{type:"keyframes",ease:"linear"}}
             style={{
                width:elem.width,
                height:elem.height
             }}
             key={i} className="carousel-item pointer-events-none select-none overflow-hidden rounded-[10px] flex flex-shrink-0">
              <Image
                src={elem.src}
                style={{
                  width: elem.width,
                  height: elem.height,
                  objectFit: "cover",
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
    </>
  );
};

export default ImageCarousel;
