"use client"
import React, { useEffect, useState } from "react";
import Slide from "./slide";
import { motion } from "framer-motion";
import Getdimensions from "../hooks/getdimensions";
import Cursor from "../Cursor/cursor";
import men1 from "../../../public/customers/men1.webp"
import men2 from "../../../public/customers/men2.webp"
import men3 from "../../../public/customers/men3.webp"
import women1 from "../../../public/customers/women1.webp"
import women2 from "../../../public/customers/women2.webp"
import women3 from "../../../public/customers/women3.webp"
import women4 from "../../../public/customers/women4.webp"

const testimonials = [
  {
    name: "John Doe",
    occupation: "Creative Director at Visionary Films",
    review:
      "Bits & Pieces transformed our film sets into stunning visual masterpieces. Their attention to detail and creativity exceeded our expectations. Highly recommended!",
    color: "var(--sli)",
    flag: false,
    date: "April 12, 2023",
    serviceType: "Commercial Set Design",
    img: men1,
  },
  {
    name: "Sarah Johnson",
    occupation: "Event Planner at Elegant Occasions",
    review:
      "From start to finish, Bits & Pieces managed our corporate event flawlessly. Their professionalism and expertise made the event a huge success. Thank you!",
    color: "var(--purp)",
    flag: true,
    date: "February 8, 2023",
    serviceType: "Event Management",
    img: women1,
  },
  {
    name: "Emily Roberts",
    occupation: "Marketing Manager at Stellar Brands",
    review:
      "Our product launch was a hit thanks to Bits & Pieces. Their innovative advertising solutions and stunning designs captured our audience's attention perfectly.",
    color: "#F1F1F1",
    flag: true,
    date: "May 20, 2023",
    serviceType: "Advertising Department",
    img: women2,
  },
  {
    name: "David Lee",
    occupation: "CEO of Apex Enterprises",
    review:
      "Bits & Pieces provided top-notch rental equipment for our annual conference. The quality and variety of their offerings were impressive, making our event truly memorable.",
    color: "var(--sliyellow)",
    flag: true,
    date: "July 15, 2023",
    serviceType: "Rental Equipment",
    img: men2
  },
  {
    name: "Olivia Brown",
    occupation: "Producer at DreamWorks Productions",
    review:
      "Working with Bits & Pieces on our commercial set was an absolute pleasure. Their team’s dedication to creating an immersive environment was evident in every detail.",
    color: "#04443c",
    flag: false,
    date: "March 28, 2023",
    serviceType: "Film Set Design",
    img: women3
  },
  {
    name: "Michael Smith",
    occupation: "Director of Events at Luxe Weddings",
    review:
      "Bits & Pieces made our wedding day unforgettable. Their event and artist management services were exceptional, ensuring everything ran smoothly from start to finish.",
    color: "#F1F1F1",
    flag: true,
    date: "June 10, 2023",
    serviceType: "Event Management",
    img: men3
  },
  {
    name: "Laura Martinez",
    occupation: "Marketing Director at Bright Horizons",
    review:
      "The outdoor and indoor printing services provided by Bits & Pieces were outstanding. Their attention to quality and design helped us create impactful advertising campaigns.",
    color: "var(--sli)",
    flag: false,
    date: "January 5, 2023",
    serviceType: "Advertising Department",
    img: women4
  },
];

const Testimonials = () => {

  const dimensions = Getdimensions();

  const [constraints, setconstraints] = useState(0);

  useEffect(() => {
    if (dimensions.w <= 1024 && dimensions.h >= 1000) {
      setconstraints(-dimensions.w * 3);
    } else if (dimensions.w <= 576 && dimensions.h < 1000) {
      setconstraints(-dimensions.w * 6);
    } else {
      setconstraints(-dimensions.w * 1.8);
    }
  }, [dimensions]);

  return (
    <>
    <div className="testimonials-section relative bg-black z-[30] pt-[7vh] tab:pt-[2vh] pb-[20vh] tab:pb-[8vh] mob:pt-[2vh] mob:pb-[15vh] w-full pl-[3.5%]">
      <TopText />
      <div className="testimonials-inner relative w-full">
        <motion.div
          drag="x"
          dragConstraints={{ left: constraints, right: 0 }}
          initial={"init"}
          whileTap={"tap"}
          variants={{
            init: {
              cursor: "grab",
            },
            tap: {
              cursor: "grabbing",
            },
          }}
          className="testimonial-slider-wrapper w-fit flex-shrink-0 flex items-start gap-[4vw] mob:gap-[7vw]"
        >
          {
            testimonials.map((slide, i) => {
              return (
                <Slide
                  flag={false}
                  color={slide.color}
                  date={slide.date}
                  name={slide.name}
                  occupation={slide.occupation}
                  key={`Client_Review_Slide_${i}`}
                  review={slide.review}
                  customerImg={slide.img}
                />
              );
            })
          }
        </motion.div>
      </div>
    </div>
    <Cursor scaleUpDiv={".testimonial-slider-wrapper"} moveDiv={".testimonials-section"} text={"Drag"}/>
    </>
  );
};

const TopText = () => {
  return (
    <div className="text-info w-[93%] mb-[7vh] tab:mb-[5vh] mob:mb-[5vh] flex flex-col justify-start pb-[5vh] tab:pb-[4vh] mob:pb-[3vh] border-b-[1px] border-b-[var(--bor)]">
      <p className="text-[2.6vw] font-[mon] uppercase tracking-[1px] leading-[1.3em] mob:leading-[1.4em] tab:text-[3.5vw] mob:text-[6vw]">
        Hear from Our<br/>Satisfied Clients
      </p>
    </div>
  );
};

export default Testimonials;
