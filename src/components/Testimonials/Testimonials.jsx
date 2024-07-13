import React, { useEffect, useState } from 'react'
import Slide from './slide';
import { motion } from 'framer-motion';
import Getdimensions from '../hooks/getdimensions';

const testimonials = [
    {
        name: "John Doe",
        occupation: "Creative Director at Visionary Films",
        review: "Bits & Pieces transformed our film sets into stunning visual masterpieces. Their attention to detail and creativity exceeded our expectations. Highly recommended!",
        color:"var(--sli)",
        flag:false,
        date: "April 12, 2023",
        serviceType: "Commercial Set Design"
    },
    {
        name: "Sarah Johnson",
        occupation: "Event Planner at Elegant Occasions",
        review: "From start to finish, Bits & Pieces managed our corporate event flawlessly. Their professionalism and expertise made the event a huge success. Thank you!",
        color:"var(--purp)",
        flag:true,
        date: "February 8, 2023",
        serviceType: "Event Management"
    },
    {
        name: "Emily Roberts",
        occupation: "Marketing Manager at Stellar Brands",
        review: "Our product launch was a hit thanks to Bits & Pieces. Their innovative advertising solutions and stunning designs captured our audience's attention perfectly.",
        color:"#F1F1F1",
        flag:true,
        date: "May 20, 2023",
        serviceType: "Advertising Department"
    },
    {
        name: "David Lee",
        occupation: "CEO of Apex Enterprises",
        review: "Bits & Pieces provided top-notch rental equipment for our annual conference. The quality and variety of their offerings were impressive, making our event truly memorable.",
        color:"var(--sliyellow)",
        flag:true,
        date: "July 15, 2023",
        serviceType: "Rental Equipment"
    },
    {
        name: "Olivia Brown",
        occupation: "Producer at DreamWorks Productions",
        review: "Working with Bits & Pieces on our commercial set was an absolute pleasure. Their team’s dedication to creating an immersive environment was evident in every detail.",
        color:"#04443c",
        flag:false,
        date: "March 28, 2023",
        serviceType: "Film Set Design"
    },
    {
        name: "Michael Smith",
        occupation: "Director of Events at Luxe Weddings",
        review: "Bits & Pieces made our wedding day unforgettable. Their event and artist management services were exceptional, ensuring everything ran smoothly from start to finish.",
        color:"#F1F1F1",
        flag:true,
        date: "June 10, 2023",
        serviceType: "Event Management",
    },
    {
        name: "Laura Martinez",
        occupation: "Marketing Director at Bright Horizons",
        review: "The outdoor and indoor printing services provided by Bits & Pieces were outstanding. Their attention to quality and design helped us create impactful advertising campaigns.",
        color:"var(--sli)",
        flag:false,
        date: "January 5, 2023",
        serviceType: "Advertising Department"
    }
];

const Testimonials = () => {

  const dimensions = Getdimensions();

  const [constraints,setconstraints] = useState(0)

  useEffect(()=>{
    if(dimensions.w<=1024 && dimensions.h>=1000){
        setconstraints(-dimensions.w*3)
    }else if(dimensions.w<=576 && dimensions.h<1000){
        setconstraints(-dimensions.w*6)
    }else{
        setconstraints(-dimensions.w*1.8)
    }
  },[dimensions])

  return (
    <div className='testimonials-section relative bg-black z-[30] pt-[7vh] tab:pt-[2vh] pb-[20vh] tab:pb-[8vh] mob:pt-[2vh] mob:pb-[15vh] w-full pl-[3.5%]'>
      <TopText/>
      <div className="testimonials-inner relative w-full">
        <motion.div 
        drag="x"
        dragConstraints={{left:constraints, right:0}}
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
            className="testimonial-slider-wrapper flex-shrink-0 flex items-start gap-[4vw] mob:gap-[7vw]">
            {
                testimonials.map( (slide, i) => {
                    return (
                        <Slide flag={slide.flag} color={slide.color} date={slide.date} name={slide.name} occupation={slide.occupation} key={`Client_Review_Slide_${i}`} review={slide.review}/>
                    )
                })
            }
        </motion.div>
      </div>
    </div>
  )
}

const TopText = () => {
    return (
      <div className="text-info w-[93%] mb-[7vh] tab:mb-[5vh] mob:mb-[5vh] flex flex-col justify-start pb-[5vh] tab:pb-[4.5vh] mob:pb-[3vh] border-b-[1px] border-b-[var(--bor)]">
        <p className='text-[3.5vw] leading-none mob:leading-[1.4em] tab:text-[4vw] mob:text-[7vw]'>
            Hear from Our Satisfied Clients
        </p>
      </div>
    )
  }

export default Testimonials
