"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { ItemCount } from "./ProductCard";
import PopupForm from "./PopupForm";
import gsap from "gsap";
import { productCards } from "./data";
import { opacityVariants, clip } from "./animations";

const getItem = (product) => {
  let item;
  for(let i=0; i<productCards.length; i++){
    if(productCards[i].name==product){
      item=productCards[i]
    }
  }
  return item; 
}

const CardPopup2 = ({ name, img, description, usage, related, setSelected }) => {

  const ref = useRef(null)

  useLayoutEffect(()=>{
    gsap.set(".card-popup-wrapper .popup-content .product-content",{
      height:`${ref.current.offsetHeight}px`
    })
  })

  const changeItem = (product) => {
    setSelected(getItem(product))
  }
  
  return (
    <>
      <motion.div
       initial={"init"}
       variants={clip}
       animate="open"
       exit={"close"}
       className="card-popup-wrapper rounded-[15px] z-[2000] fixed left-1/2 top-1/2">
        <div className="popup-content w-fit py-[5vh] px-[2.5vw] flex gap-[3vw] items-start justify-start">
          <div ref={ref} className="product-image-title w-[28vw] gap-[2vw] relative flex flex-col items-start justify-between">
            <motion.div 
            initial={"init"}
            variants={opacityVariants}
            animate="open"
            exit={"close"}
            className="product-title w-full">
              <h1 className="text-[2vw] text-black uppercase leading-[1.05em] font-[100] font-[mon] ">
                {name}
              </h1>
            </motion.div>
            <motion.div
              layout
              layoutId={name}
              transition={{duration:0.8,ease:[0.25, 1, 0.5, 1],type:"linear"}}
              className="product-image relative pointer-events-none w-[28vw] h-[26vw] shadow-[0px_0px_50px_-15px_#12121250]">
                <Image
                  src={img}
                  style={{objectFit:"cover"}}
                  className="w-[28vw] h-[26vw] rounded-[10px] object-cover"
                />
            </motion.div>
          </div>
          <motion.div
           initial={"init"}
           variants={opacityVariants}
           animate="open"
           exit={"close"}
           className="product-content w-[45vw] flex flex-col justify-between items-start">
            <div className="text-content flex flex-col w-full items-start justify-start gap-[2.5vw]">
              <div className="description-usage pr-[6vw] flex flex-col gap-[1vw]">
                <div className="description">
                  <p className="text-[#121212dc] ">{description}</p>
                </div>
                <div className="usage">
                  <p className="text-[#121212dc]">{usage}</p>
                </div>
              </div>
              <div className="related-products flex items-center gap-[1vw]">
                <h2 className="text-black mr-[1vw]">
                  Related Products: 
                </h2>
                {
                  related.map((product,i)=>{
                    return (
                      <div className="cursor-pointer" onClick={() => { changeItem(product) }}>
                        <ItemCount value={product} key={`Related_product_${i}`} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <PopupForm/>
          </motion.div>
        </div>
        <Toggle setSelected={setSelected} />
      </motion.div>
      </>
  );
};

const lines = [
  {
    style: {
      top: "0px",
      transformOrigin: "25% 50%",
    },
    variants: {
      close: {
        rotate: "0deg",
        x: 0,
      },
      open: {
        rotate: "45deg",
        x: "2px",
      },
    },
  },
  {
    style: {
      bottom: "0px",
      transformOrigin: "25% 50%",
    },
    variants: {
      close: {
        rotate: "0deg",
        x: 0,
      },
      open: {
        rotate: "-45deg",
        x: "2px",
      },
    },
  },
];

const Toggle = ({ setSelected }) => {
  
  const click = () => {
    // setShowPopup(false);
    setSelected(null)
  };

  return (
    <motion.div
      initial={"init"}
      variants={opacityVariants}
      animate="open"
      exit={"close"}
      style={{
        pointerEvents: "all",
      }}
      className="toggle-wrapper cursor-pointer w-[60px] h-[60px] rounded-full absolute top-[4vh] right-[2vw]"
    >
      <motion.div
        onClick={click}
        initial="init"
        whileHover={"hover"}
        className="toggle relative w-full h-full bg-[#fff] rounded-full flex items-center justify-center shadow-[0_0_50px_-5px_#12121260]"
      >
        <motion.div
          variants={{
            init: {
              transform: `translateX(-50%) translateY(-50%) scale(1)`,
            },
            hover: {
              transform: `translateX(-50%) translateY(-50%) scale(0)`,
            },
          }}
          className="back-overlay bg-yellow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
        />
        <div className="lines-wrapper h-[12px] w-[28px] relative flex flex-col justify-center gap-[5px]">
          {lines.map((line, i) => {
            return (
              <motion.div
                initial="open"
                animate={"open"}
                variants={line.variants}
                key={i}
                style={line.style}
                className="line absolute w-full h-[2px] rounded-[50px] left-0 bg-black"
              />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardPopup2;
