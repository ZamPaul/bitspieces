"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ItemCount } from "./ProductCard";
import SocialButton from "../SocialButton/Socialbutton";
import Button from "../button/button";
import WhatsappButton from "./WhatsappButton";

const clip = {
  init:{
    // clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    right:"-75vw",
  },
  open:{
    // clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    right:"0vw",
    transition:{
      duration:.65,
      ease:[0.76, 0, 0.24, 1],
    }
  },
  close:{
    // clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    right:"-75vw",
    transition:{
      duration:.65,
      ease:[0.76, 0, 0.24, 1],
    }
  }
}

const imgVariants = {
  init:{
    clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    // right:"-75vw",
    // opacity:0.6,
  },
  open:{
    clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    // right:"0vw",
    // opacity:1,
    transition:{
      duration:.45,
      delay:0.4,
      ease:[0.76, 0, 0.24, 1],
    }
  },
  close:{
    clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    // right:"-75vw",
    // opacity: 0.6,
    transition:{
      duration:.45,
      ease:[0.76, 0, 0.24, 1],
    }
  }
}

const content =  {
  init:{
    opacity:0.3,
  },
  open:{
    opacity:1,
    transition:{
      duration:.45,
      delay:0.4,
      ease:[0.76, 0, 0.24, 1],
    }
  },
  close:{
    opacity: 0.3,
    transition:{
      duration:.45,
      ease:[0.76, 0, 0.24, 1],
    }
  }
}


const CardPopup = ({ name, img, description, setShowPopup, usage, related }) => {
  return (
    <>
      <motion.div
       initial={"init"}
       variants={clip}
       animate="open"
       exit={"close"}
       className="card-popup-wrapper rounded-l-[15px] z-[2000] bg-[#fff] fixed right-0 top-0 h-screen w-[75vw]">
        <motion.div className="card-popup-inner relative w-full h-full py-[5vh] px-[3.5vw] flex flex-col justify-start items-start">
          <div className="upper-heading flex flex-col gap-[1.5vw] items-start w-[93%] border-b-[1px] border-b-[#12121240] mb-[10px] pb-[10px]">
            <h2 className="text-[#12121290] font-[900] text-[15px] uppercase">
              - Product
            </h2>
            <h1 className="text-[2.5vw] font-[mon] uppercase text-black">
              {name}
            </h1>
          </div>
          <div className="popup-content mt-[5vh] w-full flex flex-col justify-start">
            <div className="upper-product-content w-full flex gap-[3vw] justify-start items-start">
              <motion.div
               initial={"init"}
               variants={imgVariants}
               animate="open"
               exit={"close"}
               className="product-image pointer-events-none w-[18vw] shadow-[0px_0px_50px_-15px_#12121250]">
                <Image
                  src={img}
                  className="w-[18vw] h-[18vw] rounded-[10px] object-cover"
                />
              </motion.div>
              <div className="content w-[35vw] h-full flex flex-col items-start justify-start gap-[4vw]">
                <div className="description-usage flex flex-col gap-[1vw]">
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
                        <ItemCount value={product} key={`Related_product_${i}`} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="right-contact-form mt-[10vh] w-full flex justify-between items-end">
              <p className="text-[2vw] text-black leading-[1.35em] w-[35vw]">
                For more information regarding the product, fill our <span className="text-black para-link-black">Contact</span> form or reach us out through <span className="text-black para-link-black">Whatsapp</span>.
              </p>
              <div className="buttons mt-[2vw] flex gap-[1vw]">
                <Button value={"Fill Form"} href={"/contact"}/>
                {/* <SocialButton target={""} value={"Whatsapp"} href={"#"}/> */}
                <WhatsappButton/>
              </div>
            </div>
          </div>
        </motion.div>
        <Toggle setShowPopup={setShowPopup} />
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

const Toggle = ({ setShowPopup }) => {
  const click = () => {
    setShowPopup(false);
  };

  return (
    <motion.div
      style={{
        pointerEvents: "all",
      }}
      className="toggle-wrapper cursor-pointer w-[60px] h-[60px] rounded-full absolute top-[5.5vh] right-[3.5vw]"
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

export default CardPopup;
