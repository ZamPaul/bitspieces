"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react"
import { transform } from "framer-motion";

const Cursor = ({ scaleUpDiv, moveDiv, text }) => {

  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = 100;
  let maxDistance = 0;
  let prevMaxDistance = 0;
  let prevAngle = 0;
  let cumulativeAngle = 0;

  const ref = useRef(null)
  const textRef = useRef(null)
  const cursorWrap = useRef(null) 

  const rotate = (distance) => {
    let angle = Math.atan2(distance.y, distance.x) * (180 / Math.PI);
    if (angle < 0) {
      angle = 360 + angle;
    }

    let deltaAngle = angle - prevAngle;
    if (deltaAngle > 180) {
      deltaAngle -= 360;
    } else if (deltaAngle < -180) {
      deltaAngle += 360;
    }

    cumulativeAngle += deltaAngle;

    gsap.to(ref.current, {
      rotate: `${cumulativeAngle}deg`,
    });

    prevAngle = angle;
  };

  // to move the mouse, to change X and Y Scales and rotation 
  const mouseMove = (e) => {

    const {clientX, clientY} = e;

    const rect = ref.current.getBoundingClientRect()
    
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.width / 2
    }

    const distance = {
      x: clientX - center.x,
      y: clientY - center.y
    }

    rotate(distance)

    maxDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y))

    const scaleX = transform(maxDistance, [0,rect.width/2], [1,1.3])
    const scaleY = transform(maxDistance, [0,rect.height/2], [1,0.95])

    // rotating and scaling the inner cursor but moving the outer wrap

    gsap.to(cursorWrap.current,{
      left: clientX - cursorSize / 2,
      top: clientY - cursorSize / 2,
      duration:0.4,
    })

    gsap.to(ref.current,{
      scaleX: scaleX,
      scaleY: scaleY,
      duration:0.4,
    })

    gsap.to(textRef.current,{
      left: clientX,
      top: clientY,
      duration:0.4,
    })
  };
  
  const mouseLeave = () => {

  };

  const scaleCursorText = (scale) => {
    gsap.to(textRef.current,{
      scale:scale,
      duration:0.4,
      ease:"power2.inOut"
    })
    gsap.to(cursorWrap.current,{
      scale:scale,
      duration:0.4,
      ease:"power2.inOut"
    })
  }

  useEffect(()=>{
    const setScale = () => {
      if(maxDistance-prevMaxDistance == 0){
        gsap.to(ref.current,{
          scaleX: 1,
          scaleY: 1
        })
      }
      prevMaxDistance=maxDistance
      requestAnimationFrame(setScale)
    }
  
    requestAnimationFrame(setScale)

  },[])

  useEffect(() => {
    const section = document.querySelectorAll(`${scaleUpDiv}`);

    section.forEach((section) => {
      section.addEventListener("mouseenter", () => {
        // setIsHovered(true)
        scaleCursorText(1)
      });
      section.addEventListener("mouseleave", () => { 
        // setIsHovered(false)
        scaleCursorText(0)
      });
    }); 

    return () => {
      section.forEach((section) => {
        section.removeEventListener("mouseenter", () => { 
          // setIsHovered(true)
          scaleCursorText(1)
        });
        section.removeEventListener("mouseleave", () => { 
          // setIsHovered(false)
          scaleCursorText(0)
        });
      });
    };
  }, []);

  useEffect(() => {
    const section = document.querySelector(`${moveDiv}`);
    section.addEventListener("mousemove", mouseMove);
    section.addEventListener("mouseleave", mouseLeave);

    return () => {
      section.removeEventListener("mousemove", mouseMove);
      section.removeEventListener("mouseleave", mouseLeave);
    };
  },[]);

  return (
    <>
    <div ref={cursorWrap} className="cursor-wrap fixed left-0 top-0 scale-0 pointer-events-none z-[10000]">
      <div ref={ref} className="cursor rounded-full w-[100px] h-[100px] bg-[#fff]">
      </div>
    </div>
    <div ref={textRef} className="fixed-text pointer-events-none left-0 top-0 -translate-x-1/2 -translate-y-1/2 scale-0 fixed z-[11000]">
      <h2 className="text-black text-[16px] select-none pointer-events-none">
        {text}
      </h2>
    </div>
    </>
  );
};

export default Cursor;
