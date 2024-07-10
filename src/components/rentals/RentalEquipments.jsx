"use client"
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Fixedframe from './Fixedframe'
import gsap from 'gsap'
import Getdimensions from '../hooks/getdimensions'

// W w A a D d Q q'

const equipments = [
    {
        item:"Event Furniture",
        count:"224",
        backColor:"#d2e5d8",
        p:"Discover a stylish selection of event furniture, from elegant seating to functional tables, designed to enhance the ambiance and comfort of any event.",
        src:"./rentals/eventfurniture.webp"
    },
    {
        item:"Event Decoration",
        count:"167",
        backColor:"#e5d4e6",
        p:"Transform your venue with our exquisite event decorations, including centerpieces, drapery, and themed decor, to create a captivating atmosphere.",
        src:"./assets/event/event3.webp",
    },
    {
        item:"Kids Furniture",
        count:"189",
        backColor:"#d1e3d3",
        p:"Create a fun and safe environment for the little ones with our range of vibrant and child-friendly furniture, perfect for any kids' event.",
         src:"./assets/heroposter2.webp",
    },
    {
        item:"Sport & Game",
        count:"196",
        backColor:"#f1ffb4",
        p:"Add excitement to your event with our sports and game rentals, featuring equipment and setups for a variety of engaging activities.",
        src:"./assets/work/work4.webp"
    },
    {
        item:"Kitchen & Crockey",
        count:"204",
        backColor:"#d2e5d8",
        p:"Equip your event with our premium kitchen and crockery rentals, offering everything from cookware to elegant dinnerware for a seamless dining experience.",
        src:"./rentals/kicrockery.webp"
    },
    {
        item:"Vintage Props",
        count:"320",
        backColor:"#e5d4e6",
        p:"Infuse charm and character into your event with our unique vintage props, ideal for creating nostalgic and themed settings.",
        src:"./rentals/vintgeprops.webp"
    },
    {
        item:"Tents & Lighting",
        count:"420",
        backColor:"#F1F1F1",
        p:"Ensure comfort and set the perfect mood with our versatile tents and lighting options, suitable for outdoor events and various weather conditions.",
        src:"./assets/art/art2.webp"
    },
    {
        item:"Music Instruments",
        count:"123",
        backColor:"#cac1e2",
        p:"Elevate your event’s entertainment with our selection of high-quality music instruments, catering to professional musicians and live performances.",
        src:"./rentals/music.webp"
    },
]

const RentalEquipments = () => {
    
  const equipmentsRefs = useRef([])

  const [frameOpen, setFrameOpen] = useState(false)

  const mouseEnter = () => {
    setFrameOpen(true)
  }

  const mouseLeave = () => {
    setFrameOpen(false)
    // setting the euipments bck to 0B Blur n norml scle
    equipmentsRefs.current.forEach((elem)=>{
        gsap.to(elem,{
            opacity: 1,
            filter:"blur(0px)",
            scale:1,
        })
    })
    // setting the bck color bck to #F1F1F1
    gsap.to(".rentals-back-anim",{
        backgroundColor: "#F1F1F1",
        duration:.4,
        ease:"power2.inOut"
    })
    gsap.to(".offers-wrap",{
        backgroundColor: "#F1F1F1",
        duration:.4,
        ease:"power2.inOut"
    })
  }

  return (
    <>
    <div className="equipments-wrapper relative pb-[15vh] tab:pb-[10vh] mob:pb-[10vh] z-[30] w-full flex justify-center">
      <div 
       onMouseEnter={mouseEnter}
       onMouseLeave={mouseLeave}
       className="eqiupments-inner w-[93%] border-t-[0.1px] border-t-[#12121270] flex flex-col items-center justify-center">
        {
            equipments.map( (elem, i) => {
                return (
                    <EquipmentItem i={i+1} backColor={elem.backColor} p={elem.p} ref={equipmentsRefs} item={elem.item} count={elem.count} key={`Equipment_${i+1}`} src={elem.src}/>
                ) 
            })
        }
      </div>
    </div>
    <Fixedframe frameOpen={frameOpen}/>
    </>
  )
}

const EquipmentItem = forwardRef( ( {item ,backColor ,count ,i ,key, p, src}, ref ) => {

    const dimensions = Getdimensions();

    const mouseEnter = () => {
        if(dimensions.w>=1024 && dimensions.h<1000){
            // chnging the frme imges setting opcity to 0 n 1
            gsap.set(".frame-images-wrapper img",{
                opacity:0,
            })
            gsap.set(`.frame-images-wrapper img:nth-child(${i})` , {
                opacity:1,
            })
            
            // bluring nw scling up the euipments on hover 
            ref.current.forEach((elem)=>{
                gsap.to(elem,{
                    opacity: 0.5,
                    filter:"blur(2px)",
                    scale:0.95,
                })
            })
            gsap.to(ref.current[i-1],{
                opacity: 1,
                filter:"blur(0px)",
                scale:1,
            })

            // chnge bckColor of the rpper on hover...
            gsap.to(".rentals-back-anim",{
                backgroundColor: backColor,
                duration:.4,
                ease:"power2.inOut"
            })
            gsap.to(".offers-wrap",{
                backgroundColor: backColor,
                duration:.4,
                ease:"power2.inOut"
            })
        }
    }
    
    return (
        <div
        ref={refer => ref.current[i-1] = refer} 
        onMouseEnter={mouseEnter}
        key={key} className="equipment py-[10vh] tab:py-[7vh] mob:py-[6vh] border-b-[1px] border-b-[#12121270] bor w-full flex mob:flex-col justify-between cursor-pointer tab:items-center">
            <div className="left-title-count-img mob:w-full flex flex-col items-start gap-[15px]">
                <h1 className='text-black text-[3vw] tab:text-[3.3vw] mob:text-[8vw]'>
                    {item}
                </h1> 
                {/* {"only on tb n mobile"} */}
                <div className="equipment-img hidden tab:flex mob:flex w-[230px] h-[130px] mob:w-[93vw] mob:h-[48vw] overflow-hidden rounded-[15px] mb-[10px]">
                    <img src={src} className='h-full w-full object-cover' alt="" />
                </div>
                <div className="item-count-box relative flex items-center py-[10px] px-[25px] rounded-[50px] border-[1px] border-[#12121270]">
                    <h2 className='text-[#121212bd] font-[100] text-[18px] tab:text-[15px] mob:text-[15px]'>
                        {count} Items
                    </h2>
                </div>
            </div>
            <div className="right-p pt-[15px] tab:pt-0 mob:pt-[30px] w-[50%] mob:w-full flex justify-end">
                <p className='text-[#121212bd] font-[100] text-[20px] tab:text-[2.6vw] mob:text-[17px] text-left'>
                    {p}
                </p>
            </div>
        </div>
    )
})

export default RentalEquipments
