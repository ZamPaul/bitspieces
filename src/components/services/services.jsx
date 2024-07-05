import React from 'react'
import Button from '../button/button'

const services = [
    {
        name:"Art department",
        src:"./assets/art/art1.webp",
        extras:["Commercial Set Design","Props Fabrication","Film Set Design","Stage Design","Video Set Design","Scenic Design","Documentaries Set"]
    },
    {
        name:"Event & Artist Management",
        src:"./assets/event/event1.webp",
        extras:["Conference","Birthday party","Wedding","Entertainment & Artist Management","Gift souvenir supply","Product launches","Trade shows","Entertainers promoters"]
    },
    {
        name:"Advertising department",
        src:"./assets/ad/ad1.webp",
        extras:["Outdoor printing","Indoor printing","Offset printing","Signages Design"]
    },
    {
        name:"Rental Equipments",
        src:"./rentals/vintgeprops.webp",
        extras:["Event furniture","Sport and Games","Kids Party Equipments","Kitchen and crockery","Vintage props","Arabic items","Tents and lighting","SFX machine","Musical instruments"]
    }
]

let p = "From films to events, we excel in crafting visual aesthetics with top-tier craftsmanship. Our team offers bespoke solutions, sustainable options, and impactful branding services for events, activations, and beyond. Explore our versatile offerings, tailored to meet your every need."

const ServicesWrap = () => {
  return (
    <div className="services-gallery relative z-[30] rounded-b-[20px] bg-black mt-[10vh] tab:mt-[5vh] mob:mt-[5vh] pb-[15vh] tab:pb-[10vh] mob:pb-[10vh] flex justify-center w-full">
      <div className="services-gallery-inner w-[93%] pt-[10vh] tab:pt-[7vh] mob:pt-[5vh] flex flex-col gap-[10vh] tab:gap-[7vh] mob:gap-[5vh] items-center justify-center border-t-[1px] border-t-[var(--bor)]">
        <div className="upper-text w-full flex mob:flex-col mob:gap-[5vh] items-start justify-between">
            <p className='text-[2.2vw] mob:text-[20px] w-[65%] mob:w-full text-[#fff]'>
                {p}
            </p>
            <Button value={"Our Work"} href={"/work"} keyPass={"Service-page-work-btn"}/>
        </div>
        <div className='gallery-mapper-wrap flex flex-col w-full'>
            <ServicesMap/>
        </div>
      </div>
    </div>
  )
}

const ServicesMap = () => {
    return (
        services.map((item, i) => {
            return (
                <div key={`Service_${i}`} className="service-item first:border-t-[1px] first:border-t-[var(--bor)] border-b-[1px] border-b-[var(--bor)] flex mob:flex-col items-start justify-between mob:items-start mob:justify-center w-full py-[8vh] tab:py-[6vh] mob:py-[6vh] mob:gap-[5vh]">
                    <div className="left h-full mob:h-fit flex flex-col items-start justify-center w-[55%] mob:w-full gap-[1.5vw] tab:gap-[3vw] mob:gap-[3vh]">
                        <h1 className='text-[2.3vw] tab:text-[2.8vw] mob:text-[7vw] text-[#fff] uppercase'>
                            {item.name}
                        </h1>
                        <div className="extras w-full flex flex-wrap justify-start gap-[15px] gap-y-[18px]">
                            <ExtrasMapper arr={item.extras}/>
                        </div>
                    </div>
                    <div className="right w-[35%] mob:w-full h-[18vw] mob:h-[30vh] rounded-[15px] overflow-hidden">
                        <img src={item.src} alt="" className='w-full h-full object-cover pointer-events-none'/>
                    </div>
                </div>
            )
        })
    )
}

export default ServicesWrap


const ExtrasMapper = ({arr}) => {
    return (
        arr.map((text, i) => {
            return (
                <div key={i} className="extra-item relative flex items-center py-[10px] px-[15px] tab:py-[8px] tab:px-[13px] flex-shrink-0 rounded-full border-[1px] border-yellow">
                    <h2 className='text-[#fff] tab:text-[12px] mob:text-[15px] leading-none'>
                        {text}
                    </h2>
                </div>
            )
        })
    )
}